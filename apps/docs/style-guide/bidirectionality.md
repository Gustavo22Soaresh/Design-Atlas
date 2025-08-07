# Bidirectionality

Bidirectionality supports the mirroring of a user interface to support both languages read from left-to-right (LTR) and those read from right-to-left (RTL).

Languages with left-to-right directionality (LTR) are those with Latin script (English, Spanish, French, German, etc.), Cyrillic (as Russian and Bulgarian), Armenian, Georgian, and Devanagari. Chinese and Japanese also follow the LTR system in digital experiences, although they traditionally use top-to-bottom and RTL directions in printing and writing. Conversely, languages with right-to-left directionality (RTL), such as Arabic or Hebrew, are read from right to left.

## Mirroring behavior

When a layout translates from LTR to RTL, or vice versa, this process is called mirroring, as it essentially reflects the layout orientation of the opposite directionality.

When mirroring a layout, it's important to note that not all elements in the interface will use the same mirroring treatment. Here's a list of elements that should and should not be mirrored:

**Do mirror:**

* Alignment of text in RTL languages  
* Icons with horizontal orientation, , such as **Material Symbols** `arrow_forward` and `arrow_back`  
* Elements within components and pages  
* Buttons and group of buttons  
* Sliders, toggle switches, and control elements  
* Rating selectors  
* Paginations  
* Navigation items

**Don’t mirror:**

* Icons lacking clear directionality, as well as icons representing time, containing check symbols, or designed for right hand use  
* Phone numbers and postal codes  
* URLs and email addresses  
* Components or elements representing time  
* Charts and graphs if mirroring could impact data interpretation  
* Currency symbols

## Text

The text should maintain its natural reading direction for each language. Adjust the components and text alignment to ensure visual consistency for each reading direction.

#### Paragraphs

In cases where we have both LTR and RTL languages in the same paragraph, we will align the text according to the original language of the browser or the selected article.

**Do:**

* Align text within paragraphs based on the language direction of the browser or the selected article.

**Don't:**

* Align text within paragraphs in a direction different from that of the browser or article.  
* Mix alignments within paragraphs containing LTR and RTL languages.

#### URL and email addresses

While text formats are typically mirrored in bidirectional interfaces, URLs and email addresses should remain unaltered. These elements have standardized structures and formats that are universally recognized. Mirroring them may disrupt their functionality, potentially causing errors or user misinterpretation.

**Do:**

* Keep the structure and format of URLs and email addresses intact to ensure their readability and functionality.  
* Align URLs and email addresses with the reading direction of each language.

**Don't:**

* Mirror URLs and email addresses.  
* Alter the format or structure of URLs and email addresses.

## Actions

When mirroring actions, ensure that both buttons and their accompanying icons, if they include directional movement, are mirrored to align with the reading direction of each language.

**Do:**

* Mirror the buttons to match the reading direction of each language.  
* Use the RTL version of the button’s icon in case the icon features directional movement.

**Don't:**

* Rearrange the original position of the stacked buttons.

## Phone numbers

Phone numbers should never be mirrored and must remain left-aligned in both LTR and RTL layouts to ensure proper readability and formatting.

**Do:**

* Always use LTR for numbers in Western Arabic (123) or Eastern Arabic (١٢٣).  
* Keep the phone prefix in its original position.

**Don't:**

* Mirror international prefixes.  
* Mirror phone numbers.

## Addresses

When applying mirroring to addresses, words alignment will be mirrored, whereas numbers will remain unchanged.

**Do:**

* Separate letters and numbers into different inputs to mitigate errors.  
* Align country and city names properly to match the reading direction.

**Don't:**

* Mirror ZIP codes or other numerical data.

## Date and time

When adapting date and time components for bidirectional design, the sequence of date and time elements (such as day, month, year, and hour) will align with the reading direction of the language. However, numbers and icons representing time will not be mirrored.

**Do:**

* Adapt date and time elements with each language's reading direction.  
* Use the appropriate date and time formats for each language.

**Don't:**

* Mirror the order of date and time elements, as it may lead to confusion in interpretation.  
* Mirror numerical values.  
* Mirror icons representing time.

## **Lists**

In a list, all rows should align according to the language direction of the browser or the article.

**Do:**

* Align all rows of the list according to the language direction of the browser or article.  
* Keep the alignment consistent while ensuring each item has the correct language and direction attributes.

**Don't:**

* Mix alignments within a list, as this can cause confusion for readers.

## Progress elements

When mirroring progress elements, only the ones related to sequences should be mirrored.

**Do:**

* Mirror progress elements when they indicate progress or steps, aligning the sequence with the reading direction of each language for consistency.

**Don't:**

* Mirror progress elements when they relate to time, such as the timeline within a video player.

## Images

The original orientation of images and illustrations will not be mirrored. However, accompanying text, such as captions or adjacent text, will be aligned according to the reading direction of each language.

**Do:**

* Maintain the original orientation of images and illustrations.  
* Adjust accompanying text or captions to match the reading direction of the language.

**Don't:**

* Alter the orientation of images or illustrations, as it may change their intended meaning and context.

## **Icons**

Similar to other interface elements, icons can also be adapted to match the reading direction of each language. With **Material Symbols**, it's important to consider whether the icon conveys directionality. Not all icons require mirroring.

**Do:**

* Mirror icons that represent horizontal directionality, such as `arrow_forward`, `arrow_back`, `chevron_left`, `chevron_right`, and similar symbols.  
* Use the same icon for both LTR and RTL when the icon does not include directional indicators (e.g., `home`, `menu`, `info`).  
* Mirror icons that represent ordered content or lists (e.g., `format_list_bulleted`, `format_list_numbered`) to maintain logical flow.  
* Adapt culturally specific icons when needed (e.g., mirror the question mark icon if using localized versions for Hebrew or Arabic).

**Don’t:**

* Mirror icons that represent time, such as `schedule`, `calendar_today`, or `alarm`.  
* Mirror icons designed for right-hand use, like `edit_note` if it implies hand orientation.  
* Mirror icons containing checkmarks (e.g., `check`, `done`) to preserve their universal recognition.  
* Mirror media control icons such as `play_arrow`, `pause`, `fast_rewind`, or `fast_forward`, as this may confuse user expectations.

Refer to the [Material Symbols documentation](https://fonts.google.com/icons) to check if a symbol includes directionality and to see appropriate usage in RTL interfaces.