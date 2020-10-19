<!--src/components/InboxScreen.vue-->
<template>
  <PureInboxScreen :error="error" />
</template>

<script>
import PureInboxScreen from "./PureInboxScreen";
import { mapState } from "vuex";

export default {
  components: { PureInboxScreen },

  computed: mapState(["error"])
};
</script>
