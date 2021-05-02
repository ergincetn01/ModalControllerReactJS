# ModalControllerReactJS
Modal Controller made with React framework, JS
Modals are very useful and effective parts of web programming. In this repository I made a modal controller with Wrapper, Manager and Reducer for effective and easy-using modals. 
Modals are also known as dialog or popup. 
Modal is a floating screen item. Has a default OK and CANCEL buttons.
You can configure functions and styles of these buttons and also sizes of modals.
In ModalActions, we have two actions named "openModal" and "closeModal". We utilize their action types in this phase.
We can use dispatch for these actions in functional components or constant functions. If you want to use them in class components, you should work with props, reducer and Redux connect.

#DETAILS INFORMATION#
Modals' visibility is controlled with boolean values "true" & "false".
So that, reducer's payload carries boolean values.
We work with switch-case structure for dyanmically detecting the proper action type and behaving up to this.
At external usages, we should specify payload as type-props pairs.

