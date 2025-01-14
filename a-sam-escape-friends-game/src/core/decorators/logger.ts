/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
export function log(env: 'production' | 'development', level: 'information' | 'warning' | 'error' = 'information') {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) { // decorator
        const originalMethod = descriptor.value // la méthode sur laquelle le decorator est posée

        descriptor.value = function(...args: any[]) {
            try {
                console.info('avant appel de ma fonction', target)
                const result = originalMethod.apply(this, args) // exécution de la méthode sur laquelle est posée le décorator
            } catch(err: unknown) {
                console.error(err)
            }

            console.info('après  appel de ma fonction', target)
        }
    }
}