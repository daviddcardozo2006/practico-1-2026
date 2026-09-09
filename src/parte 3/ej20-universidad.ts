/**
 * EJERCICIO 20 (INTEGRADOR) - Sistema de gestión de una universidad
 * ---------------------------------------------------------------------------
 * Persona
 *   ├── Alumno
 *   └── Docente
 *
 * `Persona` es abstracta. `Alumno` y `Docente` implementan
 * `obtenerInformacion()` cada uno a su manera (polimorfismo).
 *
 * La relación con `Materia` es de ida y vuelta:
 *   - `alumno.inscribirse(materia)` debe dejar constancia tanto en el
 *     alumno (su lista de materias) como en la materia (su lista de
 *     alumnos inscriptos).
 *   - `docente.asignarMateria(materia)` es análogo, del lado docente.
 *
 * Los métodos de `Materia` (`inscribirAlumno`, `asignarDocente`) son el
 * mecanismo que usan `Alumno`/`Docente` para avisarle a la materia. No hace
 * falta (ni corresponde) llamarlos "a mano" salvo que quieras inscribir
 * solamente del lado de la materia.
 */

import { throwDeprecation } from "process";

export abstract class Persona {
    constructor(
        public legajo: number,
        public nombre: string,
        public apellido: string,
        public email: string
    ) {}

    abstract obtenerInformacion(): string;
}

export class Materia {
    private alumnosInscriptos: Alumno[] = [];
    private docentesAsignados: Docente[] = [];

    constructor(
        public codigo: number,
        public nombre: string,
        public horas: number
    ) {}

    inscribirAlumno(alumno: Alumno): void {
        // TODO: agregar el alumno si no está ya inscripto (comparar por legajo).
        const yaInscripto = this.alumnosInscriptos.some(a=> a.legajo === alumno.legajo)
        if (yaInscripto){
            throw new Error("Alumno ya inscripto.")
        }
        this.alumnosInscriptos.push(alumno)
    }

    quitarAlumno(alumno: Alumno): void {
        const index = this.alumnosInscriptos.findIndex(a => a.legajo === alumno.legajo);
    
    if (index === -1) {
        throw new Error("El alumno no está inscripto en esta materia.");
    }
    
    this.alumnosInscriptos.splice(index, 1);

    }

    asignarDocente(docente: Docente): void {
        // TODO: agregar el docente si no está ya asignado (comparar por legajo).
        const yaAsignado= this.docentesAsignados.some(a=> a.legajo === docente.legajo)
        if (yaAsignado){
            throw new Error("Docente ya asignado.")
        }
        this.docentesAsignados.push(docente)
    }

    getAlumnosInscriptos(): Alumno[] {
        // TODO: devolver una copia, no la referencia interna.
        throw new Error("Implementar");
    }

    getDocentesAsignados(): Docente[] {
        // TODO: devolver una copia, no la referencia interna.
        throw new Error("Implementar");
    }
}

export class Alumno extends Persona {
    private materias: Materia[] = [];

    constructor(legajo: number, nombre: string, apellido: string, email: string) {
        super(legajo, nombre, apellido, email);
    }

    inscribirse(materia: Materia): void {
        const yaInscripto = this.materias.some(m => m.codigo === materia.codigo);
    
    if (yaInscripto) {
        throw new Error("Ya estás inscripto en esta materia.");
    }
    
    this.materias.push(materia);
    materia.inscribirAlumno(this);
        
    }

    quitarMateria(materia: Materia): void {
        // TODO: quitar la materia de este alumno y avisarle a la materia
        // llamando a materia.quitarAlumno(this).
        throw new Error("Implementar");
    }

    getMaterias(): Materia[] {
        // TODO: devolver una copia, no la referencia interna.
        throw new Error("Implementar");
    }

    obtenerInformacion(): string {
        // TODO: devolver un string que incluya nombre, apellido, legajo y
        // la cantidad de materias inscriptas, mencionando "Alumno".
        throw new Error("Implementar");
    }
}

export class Docente extends Persona {
    private materiasAsignadas: Materia[] = [];

    constructor(
        legajo: number,
        nombre: string,
        apellido: string,
        email: string,
        public especialidad: string
    ) {
        super(legajo, nombre, apellido, email);
    }

    asignarMateria(materia: Materia): void {
        // TODO: agregar la materia a este docente (si no estaba ya) y
        // avisarle a la materia llamando a materia.asignarDocente(this).
        throw new Error("Implementar");
    }

    getMateriasAsignadas(): Materia[] {
        // TODO: devolver una copia, no la referencia interna.
        throw new Error("Implementar");
    }

    obtenerInformacion(): string {
        // TODO: devolver un string que incluya nombre, apellido, legajo y
        // especialidad, mencionando "Docente".
        throw new Error("Implementar");
    }
}
