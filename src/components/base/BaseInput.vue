<template>
  <div class="Input">
    <input type="text" id="input" class="Input-text" :placeholder="placeholder">
    <label for="input" class="Input-label">{{label}}</label>
</div>
  
</template>
<script>
export default {
  name: "baseInput",
  props: {
    label: {
      type: String,
      default: "Input",
    },
    placeholder: {
      type: String,
      default: "Placeholder",
    },
  },
};
</script>

<style lang="stylus" scoped>

.Input 
    position: relative;

.Input-text
    display: block;
    margin: 0;
    width: 100%;
  /**
   * Input text styles here. The font size and line height of the input are
   * important for determining precise positioning of the label. These will be
   * stored in CSS variables eventually.
   */
 
  /**
   * These props will be added in the demo once variables are defined:
   *
   * padding
   * font-size
   * line-height
   */


.Input-text:focus 
  /**
   * Focused input styles here.
   */


.Input-label 
    display: block;
    position: absolute;
    opacity: 0;
  /**
   * The label gets absolute positioning, and a calculated set of  sizes,
   * positioning, and transforms, based on relativity to the container element
   * and input text styles.
   */

  /**
   * These props will be added in the demo once variables are defined:
   *
   * bottom
   * left
   * font-size
   * line-height
   * transform
   * transform-origin
   * transition
   *
   * They will give the label default positioning and styling.
   */


.Input-text:placeholder-shown + .Input-label 
    visibility: hidden;
    z-index: -1;
  /**
   * While the placeholder is visible, we want to hide the label.
   */



.Input-text:not(:placeholder-shown) + .Input-label,
.Input-text:focus:not(:placeholder-shown) + .Input-label 
  visibility: visible;
  z-index: 1;
  opacity: 1;
  position relative
  top -75px
  text-align left
  padding 5px
  transition: opacity  0.2s ease-in 0.1s; 

  /**
   * While the placeholder is not shown - i.e. the input has a value - we want
   * to animate the label into the floated position.
   */
  
  /**
   * These props will be added in the demo once variables are defined:
   *
   * transform
   * transition
   *
   * They will give the label floated positioning and styling.
   */


</style>
