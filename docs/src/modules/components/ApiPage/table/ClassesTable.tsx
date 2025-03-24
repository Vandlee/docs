/* eslint-disable react/no-danger */
import * as React from 'react';
import { useTranslate } from '@vandlee/docs/i18n';
import { styled, alpha } from '@u_ui/u-ui/styles';
import {
  brandingDarkTheme as darkTheme,
  brandingLightTheme as lightTheme,
} from '@vandlee/docs/branding';
import { ClassDefinition } from 'docs/src/modules/components/ApiPage/definitions/classes';
import StyledTableContainer, { StyledScrollTableContainer } from 'docs/src/modules/components/ApiPage/table/StyledTableContainer';
import ApiWarningAlert from 'docs/src/modules/components/ApiPage/ApiWarningAlert';

const StyledTable = styled('table')(
  ({ theme }) => ({
    textAlign: 'left',
    // Override docs/src/modules/components/MarkdownElement styles
    '&&': {
      display: 'table',
      width: '100%',
    },
    '& .class-name': {
      flexShrink: 0,
      fontWeight: theme.typography.fontWeightSemiBold,
      fontFamily: theme.typography.fontFamilyCode,
      fontSize: theme.typography.pxToRem(13),
      color: `var(--uidocs-palette-primary-600, ${lightTheme.palette.primary[600]})`,
    },
    '& .class-key': {
      ...theme.typography.caption,
      fontFamily: theme.typography.fontFamilyCode,
      fontWeight: theme.typography.fontWeightRegular,
      color: `var(--uidocs-palette-text-primary, ${lightTheme.palette.text.primary})`,
      padding: '1px 4px',
      borderRadius: 6,
      border: '1px solid',
      borderColor: alpha(darkTheme.palette.primary[100], 0.8),
      backgroundColor: `var(--uidocs-palette-primary-50, ${lightTheme.palette.primary[50]})`,
    },
  }),
  ({ theme }) => ({
    [`:where(${theme.vars ? '[data-u-ui-color-scheme="dark"]' : '.mode-dark'}) &`]: {
      '& .class-name': {
        color: `var(--uidocs-palette-primary-200, ${darkTheme.palette.primary[200]})`,
      },
      '& .class-key': {
        color: `var(--uidocs-palette-text-primary, ${darkTheme.palette.text.primary})`,
        borderColor: alpha(darkTheme.palette.primary[400], 0.1),
        backgroundColor: alpha(darkTheme.palette.primary[900], 0.4),
      },
    },
  }),
);

interface ClassesTableProps {
  classes: ClassDefinition[];
  displayClassKeys?: boolean;
}

export default function ClassesTable(props: ClassesTableProps) {
  const { classes, displayClassKeys } = props;
  const t = useTranslate();

  return (
    <StyledTableContainer>
      <StyledScrollTableContainer>
        <StyledTable>
          <thead>
            <tr>
              {/* eslint-disable material-ui/no-hardcoded-labels */}
              <th>{t('api-docs.className')}</th>
              {displayClassKeys && <th>{t('api-docs.ruleName')}</th>}
              <th>{t('api-docs.description')}</th>
              {/* eslint-enable material-ui/no-hardcoded-labels */}
            </tr>
          </thead>
          <tbody>
            {classes.map((params) => {
              const { className, hash, key, description, isGlobal, isDeprecated, deprecationInfo } =
                params;

              return (
                <tr key={className} id={hash}>
                  <td className="algolia-lvl3">
                    <span className="class-name">.{className}</span>
                  </td>
                  {displayClassKeys && (
                    <td>{!isGlobal && <span className="class-key">{key}</span>}</td>
                  )}
                  <td className="algolia-content">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: description || '',
                      }}
                    />
                    {isDeprecated && (
                      <ApiWarningAlert>
                        <b>{t('api-docs.deprecated')}</b>
                        {deprecationInfo && (
                          <React.Fragment>
                            {'－'}
                            <span
                              dangerouslySetInnerHTML={{
                                __html: deprecationInfo,
                              }}
                            />
                          </React.Fragment>
                        )}
                      </ApiWarningAlert>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </StyledScrollTableContainer>
    </StyledTableContainer>
  );
}
