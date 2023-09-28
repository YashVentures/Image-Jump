const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

document.querySelector("#center");
addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var imga = document.createElement("img");
    imga.setAttribute(
      "src",
      "https://images.unsplash.com/photo-1682685797769-481b48222adf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60"
    );
    div.appendChild(imga);
    document.body.appendChild(div);

    gsap.to(imga, {
      y: 0,
      ease: Power1,
      duration: 0.5,
    });
    gsap.to(imga, {
      y: "100%",
      delay: 0.6,
      ease: Power2,
    });

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
