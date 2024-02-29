<template>
    <div class="modal fade" id="blogModal" tabindex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div v-if="blog" class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="blogModalLabel">Modal title</h1>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { computed } from 'vue';
import { AppState } from '../AppState';

export default {
    setup() {
        return {
            blog: computed(() => AppState.activeBlog)
        }
    }
}
</script>


<style lang="scss" scoped></style>