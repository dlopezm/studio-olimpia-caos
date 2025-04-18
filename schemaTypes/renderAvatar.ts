import { createAvatar } from '@dicebear/core';
import { avataaars } from '@dicebear/collection';

type AvatarRenderOptions = {
    hair?: string;
    facialHair?: string;
    facialHairColor?: string;
    hairColor?: string;
    skinColor?: string;
    accessories?: string;
    accessoriesColor?: string;
    size: number;
    scale: number;
};

export function renderAvatar({
    hair,
    facialHair,
    facialHairColor,
    hairColor,
    skinColor,
    accessories,
    accessoriesColor,
    size,
    scale
}: AvatarRenderOptions): string {
    const avatar = createAvatar(avataaars, {
        size,
        facialHairProbability: 100,
        accessoriesProbability: 100,
        scale,
        translateY: 20,

        eyes: ["default"],
        eyebrows: ["default"],
        clothing: ["shirtVNeck"],
        clothesColor: ["F00"],
        mouth: ["twinkle"],

        top: hair ? [hair as any] : [],
        hairColor: hairColor ? [hairColor] : ["000"],
        facialHair: facialHair ? [facialHair as any] : [],
        facialHairColor: facialHairColor ? [facialHairColor] : ["000"],
        skinColor: skinColor ? [skinColor] : ["aaaaaa"],
        accessories: accessories ? [accessories as any] : [],
        accessoriesColor: accessoriesColor ? [accessoriesColor as any] : ["000"],
    });

    return avatar.toString();
}
