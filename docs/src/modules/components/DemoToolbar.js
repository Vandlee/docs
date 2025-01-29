import * as React from 'react';
import PropTypes from 'prop-types';
import copy from 'clipboard-copy';
import { useTheme, styled, alpha } from '@yushii/ui/styles';
import { useTranslate } from '@yushii/docs/i18n';

const Root = styled('div')(({ theme }) => [{}]);

const alwaysTrue = () => true;

export default function DemoToolbar(props) {
  const {
    codeOpen,
    codeVariant,
    copyButtonOnClick,
    copyIcon,
    hasNonSystemDemos,
    demo,
    demoData,
    demoId,
    demoName,
    demoOptions,
    demoSourceId,
    initialFocusRef,
    onCodeOpenChange,
    onResetDemoClick,
    openDemoSource,
    showPreview,
  } = props;

  const t = useTranslate();

  return (
    <React.Fragment>
      <Root aria-label={t('demoToolbarLabel')} {...toolbarProps}></Root>
    </React.Fragment>
  );
}

DemoToolbar.propTypes = {
  codeOpen: PropTypes.bool.isRequired,
  codeVariant: PropTypes.string.isRequired,
  copyButtonOnClick: PropTypes.func.isRequired,
  copyIcon: PropTypes.object.isRequired,
  demo: PropTypes.object.isRequired,
  demoData: PropTypes.object.isRequired,
  demoId: PropTypes.string,
  demoName: PropTypes.string.isRequired,
  demoOptions: PropTypes.object.isRequired,
  demoSourceId: PropTypes.string,
  hasNonSystemDemos: PropTypes.string,
  initialFocusRef: PropTypes.shape({ current: PropTypes.object }).isRequired,
  onCodeOpenChange: PropTypes.func.isRequired,
  onResetDemoClick: PropTypes.func.isRequired,
  openDemoSource: PropTypes.bool.isRequired,
  showPreview: PropTypes.bool.isRequired,
};
