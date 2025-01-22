const errors = {
    404: (res) => {
        res.status(404).render("404");
    },
    500: (error) => {
        console.log(error);
    }
};

export default errors;
