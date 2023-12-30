let i = 1;

const vueGlobalOptions = {
    data: () => {
        return {
            count: 0,
            message: 'hello world sxh!',
        }
    },
    mounted() {
        // alert(i)
        console.log(i);
    }
};
