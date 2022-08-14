import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

/**
 * step 1: for trigger function always pass the name of the function in the firstparameter
 * next add array of transition methods as required in second parameter
 * inside transition method on  first parameter
                    `   -> A state-change string takes the form "state1 => state2", where each side is a defined animation state, or an asterisk (*) to refer to a dynamic start or end state.
                        -> The expression string can contain multiple comma-separated statements; for example "state1 => state2, state3 => state4".
                        -> Special values :enter and :leave initiate a transition on the entry and exit states, equivalent to "void => " and " => void".
                        -> Special values :increment and :decrement initiate a transition when a numeric value has increased or decreased in value.
                        -> A function is executed each time a state change occurs in the animation trigger element. The animation steps run when the function returns true.
                    `  
 * second parameter accepts transition steps,One or more animation objects, as returned by the animate() or sequence() function, that form a transformation from one state to another. 
 * A sequence is used by default when you pass an array.
 **/
export const fadeAnimation = trigger('fadeAnimation', [
  transition('* => *', [
    query(':enter', [style({ 
        opacity: 0, 
        // position: 'absolute' 
    })], {
      optional: true,
    }),
    query(
      ':leave',
      [
        style({ opacity: 1 }),
        animate('0.3s', style({ 
            opacity: 0, 
            // position: 'absolute' 
        })),
      ],
      { optional: true }
    ),
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        animate('0.3s', style({ 
            opacity: 1, 
            // position: 'relative' 
        })),
      ],
      { optional: true }
    ),
  ]),
]);
