import inquirer from 'inquirer';
import colors from 'color';

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'What do want to do?',
        choices: [
            {
                value: 1,
                name: `${ '1.' } Search city`
            },
            {
                value: 2,
                name: `${ '2.' } History`
            },
            {
                value: 3,
                name: `${ '3.' } Exit`
            },
        ]
    }
];



const inquirerMenu = async() => {

    console.clear();
    console.log('==========================');
    console.log('  Seleccione una opción' );
    console.log('==========================\n');

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter' } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const placesList = async( places = [] ) => {

    const choices = places.map( (place, i) => {
        const idx = `${i + 1}.`

        return {
            value: place.id,
            name:  `${ idx } ${ place.name }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Select a place',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}   

const mostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`;

        return {
            value: tarea.id,
            name:  `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}



export {
    inquirerMenu,
    pausa,
    leerInput,
    placesList,
    confirmar,
    mostrarListadoChecklist
}
