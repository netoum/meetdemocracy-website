<template>
    <div class="container max-w-6xl mx-auto my-20 px-3 lg:px-0">
        <div class="w-full overflow-x-auto">
            <table class="w-full divide-y divide-gray-200">
                <thead class="bg-[#f3f7f4]">
                    <tr>
                        <th></th>
                        <th v-for="plan in tablePlans" :key="plan.id" class="plan-name">
                            {{ plan.attributes.title }}
                        </th>
                    </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200">

                    <tr v-for="rowvalue in tableRows" :key="rowvalue.id">
                        <th class="category-title"
                            v-if="rowvalue.attributes.cell1 === null && rowvalue.attributes.cell2 === null && rowvalue.attributes.cell3 === null">
                            {{ rowvalue.attributes.rowTitle }}
                        </th>

                        <th v-else class="feature">
                            {{ rowvalue.attributes.rowTitle }}
                        </th>

                        <td v-if="rowvalue.attributes.cell1 === 'Included'" class="data">
                            <img class="mx-auto" src="~/assets/icons/check.svg" alt="check">
                        </td>
                        <td v-else-if="rowvalue.attributes.cell1 === 'Not Included'" class="data">
                            <img class="mx-auto" src="~/assets/icons/nocheck.svg" alt="nocheck">
                        </td>
                        <td v-else class="data border-b">
                            <Markdown :markdown="rowvalue.attributes.cell1 || ''" />
                        </td>

                        <td v-if="rowvalue.attributes.cell2 === 'Included'" class="data">
                            <img class="mx-auto" src="~/assets/icons/check.svg" alt="check">
                        </td>
                        <td v-else-if="rowvalue.attributes.cell2 === 'Not Included'" class="data">
                            <img class="mx-auto" src="~/assets/icons/nocheck.svg" alt="nocheck">
                        </td>
                        <td v-else class="data">
                            <Markdown :markdown="rowvalue.attributes.cell2 || ''" />
                        </td>

                        <td v-if="rowvalue.attributes.cell3 === 'Included'" class="data">
                            <img class="mx-auto" src="~/assets/icons/check.svg" alt="check">
                        </td>
                        <td v-else-if="rowvalue.attributes.cell3 === 'Not Included'" class="data">
                            <img class="mx-auto" src="~/assets/icons/nocheck.svg" alt="nocheck">
                        </td>
                        <td v-else class="data">
                            <Markdown :markdown="rowvalue.attributes.cell3 || ''" />
                        </td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HostedTable',

    data() {
        return {
            tablePlans: null,
            tableRows: null,
            markdown: null
        }
    },
    async fetch() {
        const table_plans = await this.$axios.get(`${this.$store.state.apiUrl}/table-plans?locale=${this.$i18n.locale}`)
        this.tablePlans = table_plans.data.data;


        const table_rows = await this.$axios.get(`${this.$store.state.apiUrl}/hosted-tables?locale=${this.$i18n.locale}&sort=rank:asc`)
        this.tableRows = table_rows.data.data
    },



}
</script>