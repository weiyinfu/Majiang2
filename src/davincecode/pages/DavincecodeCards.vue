<template>
    <div>
        <div style="font-size: 40px">
            🂠🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂬🂭🂮
            🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂼🂽🂾🂿
            🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃌🃍🃎🃏
            🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃜🃝🃞🃟
        </div>
        <div v-for="(v,k) in CardMap" :key="k">{{v}}
            <span>{{v.image}}</span>
        </div>
    </div>
</template>
<script>
    import {C as CardMap} from "../Card.ts";

    export default {
        data() {
            return {
                CardMap,
            }
        }
    }
</script>