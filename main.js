geotab.addin.myCustomPage1 = () => {
  return {
    initialize(api, state, callback) {
      const myButton = document.getElementById("myBtn");

      myButton.addEventListener("click", function() {
        api.getSession(function(session, server) {
          // Simulate sending session info to a remote server
          console.log("Sending session info to remote server:", session);

          // Simulate getting an approval token (replace with actual API call)
          setTimeout(function() {
            const approvalToken = "simulated_approval_token"; // Replace with actual token

            // Check if the token is valid (replace with your logic)
            if (approvalToken) {
              // Create a new div for the iframe with a class name
              const iframeContainer = document.createElement("div");
              iframeContainer.classList.add("iframe-container"); // Add a class
              document.body.appendChild(iframeContainer);

              // Create an iframe element
              const iframe = document.createElement("iframe");
              iframe.src = "https://www.wikipedia.org";

              // Add the iframe to the new div
              iframeContainer.appendChild(iframe); 
            } else {
              console.error("Invalid approval token");
              // Handle invalid token (e.g., display an error message)
            }
          }, 1000); // Simulate 1-second delay
        });
      });

      callback();
    },
    focus(api, state) {
      console.log('User has clicked the add-in and is focused on the UI');
    },
    blur(api, state) {
      console.log('User has navigated away from the add-in');
    }
  };
};
