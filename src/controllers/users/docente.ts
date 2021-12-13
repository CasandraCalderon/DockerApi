import { Request, Response } from "express";
import { JsonWebToken } from "../../middleware/JsonWebToken";
import Administrador, {
  IAdministrador,
} from "../../models/users/administrador";
import Estudiante from "../../models/users/estudiante";
import Docente, { IDocente } from "../../models/users/docente";

class DocenteControllers {
  async index(req: Request, res: Response) {
    const docente = await Docente.find({});
    res.send(docente);
  }

  async createDocente(req: Request, res: Response) {
    const {
      password,
      RU,
      CI,
      Email,
      Telefono,
      Nombre,
      Ap_Paterno,
      Ap_Materno,
    } = req.body;
    if (
      undefined === RU ||
      RU.length === 0 ||
      undefined === CI ||
      CI.length === 0 ||
      undefined === Email ||
      Email.length === 0 ||
      undefined === Telefono ||
      Telefono.length === 0 ||
      undefined === Nombre ||
      Nombre.length === 0 ||
      undefined === Ap_Paterno ||
      Ap_Paterno.length === 0 ||
      undefined === Ap_Materno ||
      Ap_Materno.length === 0
    ) {
      return res.status(200).json({ error: "Llene los datos vacios" });
    }
    if (
      (await Administrador.findOne({ RU: RU })) ||
      (await Docente.findOne({ RU: RU })) ||
      (await Estudiante.findOne({ RU: RU }))
    ) {
      return res
        .status(200)
        .json({ error: "Ya existe un usuario con esta RU" });
    }
    if (!/^[[0-9]{4}$/.test(RU)) {
      return res.status(200).json({ error: "Formato de numero RU no valido" });
    }
    if (
      (await Administrador.findOne({ CI: CI })) ||
      (await Docente.findOne({ CI: CI })) ||
      (await Estudiante.findOne({ CI: CI }))
    ) {
      return res
        .status(200)
        .json({ error: "Ya existe un usuario con este CI" });
    }
    if (!/^[[0-9]{7,8}$/.test(CI)) {
      return res.status(200).json({ error: "Formato de CI no valido" });
    }
    if (!/^[[0-9]{8}$/.test(Telefono)) {
      return res
        .status(200)
        .json({ error: "Formato numero de telefono no valido" });
    }
    if (
      (await Administrador.findOne({ Telefono: Telefono })) ||
      (await Docente.findOne({ Telefono: Telefono })) ||
      (await Estudiante.findOne({ Telefono: Telefono }))
    ) {
      return res
        .status(200)
        .json({ error: "Ya existe un usuario con este numero de telefono" });
    }
    if (
      !/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(Email)
    ) {
      return res
        .status(200)
        .json({ error: "El formato del Correo Electronico no es correcto" });
    }
    if (
      (await Administrador.findOne({ Email: Email })) ||
      (await Docente.findOne({ Email: Email })) ||
      (await Estudiante.findOne({ Email: Email }))
    ) {
      return res
        .status(200)
        .json({ error: "Ya existe un usuario con este Correo Electronico" });
    }
    const newDocente: IDocente = new Docente(req.body);
    newDocente.password = await newDocente.encryptPassword!(password);
    await newDocente.save();
    res.status(200).json({ message: "Docente creado", newDocente });
  }

  async editDocente(req: Request, res: Response) {
    const { id } = req.params;
    await Docente.findByIdAndUpdate(id, req.body);
    res.send("Docente actualizado");
  }
  async deleteDocente(req: Request, res: Response) {
    const { id } = req.params;
    await Docente.findByIdAndDelete(id);
    res.send("Docente Eliminado : 'v");
  }
  async login(req: Request, res: Response) {
    const { username, password } = req.body;
    const user = await Docente.findOne({ username: username });
    if (user) {
      if (await user.matchPassword!(password)) {
        const token = JsonWebToken(user._id);
        return res.status(200).json({ message: "LOGUEADO", user, token });
      }
      return res.status(200).json({ message: "Contraseña incorrecta" });
    }
    return res.status(200).json({ message: "Usuario no encontrado" });
  }
}
export const docenteControllers = new DocenteControllers();
