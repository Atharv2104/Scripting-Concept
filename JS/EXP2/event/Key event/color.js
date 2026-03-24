<script>
    function changeBg() {
        let colors = ["red", "green", "blue", "yellow", "pink"];
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        document.body.style.backgroundColor = randomColor;
    }
</script>
