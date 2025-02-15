import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@u_ui/u-ui/Button';
import { GitHub } from '@mui/icons-material';
import { useUserLanguage, useTranslate } from '@u-shii/docs/i18n';

export default function EditPage(props) {
    const { sourceLocation } = props;
    const t = useTranslate();
    const userLanguage = useUserLanguage();

    if (!sourceLocation) {
        // An empty div such that the footer
        return <div />;
    }
}