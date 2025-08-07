# Radio

A Radio is a binary input that is usually combined in a group of two or more options. They signal a pattern where users can only select one of the available options. Radios are also known as “radio buttons”.

::: warning Working in progress
This component is still under development. It is not yet available in releases of Atlas.
:::

![][image1]

## Overview

### When to use Radio

Radio must feature a descriptive label. They must be part of a Radio group of at least two elements. A Radio may also have sub-components or child Radio groups.

Use the Radio component to make a single selection from a list of options where only one choice is allowed. When multiple selections are needed, use [Checkbox](checkbox.md)  instead.

### About Radio

Radio includes the following elements.

#### Radio  
Radio buttons make the selection visually distinct.

#### Label  
The Radio must always contain a label, with the text size matching the base font size for consistency with the body text. Labels can include links and bold text and should be concise, clearly indicating the selected option.

* **Do:** Keep the choices short and mutually exclusive. Concise, Clear & Trustworthy  
* **Do:** Use text formatting like bold and italic sparingly in the label.  
* **Do:** Include standalone links within the label to provide additional information regarding a specific option when necessary.  
* **Don't:** Avoid linking the entire label as it could cause issues with the selection.

#### Description (optional)   
If additional information about the label is required, a description can be included.  

## Examples

### Label and description 

Radios must always have a label and can also feature a description.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### Form field

When used in a form, a group of Radios can be wrapped in the Field component to add features like a semantic label, description and help text, validation messages, and more. Visit the Field page for more information.

If using a Radio group outside of a form, follow the instructions in the next demo.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### Radio group

Radios must be used in multiples.

* **Do:** Explain what users should do to use this element effectively.  
* **Don't:** Highlight what users should avoid when using this element.

### With custom input 

An additional input field can be included within the Radio to allow the user to input a custom response. The custom input within the Radio can include any of the following form components designed to gather user input, including:

* TextInput and TextArea  
* Select  
* Combobox  
* ChipInput  
* Lookup  
* A combination of more than one input  
* **Do:** Display the custom input at the end of a Radio group whenever possible.  
* **Do:** Disable the custom input unless its corresponding Radio is selected.  
* **Don't:** Design a layout where multiple Radios include custom inputs visible simultaneously.

## Technical implementation

## Keyboard navigation

*Incorporate keyboard navigation into a table, detailing the keys for interacting with the component via keyboard. This section will clarify how users can navigate the component using various keyboard shortcuts, and it applies only to components with interactive states.*

