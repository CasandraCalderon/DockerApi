import { Router, Request, Response } from "express"
import {authToken} from '../middleware/authToken'
import multer from '../libs/multer';
//import {authToken} from '../middleware/authToken'
import { aulaControllers } from "../controllers/aula/aula";
import { primeroSControllers } from "../controllers/horarios/PrimeroS";
import { segundoSControllers } from "../controllers/horarios/SegundoS";;
import { materiaControllers } from "../controllers/materias/materia";
import { plantaControllers } from "../controllers/plantas/plantas";
import { semestreControllers } from "../controllers/semestres/semestres";
import { TipoAulaControllers } from "../controllers/tipoAulas/tipoAulas";
import { administradorControllers } from "../controllers/users/administrador";
import { docenteControllers } from "../controllers/users/docente";
import { estudianteControllers } from "../controllers/users/estudiante";
import { avatarControllers } from "../controllers/avatar/Avatar";
import { terceroSControllers } from "../controllers/horarios/TerceroS";
import { cuartoSControllers } from "../controllers/horarios/CuartoS";

const router = Router();

//Controllers Administrador
router.get("/administrador", administradorControllers.index);
router.post("/administrador/create", administradorControllers.createAdministrador);
router.put("/administrador/edit/:id", administradorControllers.editAdministrador);
router.delete("/administrador/delete/:id", administradorControllers.deleteAdministrador);
router.post("/administrador/login", administradorControllers.login);

//Controllers Docentes

router.get("/docente", docenteControllers.index);
router.post("/docente/create", docenteControllers.createDocente);
router.put("/docente/edit/:id", docenteControllers.editDocente);
router.delete("/docente/delete/:id", docenteControllers.deleteDocente);
router.post("/docente/login", docenteControllers.login);

//Controllers Estudiantes

router.get("/estudiante", estudianteControllers.index);
router.post("/estudiante/create", estudianteControllers.createEstudiante);
router.put("/estudiante/edit/:id", estudianteControllers.editEstudiante);
router.delete("/estudiante/delete/:id", estudianteControllers.deleteEstudiante);
router.post("/estudiante/login", estudianteControllers.login);

//Controllers Aulas

router.get("/aula", aulaControllers.index);
router.post("/aula/create", aulaControllers.createAula);
router.put("/aula/edit/:id", aulaControllers.editAula);
router.delete("/aula/delete/:id", aulaControllers.deleteAula);


//Controllers materias

router.get("/materia", materiaControllers.index);
router.post("/materia/create", materiaControllers.createMateria);
router.put("/materia/edit/:id", materiaControllers.editMateria);
router.delete("/materia/delete/:id", materiaControllers.deleteMateria); 


//Controllers Plantas de edificio

router.get("/planta", plantaControllers.index);
router.post("/planta/create", plantaControllers.createPlanta);
router.delete("/primero/delete/:id", plantaControllers.deletePlanta);

//Controllers Tipo de aula

router.get("/tipoAula", TipoAulaControllers.index);
router.post("/tipoAula/create", TipoAulaControllers.createTAula);
router.delete("/tipoAula/delete/:id", TipoAulaControllers.deleteTAula);

//Controllers Semestres

router.get("/semestres", semestreControllers.index);
router.post("/semestres/create", semestreControllers.createSemestre);
router.delete("/semestres/delete/:id", semestreControllers.deleteSemestre);


//Controllers Horarios/ Primer Segundo

router.get("/primeroS", primeroSControllers.index);
router.post("/primeroS/create", primeroSControllers.createClass);
router.put("/primeroS/edit/:id", primeroSControllers.editClass);
router.delete("/primeroS/delete/:id", primeroSControllers.deleteClass);

//Controllers Horarios/ Segundo Semestre

router.get("/segundoS", segundoSControllers.index);
router.post("/segundoS/create", segundoSControllers.createClass);
router.put("/segundoS/edit/:id", segundoSControllers.editClass);
router.delete("/segundoS/delete/:id", segundoSControllers.deleteClass);

//Controllers Horarios/ Tercer Semestre

router.get("/terceroS", terceroSControllers.index);
router.post("/terceroS/create", terceroSControllers.createClass);
router.put("/terceroS/edit/:id", terceroSControllers.editClass);
router.delete("/terceroS/delete/:id", terceroSControllers.deleteClass);

//Controllers Horarios/ Cuarto Semestre

router.get("/cuartoS", cuartoSControllers.index);
router.post("/cuartoS/create", cuartoSControllers.createClass);
router.put("/cuartoS/edit/:id", cuartoSControllers.editClass);
router.delete("/cuartoS/delete/:id", cuartoSControllers.deleteClass);

//Controllers Avatar
router.get("/avatar", avatarControllers.index);
router.post("/avatar/create", multer.single('image'), avatarControllers.createAvatar);
router.put("/avatar/edit/:id", avatarControllers.editAvatar);
router.delete("/avatar/delete/:id", avatarControllers.deleteAvatar);

export default router;




