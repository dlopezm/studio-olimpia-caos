import ResultAutoInput from "./ResultAutoInput";

const resultToTitle = (result: string) => {
    switch (result) {
        case "white":
            return "Victòria ◻️";
        case "dark":
            return "Victòria ◼️";
        case "draw":
            return "Empat";
        default:
            return "";
    }
}
export const Match = {
    title: "Partit",
    name: "match",
    type: "document",
    description:
        "Un partit entre dos equips amb data i resultat.",
    fields: [
        {
            type: "date",
            name: "date",
            title: "Data",
            description: "Data del partit",
            validation: Rule => Rule.required(),
        },
        {
            name: "localTeam",
            title: "Equip ◻️",
            type: "array",
            of: [{ type: "reference", to: [{ type: "player" }] }],
            validation: Rule => Rule.required(),
        },
        {
            name: "awayTeam",
            title: "Equip ◼️",
            type: "array",
            of: [{ type: "reference", to: [{ type: "player" }] }],
            validation: Rule => Rule.required(),
        },
        {
            name: "localScore",
            title: "Gols ◻️",
            type: "number",
            description: "Gols de l'equip blanc",
        },
        {
            name: "awayScore",
            title: "Gols ◼️",
            type: "number",
            description: "Gols de l'equip negre",
        },
        {
            name: 'result',
            title: 'Resultat',
            type: 'string',
            description: "Guanyador",
            options: {
                list: [
                    { title: 'Equip ◻️', value: 'white' },
                    { title: 'Equip ◼️', value: 'dark' },
                    { title: 'Empat', value: 'draw' }
                ],
                layout: 'dropdown',
            },
            components: {
                input: ResultAutoInput
            }
        }
    ],

    preview: {
        // date + result + localTeam + awayTeam
        select: {
            date: "date",
            result: "result",
        },
        prepare({ date, result }) {
            return {
                title: `${date} - ${resultToTitle(result)}`,
            };
        },
    },
    orderings: [
        {
            title: 'De més recent a més antic',
            name: 'dateDesc',
            by: [{ field: 'date', direction: 'desc' }],
        },
        {
            title: 'De més antic a més recent',
            name: 'dateAsc',
            by: [{ field: 'date', direction: 'asc' }],
        }
    ]
};