| Key | Function |
| :---- | :---- |
| <kbd>Tab</kbd> | The focus is placed on the next interactive element in tab order. |
| <kbd>Shift</kbd> \+ <kbd>Tab</kbd> | The focus is placed on the previous interactive element. |
| <kbd>Up arrow</kbd> / <kbd>Down arrow</kbd> / <kbd>Left arrow</kbd> / <kbd>Right arrow</kbd> | When the focus is placed on a Radio within a group, the arrow keys move the focus between the different Radios and select them. |

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABwCAYAAABbwT+GAAAQUklEQVR4Xu2dCbCX0xvHT5EtyhYlLYQsg5mMqdTUtKipjDbSQpItEzKmlJRoTyutEq0I0TYxYohoUDSlqSxNSRvKkjaV/P+fM/P85ty33/r2O7fe+z5n5s6dfvc957zP93m+z3bOj2L//X8YHYqAIpAUgWJKELUMRSA1AkoQtQ5FIA0CShA1D0VACaI2oAiEQ0AjSDjcdFZMEFCCxETRKmY4BJQg4XDTWTFBQAkSE0WrmOEQUIKEw01nxQQBJUhMFK1ihkNACRION50VEwSUIDFRtIoZDgElSDjcdFZMEFCCxETRKmY4BJQg4XDTWTFBQAkSE0WrmOEQUIKEw01nxQQBJUhMFK1ihkNACRION50VEwSUIDFRtIoZDgElSDjcdFZMEFCCxETRKmY4BJQg4XDTWTFBQAkSE0WrmOEQUIKEw01nxQQBJUhMFK1ihkNACRION50VEwSUIDFRtIoZDgElSDjcdFZMEFCCxETRKmY4BJQg4XDTWTFBQAkSE0WrmOEQUIKEw01nxQQBJUhMFK1ihkNACRION50VEwSUIDFRtIoZDgElSDjcdFZMEDihCCL/w11+FytWzKpAfsdEHyrmCYbAcScIZDh06JDZu3ev2bJli1m7dq35+++/zcknn2wqVapkrrrqKnPWWWeZ0047zRQvXlwJc4IZUFF/neNGkCNHjph9+/aZxYsXm7feesvs2bMnLda1atUynTp1Mueff74ljw5FoDAQOC4EIWJ88cUXZuTIkebff//NSc7q1aubbt26mTPPPFOjSU7I6cNhEChUgpBOHThwwDz33HNmxYoVBd73uuuuM/Xq1TOXXXaZOfXUUw0R5pdffjGrVq0y77zzToFnTznlFDN27FhTtmxZm3bpUAR8IVCoBIEcvXr1Mhs2bEjI07RpU9O2bVtbZ5x00kkFCnMIxc8///xjvv/+e9OnT5/EPIr38ePHm4svvlgjiS/r0HVNoRGEtAqv//HHHydgHzNmjC3EIUambhVEoZAn+qxcudKuQfR45ZVXzLnnnptxvupaEQiDQKEQBOMmperfv3/iHadMmWIuuOCCnAybdQ4ePGheeOEF8+mnn9q1WGPChAk2LctlSEvZnZOJpLmsH+bZw4cP24hZokSJMNN1jgcECoUgdKtIo8QoiRyXXnppTuQQ2aWOoaPFugzStptuuimr9ZgPuXbt2mXrHBlEowoVKpjKlSubs88+26uR0pj45JNPbKPhxhtvtO8N8e+++277e+bMmeaMM87Iq7ohH9H7nHPOMTfccENWWGX7AmC6efNm891335m6devm7Kyy2Yc9fvjhB/PTTz+ZOnXqeNkj2Xt4JwiCLV261AwfPtzujyH36NHjmFq1rLlt2zbTpUsXuyYe9/XXX88KNAylZcuWaXVSunRpM2nSJGvAPgYt7Xbt2hn2mTZtmsUCst9xxx12u+nTp9u0MZ/j999/twSksYFsUu/lYw/0QUawYMEC8+KLL5qLLrooH8sWWANnNmLECGtLvvY4LgSh9mjVqlVibwzivPPOO2YAMfShQ4eaL7/80q710ksvWeVnGu77kPIRNfDgePU///zT9O3b1xprmTJlrCHRMcv32L17t+nQoYMlINECgmBkGDFysXc+u3OsvXPnTtO5c2dz4YUXWgPLJ0EwXrB67733bJ1JFM73YI9hw4aZZcuWmXHjxtnatTCG9wgixoAwCDV69Oi8pC8ofd26daZnz54WJ0hI2pWpjnAJMmvWLOvFZbAm5HjkkUfMb7/9ZhVRsWLFAmvyDMrih73kdD/VvvK8XJ/hOW4K3HnnnQUIwjvImVAy4811X9d4joUg2ewbJAiYMSSFzQUj5iV7vkgSBHA3btxoD/YYrVu3Nh07dsybd3TJd+2115oBAwZk9IwuQV577TXbXg4a0/z5883LL79svTxpD0aNLPv377cR6/nnn08Yc8OGDW3qUqpUqQJySUPhm2++sZ03IgORYvDgwfZZ0kM3gmAADz/8sG1p4+HltgDrMJf8njSVKMPgzAgsScUyRZswBJFab/ny5dap8Q6MmjVrmgcffNDWMrKvS5AhQ4ZYTPv162frPAaRq1GjRrauCjoSnAI28uyzz9oIzqhfv7656667CshWZAny1VdfmYEDB1rBCZHcrcrk5QtYbJp/cK5y++232ye4q/Xqq69mTImyIQjFLEZBrXLPPffY9SEjEQpDwTAo5Cmo5YoM7WauwbhkggR//PGHnU+k4n0hAGc/7777bgGC8F6Qkd9vvvmmOf300+089gA3cGRgfLwDZGVAuGuuuSYtScIQhCiHvOyPTBCCd+NzxuTJk21Ky99cgohsELxkyZL2eYkkpJPgIPpHDtYhNWPgOCAM7XwGDo8DZPAusgRZsmSJGTVqlBUYz0v3Kl8DY7vtttsSy82ZMydjoZ6JIPyd9/3ss8/MU089ZbjagoE99thj1tNhAEQWDBhlfvvtt7Z9DUFnz55tIxifQxiKVoz3iSeesGTAINasWWMVz3AjiEsQ1sG4MIpFixZZIyI9feaZZxJG9PPPP5vu3bvbd5s6daqt69KlebnUIKzZu3dv+64YKE0V3ge5iGQc2NJWpzFCg8QlCHK1adPGOhfqN5wCkRo5qH8mTpyYmPP1119b7PgcokMe6YiJbJAKZ1RkCUJRRTHNoAtxxRVXeIkgKAOFZSqqXYJQY6AcGSiTLgkGiddCsRgGg79t377dnty75xTSkcI48fwQRT6DLHSk3DoHknAD4MMPP8xIEOls8S40NzAUIQEGQ6sYMt98882ma9euKdPLMBGEyLF161ZTvnx5K6/sS+SCAAyXyFKk0/TgncBBBnMeeughm3LJ+RfrEzEhnZBAnkc28KHgv+WWW8wDDzxgiVPkinSE+vHHH83jjz9uZUdQBM5XikX4bt++vV27SpUqloCZbvoGu2qpolmydNAtWDF0MSIaBciEwRBZuBaDB6xWrZp5+umnjzJcDC9YgwQjCPk6ZwvUJaSl5PbB4v2vv/6yxT4jXfQMQxDWZB4/GDHy8o44CWRjSA3nRpBkZ1L8/f3337cHukSj2rVr29STFI6OFxE1eNBLtAbXSy65xKa74FvkCAKIFF4UXLkYcSqjdT9HcZs2bTKPPvqo/Rji3X///RkLVpcgGJwYHUbADwRDIXRi3OIXA9mxY4dNmz7//HNbk7jDJQjpGYU5JCAlCzoEMex0KRYEocAnraIobtas2VHrkGJSqBNp3njjjZSHi2EIAhauvLxzcCQjSKoWLAaPrqRRw3d/iHqZBlGTFBJdFEmC4GUJydLCDIbTTACl+jsGSwj+6KOP7CNcP8EbZYpOLkFIdSTFwgAgGN4ueNLPu6MkulsMlHbllVfaay5Vq1a13SWXIKQ+XOUnrWjSpElogpCj092hC9igQYOkBLn33nsN7y7pTjK8ciUIGCArdRQDsl599dWmXLly5vLLL0/UlGEI0rx5c9v4oIainU4KC4bJWttgin7uu+8++x5FkiBuoYmQt956q237HctBFQonn5UOE14fZUnnJx3pXILQ9aJzwuA9iQx4fgpecmrJo91UBg9J94Y98Wp4cTppLkHkfIYrHRw8BmXlFgBRIVMEkRY565CqBdu5borJl87cvD8YbXMp0ukicTWIQTSlrhB5cXjSGElGkCeffNK2gl1Hhb6kWUMUgezoDzuAeBTqqVJjOWsqkkU6AAMOiqTzI4NTbzxDJm+fytAxSjop69evt4/gYSBeNuul62JRTJIOsj59fLmzRKpBdOHsAQW7yiSXJs0RguBthVAUtxTp7lkL0YhzDlqbmbpYUuyTnxPB3HXAdfXq1RaHVEQU/NwIQtRzz1mSYSwyUdfhMNzGh3v2lIwgfJ8HT+/OAU9wwzFQh9DooOlBkc67Bc+j5AwJoiKzdMqKZAQR7yztSv6NYdDuc3vi6by++zcMfO7cubbzwQBAOiPZXu5LRxAUQ9uW9i4KlkuDYvAYKpGFFItB7s8ZDxHDJQgkGDRokOGQja8KU2jj3fGCFOhSN2UiCM/TvULeGjVq2HlESd6Tk37+jfGBJd2mbNq8HCyS/gWjLXMxRLkXRgThMw5MOQNhYNQ0Qkj9GMkIwue0tbmEyVrgjTOA4OgITMEW2ej6EcVpJTNHOoYQg6hCswPHhPMrshFEjBtFEn65kSkkoYbI5iRYIhHhnW8XohgZ4pGyiR7McQlCWzh4IZE9yI3xdnTdKI4xSBRG0UyaI1cp6DLJIRj7UyiLAeP9OWFnP8hBxMTA+JYkxs5XjiH3jBkzEoYkB4VScMvpPakIRgNBSe+ovyAagzqncePGaVNW1uEEnq5RukG6yfswqOmo7+SWM/LRwUKPMgQ/MKA1jhOk5oIQpKnIx77S0Ah+xQE8iP7SACCVYz/2QQ/cSUO/4lyIZqTBfMazhTG838USIVASRkNRKafAgM4BHDkryk92ZULajOSstP3k+gLrkgbRSs101cIFEu/eokUL+9Hbb7991LkJ+/36669WcbzfvHnzErUGp99SuDKfFiQHang5noW87hURIgwecuHChYlXoLPFjWbSMk7e8dByUkwtI05AzlrkygdX9Kl/ZBDF6HDRmMimnnNvC6cyLCI6KSHr8R5046hBZLAX8uI4XPx4R8jCD/JAXmomGddff71t9ROJgo4MwhFpSZ/cQWOCdjB2wRz2wKF+8MEHR52b+CRKoREEIaQeweu5bVKMgfYf3yXAo6MgnsX7kv9z0Cj3dAQMTl4p8LIxjiCAeDzWT/WfEZLzDua5zzCPd5LrJqQK/J3nGSgyWJzyN56HmLyrGL5cdnTnuNEoaEiyDmvxN4iYzTcxXQfF+rJHMqOS9WRvnmU/2dOVN4ifiylryzzwkQI/XQooGDFX2u9Bxyd6Kcz//FOhEkRIgtfAe9OazHWgJHJuwm+2aVWue+jzioAgUOgEkY3xOEQFjJ18PJshB3iZrpNks5Y+owhkg8BxI4hLFGoSyEIuSr+cHJYCj+4GRTLRgg4HoVqjRjZq1WfyhcBxJ4griNz94bfk5kqIfKla1wmDwAlFkDAC6BxFwCcCShCf6OrakUdACRJ5FaoAPhFQgvhEV9eOPAJKkMirUAXwiYASxCe6unbkEVCCRF6FKoBPBJQgPtHVtSOPgBIk8ipUAXwioATxia6uHXkElCCRV6EK4BMBJYhPdHXtyCOgBIm8ClUAnwgoQXyiq2tHHgElSORVqAL4REAJ4hNdXTvyCChBIq9CFcAnAkoQn+jq2pFHQAkSeRWqAD4RUIL4RFfXjjwCSpDIq1AF8ImAEsQnurp25BFQgkRehSqATwSUID7R1bUjj4ASJPIqVAF8IqAE8Ymurh15BJQgkVehCuATASWIT3R17cgjoASJvApVAJ8IKEF8oqtrRx4BJUjkVagC+ERACeITXV078ggoQSKvQhXAJwJKEJ/o6tqRR0AJEnkVqgA+EVCC+ERX1448AkqQyKtQBfCJgBLEJ7q6duQRUIJEXoUqgE8ElCA+0dW1I4+AEiTyKlQBfCKgBPGJrq4deQSUIJFXoQrgEwEliE90de3II6AEibwKVQCfCPwPgZs3VuuL/twAAAAASUVORK5CYII=>