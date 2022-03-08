<script>

    import Nametag from "../../components/Nametag/Nametag.svelte";

    const dogObject1 = {
        name: "Sausage",
        age: 4,
        address: "Puppet street",
        favoriteFood: "bones"
    };

    const dogObject2 = {
        name: "Beef",
        age: 3,
        address: "Puppet street",
        favoriteFood: "bones"
        
    };

</script>


<h1 id="dog1" on:mouseover={() => console.log("Woof")} on:focus>🐶</h1>

<Nametag nametagInfo = {dogObject1}/>

<hr>

<h1 id="dog2">🐕</h1>
<Nametag nametagInfo = {dogObject2}/>

<style>
    #dog1 {
        font-size: 200px;
    }

    #dog2 {
        font-size: 200px;
    }
</style>