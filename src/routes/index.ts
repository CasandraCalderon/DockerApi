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

const router = Router();

//Base de datos Administrador
router.get("/admin", administradorControllers.index);
router.post("/admin/create", administradorControllers.createAdministrador);
router.put("/admin/edit/:id", administradorControllers.editAdministrador);
router.delete("/admin/delete/:id", administradorControllers.deleteAdministrador);
router.post("/admin/login", administradorControllers.login);

//Base de datos Docentes

router.get("/docente", docenteControllers.index);
router.post("/docente/create", multer.single('image'), docenteControllers.createDocente);
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

export default router;



