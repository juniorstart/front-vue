<template>
  <div>
    <h2 class="mb-5">Rekrutacje</h2>

    <p class="mt-4 mb-6" v-if="!recruitments.length">Nie masz aktywnych rekrutacji :(</p>

    <v-expansion-panels class="mt-4 mb-6" v-else>
      <v-expansion-panel
        v-for="recruitment in recruitments"
        :key="recruitment.id"
      >
        <v-expansion-panel-header>{{ recruitment.companyName }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <p class="text-right mb-0">
            <v-btn class="mx-4" @click="editRecruitment(recruitment.id)">Edytuj</v-btn>
            <v-btn @click="deleteRecruitment(recruitment.id)">Usuń</v-btn>
          </p>
          <p>{{ recruitment.city }}, {{ recruitment.workPlace }}</p>
          <p class="mt-4">
            Data aplikacji: {{ displayDate(recruitment.applicationDate) }}
          </p>
          <p class="mt-4" v-if="recruitment.companyReply">
            Otrzymano odpowiedź: {{ displayDate(recruitment.dateOfCompanyReply) }}
          </p>
          <p v-if="recruitment.notes">{{ recruitment.notes }}</p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>

    <p class="mt-6 mx-2 mb-1">Dodaj rekrutację</p>
    <v-btn @click="createNewRecruitment" class="mb-6" fab dark>
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex-composition-helpers/dist';
import api from '@/api/recruitments';
import { useToast } from 'vue-toastification/composition';

const { useActions, useState } = createNamespacedHelpers('recruitments');

export default {
  setup(props, ctx) {
    const toast = useToast();

    const { getRecruitments } = useActions(['getRecruitments']);
    const { recruitments } = useState(['recruitments']);

    getRecruitments();

    const createNewRecruitment = () => {
      ctx.root.$router.push({ name: 'NewRecruitment' });
    };

    const editRecruitment = (id) => {
      ctx.root.$router.push({ name: 'EditRecruitment', params: { id } });
    };

    const deleteRecruitment = async (id) => {
      try {
        await api.deleteRecruitment(id);
        getRecruitments();
      } catch (e) {
        toast.error('Coś poszło nie tak :(');
      }
    };

    const displayDate = (date) => (new Date(date)).toLocaleDateString('pl-Pl');

    return {
      recruitments,
      createNewRecruitment,
      displayDate,
      editRecruitment,
      deleteRecruitment,
    };
  },
};
</script>
