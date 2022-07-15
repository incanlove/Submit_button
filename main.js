window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("button");
    var doneTimeout = null,
         resetTimeout = null;

    if (btn) {
        btn.addEventListener("click", function() {
            const runClass = "btn--running";
            const doneClass = "btn--done";
            // btn running and fill start for the duration od the ms
            const submitDuration = 2000;
            const resetDuration =1500;

            // fake the submition 
            this.disabled = true;
            this.classList.add(runClass);

            clearTimeout(doneTimeout);
            clearTimeout(resetTimeout);

            doneTimeout = setTimeout(() =>{
                this.classList.remove(runClass);
                this.classList.add(doneClass);

                // reset the button 
                resetTimeout = setTimeout(() => {
                    this.disabled = false;
                    this.classList.remove(doneClass);
                }, resetDuration);

            }, 600 + submitDuration);
        });
    }
});