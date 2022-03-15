<script>
import Parent from "../../components/Parent/Parent.svelte";
import Children from "../../components/Children/Child.svelte";

import { supermarket } from "../../store/supermarket";

console.log($supermarket);  // use $ sign to see what is inside this supermarket

let parents = [
    {   
        key: 1,
        name: "Jack"
        
    },    
    {
        key: 2,
        name: "Monica"
    }    
]

function handleFamilyMeeting(name){
    console.log("A family meeting has been called by " + name);
}

</script>


<h1> Welcome to the home of the Svelte Family</h1>

{#each parents as parent (parent.key)} 
<Parent onCallMeeting={handleFamilyMeeting} parent ={parent.name}/>
{/each}


<Children onCallMeeting={handleFamilyMeeting} stereotype="bright-kid" isMale={true} child={"Bob Junior"} />
<Children onCallMeeting={handleFamilyMeeting} stereotype="black-sheep" child={"Alle junior"} />

<hr>

<h3>Online portal for supermarket</h3>
<div>{JSON.stringify($supermarket, null, 4)}</div>