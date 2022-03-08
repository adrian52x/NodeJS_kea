<script>
import App from "../../App.svelte";

    import Apple from "../Tree/Apple.svelte";

    let apples = ['😀', '😁', '😂']

    function pickAnApple() {
        console.log(' picked one ');
        apples.pop();
        apples = apples;
        
    }

    function pickAnApple2() {
        console.log("Picked an apple");
    }

</script>





<div id="tree">
    <h1>Tree</h1>
    <Apple apple= {apples} />

    <hr>

    {#each apples as apple} 
        <Apple apple ={apple}/>
    {/each}


    <button on:click={() => pickAnApple()} >Pick an apple</button>
    
</div>

<div id="trunk">
    
</div>


<style>
    #tree {
        background-color: green;
    }
    #trunk {
        background-color: brown;
        margin-left: 40%;
        margin-right: 40%;
        height: 200px;
       
    }
</style>