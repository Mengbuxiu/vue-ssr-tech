import '../assets/styles/footer.styl'
// 使用jsx只是为了让vue更加灵活
//详见官方文档 https://cn.vuejs.org/v2/guide/render-function.html
export default {
    data() {
        return {
            author: "lin"
        }
    },
    render() {
        return (
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}
