<script>
    import io from "socket.io-client";

    const socket = io();

    function changeColor(event) {
        console.log(event.target.value);
        socket.emit("colorChanged", {data: event.target.value });
    }

</script>

<input type="color" on:change="{changeColor}">