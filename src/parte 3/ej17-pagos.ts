/**
 * EJERCICIO 17 - Sistema de pagos
 * ---------------------------------------------------------------------------
 * `procesarPago` no debe saber qué tipo concreto de MetodoPago está
 * utilizando: solo le importa que cumpla la interface.
 */
export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    pagar(monto: number): void {
        // TODO: informar el pago por consola (console.log), mencionando el
        // monto. Cada método de pago debe loguear un mensaje distinto que
        // lo identifique (por ejemplo, mencionando "tarjeta").
        console.log(`Pagando ${monto} con tarjeta.`);

    }
}

export class Transferencia implements MetodoPago {
    pagar(monto: number): void {
        // TODO: idem, mencionando "transferencia"
        console.log(`Pagando ${monto} con transferencia.`);
    }
}

export class MercadoPago implements MetodoPago {
    pagar(monto: number): void {
        // TODO: idem, mencionando "mercado pago"
        console.log(`Pagando ${monto} con Mercado Pago.`);
    }
}

export class Efectivo implements MetodoPago {
    pagar(monto: number): void {
        // TODO: idem, mencionando "efectivo"
        console.log(`Pagando ${monto} con efectivo.`);
    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    // TODO: delegar el pago al método recibido.
    metodo.pagar(monto);
    
}
