<script>
    export let parent
    export let onCallMeeting;

    console.log(onCallMeeting);

</script>

<h2 on:click={onCallMeeting(parent)}>Hi i'm  {parent}</h2>