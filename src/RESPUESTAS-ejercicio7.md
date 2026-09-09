# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

Lo principal es el declaration merging: si declarás dos veces una interface con el mismo nombre, ts las junta sola y suma los campos. con type no se puede, tira error de nombre duplicado. esto tiene que ver con el principio de abierto/cerrado, poder extender sin tocar el código original. también interface anda mejor cuando extendés clases, y en los errores de consola se ve más prolijo porque aparece como un tipo con nombre y no todo desarmado.

## ¿Qué permite hacer `type` que `interface` no?
Type tiene más para ofrecer. Permite hacer uniones, por ejemplo type Estado = "activo" | "inactivo", algo que interface no puede porque siempre describe la forma de un objeto, no valores posibles. También sirve para ponerle un nombre más corto a un tipo que ya existe, como type ID = string, o para armar tuplas como type Par = [number, string]. Y cosas como Partial o Record, que sirven para transformar un tipo que ya tenemos en otro parecido, también se hacen con type.

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

si, las dos, pero de forma distinta. interface se extiende con extends, por ejemplo interface Persona extends SerVivo, y se puede extender de varias separando con coma. type no usa extends, se combina con & (intersección), por ejemplo type Persona = SerVivo & { nombre: string }. el resultado se parece pero el mecanismo no es el mismo: uno es herencia y el otro es intersección de tipos.

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

para algo como Alumno nos parece mejor usar interface. una entidad de dominio suele tener una forma fija (nombre, edad, legajo) y es probable que después la extendamos, por ejemplo un AlumnoRegular que herede de Alumno. como es algo que puede ir creciendo, nos conviene el enfoque de interface por lo del principio abierto/cerrado, poder sumar cosas sin romper lo existente. si en algún momento necesitáramos uniones o algo más específico, ahí usaríamos type, pero para una entidad del dominio interface nos parece más natural.
