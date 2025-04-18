import React from 'react';
import { Stack, Card } from '@sanity/ui';
import { ObjectInputProps } from 'sanity';
import { renderAvatar } from './renderAvatar';

type AvatarValue = {
    hair?: string;
    facialHair?: string;
    facialHairColor?: string;
    hairColor?: string;
    skinColor?: string;
    accessories?: string;
    accessoriesColor?: string;
};

export function AvatarPreviewInput(props: ObjectInputProps<AvatarValue>) {
    const { value = {}, renderDefault } = props;

    const avatar = renderAvatar({
        ...value,
        size: 300,
        scale: 120,

    });

    const svg = avatar.toString();

    return (
        <Stack space={4}>
            <Card padding={2} shadow={1} radius={2} style={{ maxWidth: 120 }}>
                <div dangerouslySetInnerHTML={{ __html: svg }} />
            </Card>
            {renderDefault(props)}
        </Stack>
    );

}
