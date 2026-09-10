/**
 * EJERCICIO 12 - Clase abstracta Figura
 * ---------------------------------------------------------------------------
 * `Figura` no se puede instanciar directamente: cada subclase debe
 * implementar calcularArea() y calcularPerimetro() a su manera.
 * Ahí aparece el polimorfismo: un mismo arreglo `Figura[]` puede contener
 * círculos, rectángulos y cuadrados, y a cada uno se le puede pedir su área
 * sin saber de qué tipo concreto es.
 */
export abstract class Figura {
  abstract calcularArea(): number;
  abstract calcularPerimetro(): number;
}

export class Circulo extends Figura {
  constructor(private radio: number) {
    super();
  }

  calcularArea(): number {
    return Math.PI * this.radio ** 2;
  }

  calcularPerimetro(): number {
    return Math.PI * 2 * this.radio;
  }
}

export class Rectangulo extends Figura {
  constructor(
    private base: number,
    private altura: number
  ) {
    super();
  }

  calcularArea(): number {
    return this.base * this.altura;
  }

  calcularPerimetro(): number {
    return this.base * 2 + this.altura * 2;
  }
}

export class Cuadrado extends Figura {
  constructor(private lado: number) {
    super();
  }

  calcularArea(): number {
    return this.lado ** 2;
  }

  calcularPerimetro(): number {
    return this.lado * 4;
  }
}
