<script>
    export let child;
    export let isMale = false;
    export let stereotype = "";
    export let onCallMeeting;
    

    console.log(child,isMale);


    import { supermarket } from "../../store/supermarket";


    function eatCeareal() {
        
        //$supermarket.cereal--;  reactive way 

        supermarket.update(value => {
           if(value.cereal > 0) value.cereal -= 1;
           return value;
        })
    }

</script>

<h3 class:male={isMale} class={stereotype || "no-stereotype"} on:click={onCallMeeting(child)} >Hi i'm  {child}</h3>
<div>Ammount of cereal: {$supermarket.cereal}</div>
<button on:click={eatCeareal}>Eat cereal</button>








<style>

    .male {
        background-color: aquamarine;
    }

    .black-sheep {
        background-color: pink;
    }
</style>