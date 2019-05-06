<script>
export default {
    name: 'PRow',
  
    componentName: 'PRow',
  
    props: {
      tag: {
        type: String,
        default: 'div'
      },
      gutter: Number,
      type: String,
      justify: {
        type: String,
        default: 'start'
      },
      align: {
        type: String,
        default: 'top'
      }
    },
  
    computed: {
      style() {
        var ret = {};
  
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
  
        return ret;
      }
    },
  
    render(h) {
      return h(this.tag, {
        class: [
          'p-row',
          this.justify !== 'start' ? `is-justify-${this.justify}` : '',
          this.align !== 'top' ? `is-align-${this.align}` : '',
          { 'p-row--flex': this.type === 'flex' }
        ],
        style: this.style
      }, this.$slots.default);
    }
  };
</script>
<style>
.p-row:after,.p-row:before{display:table;content:""}.p-row:after{clear:both}.p-row{position:relative;box-sizing:border-box}.p-row--flex{display:-ms-flexbox;display:flex}.p-row--flex:after,.p-row--flex:before{display:none}.p-row--flex.is-align-bottom{-ms-flex-align:end;align-items:flex-end}.p-row--flex.is-align-middle{-ms-flex-align:center;align-items:center}.p-row--flex.is-justify-space-around{-ms-flex-pack:distribute;justify-content:space-around}.p-row--flex.is-justify-space-between{-ms-flex-pack:justify;justify-content:space-between}.p-row--flex.is-justify-end{-ms-flex-pack:end;justify-content:flex-end}.p-row--flex.is-justify-center{-ms-flex-pack:center;justify-content:center}
</style>
  