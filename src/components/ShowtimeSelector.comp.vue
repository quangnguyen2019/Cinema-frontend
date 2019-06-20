<template>
    <div class="selector-container">
        <div class="selector-title">CHỌN SUẤT CHIẾU</div>
        <div v-if="showtimesData.length > 0">
            <div class="showtime-section" v-for="showtime in showtimesData" :key="showtime.id">
                <h6>{{ showtime.dayOfWeek }} ({{ showtime.date }})</h6>

                <router-link :to="'/booking/' + startTime.id" class="showtime-item" v-for="startTime in showtime.startTimes" :key="startTime.id" @click="handleClick(showtime.id)" >
                    {{ startTime.time }}
                </router-link>
            </div>
        </div>
        <div v-else class="no-selector">Vui lòng chọn phim</div>
    </div>
</template>

<script>
export default {
    name: 'ShowtimeSelector',
    props: {
        showtimesData: Array
    }
}
</script>

<style>
    .showtime-section {
        /* margin-bottom: 30px; */
        border-bottom: 1px solid rgb(218, 218, 218);
        padding: 12px;
    }

    .showtime-item {
        display: inline-block;
        padding: 2px 6px;
        margin: 5px;
        border-radius: 4px;
        color: #6c6c6c;
        border: 1px solid #6c6c6c;
    }

    .showtime-item:hover {
        text-decoration: none;
        color: #42b983;
        border-color: #42b983;
    }
</style>
