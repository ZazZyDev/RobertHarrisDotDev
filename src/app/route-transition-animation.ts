import { trigger, transition, style, query, animateChild, group, animate, state } from '@angular/animations';


export const routeTransitionAnimations =
trigger('triggerName', [
    transition('From => To', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ]),
        query(':enter', [style({ left: '-100%', opacity: 0 })]),
        query(':leave', animateChild()),
        group([
          query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
          query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
         ]),
         query(':enter', animateChild())
       ])
  ])
;

export const SlideInOutAnimation =
  trigger('slideInOut', [
      state('From', style({
          'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
      })),
      state('To', style({
          'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
      })),
      transition('From => To', [group([
          animate('400ms ease-in-out', style({
              'opacity': '0'
          })),
          animate('600ms ease-in-out', style({
              'max-height': '0px'
          })),
          animate('700ms ease-in-out', style({
              'visibility': 'hidden'
          }))
      ]
      )]),
      transition('To => From', [group([
          animate('1ms ease-in-out', style({
              'visibility': 'visible'
          })),
          animate('600ms ease-in-out', style({
              'max-height': '500px'
          })),
          animate('800ms ease-in-out', style({
              'opacity': '1'
          }))
      ]
      )])
  ]);


  
export const routerTransition = 
trigger('routerTransition', [
  transition('* <=> *', [

     query(':enter, :leave', style({position:'absolute', width:'50%'})
      , { optional: true }),
         group([ 
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('2s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(-100%)' }),
        animate('2s ease-in-out', style({ transform: 'translateX(100%)' }))
      ], { optional: true }),
    ])
  ])
])
;