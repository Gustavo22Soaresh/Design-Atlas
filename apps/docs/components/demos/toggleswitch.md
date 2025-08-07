# ToggleSwitch

A ToggleSwitch enables the user to instantly toggle between on and off states.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

![][image1]


## **Overview**

### **When to use ToggleSwitch**

Toggle switches must feature a descriptive label.

Use the ToggleSwitch component only where an instant change in the user-interface based on their assigned action is intended. For non-instant selections and selection groups, use [Checkbox](checkbox.md) instead.

Avoid using a ToggleSwitch to control opposing options like Yes/No.

## **About ToggleSwitch**

ToggleSwitch includes the following elements.

#### Label
The ToggleSwitch must always contain a label, with the text size matching the base font size for consistency with the body text. The label should be short, with text that clearly describes the state being toggled.

* **Do:** Use text formatting like bold and italic sparingly in the label.  
* **Do:** Include standalone links within the label to provide additional information regarding a specific option when necessary.  
* **Don't:** Highlight what users should avoid when using this element.

#### Switch  
Toggle switches make the on and off states visually distinct by using different colors and moving the grabber from left to right and vice versa.

#### Description (optional)  
If additional information about the label is required, a description can be included. 

## Examples

### Single switch

Single switches can be used, such as turning a setting on or off.

In rare cases where the purpose of the ToggleSwitch is made clear in context, a visible label is not necessary.

### Form Field

When used in a form, a single ToggleSwitch or group of ToggleSwitches can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. Visit the [Field documentation](https://doc.wikimedia.org/codex/latest/components/demos/field.html) for more information.

If using a ToggleSwitch or ToggleSwitch group outside of a form, follow the instructions in the next demo.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### ToggleSwitch Group

ToggleSwitches can be used in groups.

* **Do:** Use ToggleSwitch groups vertically for a clear and organized layout.

## Technical implementation

## Keyboard navigation

| Key | Function |
| :---- | :---- |
| <kbd>Tab</kbd> | It moves the focus to the next ToggleSwitch within a group or to the next interactive element in tab order when the focus is placed on the last ToggleSwitch of a group. |
| <kbd>Shift</kbd> \+ <kbd>Tab</kbd> | It moves the focus to the previous button within the group or to the previous interactive element when the focus is placed on the first button of the group. |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | If the focus is placed on the ToggleSwitch, it toggles the switch on and off. |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAAB1CAYAAAA7gL8UAAAOmklEQVR4Xu2dB4xX1RLGB0TBLggqVqIgIEWNEEyMohgR0BhRMSEoQQXBLiLFRkBUrKg0uxQbMWoAsQSIJRETS1BERbBjh9DsDXjvN7yz77ouy5Zzrrve7yQbfLv/O/ee78x35puZc/+vzsb/DtMQAkKgWgjUEZGqhZ8uFgKOgIgkRxACERAQkSKAKBNCQESSDwiBCAiISBFAlAkhICLJB4RABAREpAggyoQQEJHkA0IgAgIiUgQQZUIIiEjyASEQAQERKQKIMiEERCT5gBCIgICIFAFEmRACIpJ8QAhEQEBEigCiTAgBEUk+IAQiICAiRQBRJoSAiCQfEAIREBCRIoAoE0JARJIPCIEICIhIEUCUCSEgIskHhEAEBESkCCDKhBAQkeQDQiACAiJSBBBlQgiISPIBIRABAREpAogyIQREJPmAEIiAgIgUAUSZEAIiknxACERAQESKAKJMCAERST4gBCIgICJFAFEmhICIJB8QAhEQEJEigCgTQkBEkg8IgQgIiEgRQJQJISAiyQeEQAQERKQIIMqEEBCR5ANCIAICIlIEEGVCCIhI8gEhEAEBESkCiEU2sXHjRuOHEf7NE486deoYP4zwb573D/cSkf4J1GvxPQNZ1q9fb3/++af98ssv9vPPP/vPH3/8YRs2bMhtdnXr1rUGDRrYdtttZ9tvv71ts802Vq9ePeP3eZNKRMpt2Wv3jQKBIMsPP/xg77zzjj399NP24Ycf1piJdenSxY488khr2bKlbbvttrbVVlvlRigRqca4Qc19EEhEBPrpp5/s2Weftaeeesp+/fVXa9eunR100EF2wAEHWP369T0ahShBdNh66609QmTlV+xZ8lyrVq2yN954wxYuXGhffPGF7bjjjnbppZf68/FcPFPqISKlRriW24dESLivv/7abrnlFvv888/t2GOPtWOOOcZ3fCTdxx9/bMuXL3dyEQmaN29ubdu2tUaNGrnkglApnTkQHZm5bNkye/zxx23p0qV2/PHH2xlnnGE77LBDcrknItVyR0/9+Eg5dvmhQ4faTjvtZP3797dddtnF3n//fXvuueds5cqVm32Evfbay0477TTr2LFjcmfO5m4Q6rXXXrM777zT9tlnHxszZow/M8RPNZISKUyuuolfLDtb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>