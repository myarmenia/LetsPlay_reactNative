import React from 'react';
import { } from 'react-native';

import ScreenMask from '@/components/wrappers/screen';
import DarkButton from '@/assets/imgs/DarkButton';

const Onboard = () => {

    return (
        <ScreenMask>
            <DarkButton label={'Next'} />
        </ScreenMask>
    )
};

export default Onboard;