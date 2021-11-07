import { Router, Request, Response } from "express"
import { aulaControllers } from "../controllers/aula/aula";
import { indexControllers } from "../controllers/index";
import { materiaControllers } from "../controllers/materia";
import { administradorControllers } from "../controllers/users/administrador";
import { docenteControllers } from "../controllers/users/docente";
import { estudianteControllers } from "../controllers/users/estudiante";

const router = Router();

//Base de datos Administrador
router.get("/admin", administradorControllers.index);
router.post("/admin/create", administradorControllers.createAdministrador);
router.put("/admin/edit/:id", administradorControllers.editAdministrador);
router.delete("/admin/delete/:id", administradorControllers.deleteAdministrador);

//Base de datos Docentes

router.get("/docente", docenteControllers.index);
router.post("/docente/create", docenteControllers.createDocente);
router.put("/docente/edit/:id", docenteControllers.editDocente);
router.delete("/docente/delete/:id", docenteControllers.deleteDocente);

//Base de datos Estudiantes

router.get("/estudiante", estudianteControllers.index);
router.post("/estudiante/create", estudianteControllers.createEstudiante);
router.put("/estudiante/edit/:id", estudianteControllers.editEstudiante);
router.delete("/estudiante/delete/:id", estudianteControllers.deleteEstudiante);

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

export default router;



