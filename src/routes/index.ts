import { Router, Request, Response } from "express"
import {authToken} from '../middleware/authToken'
import multer from '../libs/multer';
//import {authToken} from '../middleware/authToken'
import { aulaControllers } from "../controllers/aula/aula";
import { primeroSControllers } from "../controllers/horarios/PrimeroS";
import { segundoSControllers } from "../controllers/horarios/SegundoS";
import { indexControllers } from "../controllers/index";
import { materiaControllers } from "../controllers/materia";
import { plantaControllers } from "../controllers/plantas/plantas";
import { semestreControllers } from "../controllers/semestres/semestres";
import { TipoAulaControllers } from "../controllers/tipoAulas/tipoAulas";
import { administradorControllers } from "../controllers/users/administrador";
import { docenteControllers } from "../controllers/users/docente";
import { estudianteControllers } from "../controllers/users/estudiante";
import { avatarControllers } from "../controllers/avatar/Avatar";
import { terceroSControllers } from "../controllers/horarios/TerceroS";

const router = Router();

//Base de datos Administrador
router.get("/administrador", administradorControllers.index);
router.post("/administrador/create", administradorControllers.createAdministrador);
router.put("/administrador/edit/:id", administradorControllers.editAdministrador);
router.delete("/administrador/delete/:id", administradorControllers.deleteAdministrador);
router.post("/administrador/login", administradorControllers.login);

//Base de datos Docentes

router.get("/docente", docenteControllers.index);
router.post("/docente/create", docenteControllers.createDocente);
router.put("/docente/edit/:id", docenteControllers.editDocente);
router.delete("/docente/delete/:id", docenteControllers.deleteDocente);
router.post("/docente/login", docenteControllers.login);

//Base de datos Estudiantes

router.get("/estudiante", estudianteControllers.index);
router.post("/estudiante/create", estudianteControllers.createEstudiante);
router.put("/estudiante/edit/:id", estudianteControllers.editEstudiante);
router.delete("/estudiante/delete/:id", estudianteControllers.deleteEstudiante);
router.post("/estudiante/login", estudianteControllers.login);

//Base de datos Aulas

router.get("/aula", aulaControllers.index);
router.post("/aula/create", aulaControllers.createAula);
router.put("/aula/edit/:id", aulaControllers.editAula);
router.delete("/aula/delete/:id", aulaControllers.deleteAula);

//Users

router.get("/user", indexControllers.index);
router.post("/user/create", indexControllers.createUser);
router.put("/user/edit/:id", indexControllers.editUser);
router.delete("/user/delete/:id", indexControllers.deleteUser);

//Base de datos materias

router.get("/materia", materiaControllers.index);
router.post("/materia/create", materiaControllers.createMateria);
router.put("/materia/edit/:id", materiaControllers.editMateria);
router.delete("/materia/delete/:id", materiaControllers.deleteMateria); 


//Controlers Plantas de edificio

router.get("/planta", plantaControllers.index);
router.post("/planta/create", plantaControllers.createPlanta);
router.delete("/primero/delete/:id", plantaControllers.deletePlanta);

//Controlers Tipo de aula

router.get("/tipoAula", TipoAulaControllers.index);
router.post("/tipoAula/create", TipoAulaControllers.createTAula);
router.delete("/tipoAula/delete/:id", TipoAulaControllers.deleteTAula);

//Controlers Semestres

router.get("/semestres", semestreControllers.index);
router.post("/semestres/create", semestreControllers.createSemestre);
router.delete("/semestres/delete/:id", semestreControllers.deleteSemestre);


//Controlers Horarios/ Primer Segundo

router.get("/primeroS", primeroSControllers.index);
router.post("/primeroS/create", primeroSControllers.createClass);
router.put("/primeroS/edit/:id", primeroSControllers.editClass);
router.delete("/primeroS/delete/:id", primeroSControllers.deleteClass);

//Controlers Horarios/ Segundo Semestre

router.get("/segundoS", segundoSControllers.index);
router.post("/segundoS/create", segundoSControllers.createClass);
router.put("/segundoS/edit/:id", segundoSControllers.editClass);
router.delete("/segundoS/delete/:id", segundoSControllers.deleteClass);

//Controlers Horarios/ Tercer Semestre

router.get("/terceroS", terceroSControllers.index);
router.post("/terceroS/create", terceroSControllers.createClass);
router.put("/terceroS/edit/:id", terceroSControllers.editClass);
router.delete("/terceroS/delete/:id", terceroSControllers.deleteClass);

export default router;

//Controllers Avatar
router.get("/avatar", avatarControllers.index);
router.post("/avatar/create", multer.single('image'), avatarControllers.createAvatar);
router.put("/avatar/edit/:id", avatarControllers.editAvatar);
router.delete("/avatar/delete/:id", avatarControllers.deleteAvatar);


