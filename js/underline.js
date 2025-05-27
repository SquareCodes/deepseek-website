      //
      // Select the under-Line element
      //
      {
        const underLine = document.querySelectorAll(".under-Line");

        // Set up the IntersectionObserver
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add the 'line-visible' class when the element is in view
              entry.target.classList.add("line-visible");
            } else {
              // Remove the 'line-visible' class when the element is out of view
              entry.target.classList.remove("line-visible");
            }
          });
        });

        // Observe the under-Line element
        for (i of underLine) observer.observe(i);
      }