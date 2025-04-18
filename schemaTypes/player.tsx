import { AvatarPreviewInput } from './AvatarPreviewInput';
import { renderAvatar } from './renderAvatar';

const HAIR_COLORS = [
    { title: 'Blanc', value: 'f2e3d5' },
    { title: 'Ros clar', value: 'e6bea5' },
    { title: 'Ros daurat', value: 'd6b370' },
    { title: 'Ros', value: 'b58143' },
    { title: 'Marró clar', value: 'a55728' },
    { title: 'Rogenc suau', value: 'c93305' },
    { title: 'Castany rogenc', value: '724133' },
    { title: 'Castany', value: '5C3429' },
    { title: 'Castany fosc', value: '4F2D23' },
    { title: 'Negre', value: '160C0A' }
]

export const Player = {
    title: "Jugador",
    name: "player",
    type: "document",
    description:
        "Un jugador amb els seus atributs.",
    fields: [
        {
            type: "string",
            name: "name",
            title: "Nom",
            validation: Rule => Rule.required(),
        },
        {
            type: "boolean",
            name: "isGuest",
            title: "Convidat?",
            description: "Jugador convidat anònim",
            initialValue: false,
            default: false,
        },
        {
            type: "number",
            name: "attack",
            title: "Atac",
            description: "Remat, posicionament ofensiu, presa de decisions en atac",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "defense",
            title: "Defensa",
            description: "Marcatge, posicionament defensiu, robar, baixar a defensar",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "physical",
            title: "Físic",
            description: "Velocitat i resistència",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "vision",
            title: "Visió",
            description: "Visió de joc, passada, decisions amb pilota",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "technique",
            title: "Tècnica",
            description: "Control de pilota, driblatge, primer toc",
            validation: Rule => Rule.required(),
        },
        {
            type: 'object',
            name: 'avatar',
            title: 'Avatar',
            components: {
                input: AvatarPreviewInput,
            },
            fields: [
                {
                    name: 'hair',
                    title: 'Hair Style',
                    type: 'string',
                    options: {
                        list: [
                            // 🔹 Short haircuts
                            'sides',
                            'theCaesar',
                            'theCaesarAndSidePart',
                            'shortFlat',
                            'shortRound',
                            'shortWaved',
                            'shortCurly',
                            'dreads01',
                            'dreads02',
                            'shaggy',
                            'shaggyMullet',

                            // 🔸 Medium haircuts
                            'frizzle',
                            'fro',
                            'curly',
                            'bob',
                            'froBand',
                            'bun',
                            'longButNotTooLong',
                            'dreads',

                            // 🔸 Long hair
                            'straight01',
                            'straight02',
                            'straightAndStrand',
                            'curvy',
                            'miaWallace',
                            'frida',
                            'shavedSides',
                            'bigHair',

                            // 🎩 Head coverings and accessories
                            'hat',
                            'hijab',
                            'turban',
                            'winterHat1',
                            'winterHat02',
                            'winterHat03',
                            'winterHat04'
                        ]

                    }
                },
                {
                    name: 'hairColor',
                    title: 'Color de cabell',
                    type: 'string',
                    options: {
                        list: HAIR_COLORS
                    }
                },
                {
                    name: 'facialHair',
                    title: 'Pèl facial',
                    type: 'string',
                    options: {
                        list: ['none', 'beardLight', 'beardMedium', 'beardMajestic', 'moustacheFancy', 'moustacheMagnum']
                    }
                },
                {
                    name: 'facialHairColor',
                    title: 'Color de pèl facial',
                    type: 'string',
                    options: {
                        list: HAIR_COLORS
                    }
                },
                {
                    name: 'skinColor',
                    title: 'Color de pell',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Porcellana', value: 'f9c9b6' },
                            { title: 'Clara rosada', value: 'f2d3b1' },
                            { title: 'Beix pàl·lid', value: 'f0c8a0' },
                            { title: 'Ivori càlid', value: 'edd3b0' },
                            { title: 'Beix neutre', value: 'edb98a' },
                            { title: 'Pell daurada', value: 'e0a372' },
                            { title: 'Torrada suau', value: 'd08b5b' }
                        ]
                    }
                },
                {
                    name: 'accessories',
                    title: 'Accessoris',
                    type: 'string',
                    options: {
                        list: ['none', 'blank', 'kurt', 'prescription01', 'prescription02', 'round', 'sunglasses', 'wayfarers']
                    }
                },
                {
                    name: 'accessoriesColor',
                    title: 'Color dels accessoris',
                    type: 'string'
                },
            ],
        }
    ],

    preview: {
        // Name + average of the attributes
        select: {
            title: "name",
            attack: "attack",
            defense: "defense",
            physical: "physical",
            vision: "vision",
            technique: "technique",
            avatar: 'avatar'
        },
        prepare({ title, attack, defense, physical, vision, technique, avatar }) {
            const average = (attack + defense + physical + vision + technique) / 5;

            const svg = renderAvatar({
                seed: title,
                ...avatar,
                teamColor: 'light',
                size: 50,
                scale: 150,
            });
            return {
                title: title,
                subtitle: `(${average.toFixed(2)})`,
                media: () => (
                    <img
                        src={`data:image/svg+xml;utf8,${encodeURIComponent(svg)}`}
                        alt="avatar"
                        style={{ width: '32px', height: '32px', objectFit: 'contain' }}
                    />
                )
            };
        },

    },
};
