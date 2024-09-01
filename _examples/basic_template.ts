import { z } from 'zod';
import * as acornmail from '../src/index';

const { acornTypes, acornStyles } = acornmail;

type Colors = {
  Title: string;
  Text: string;
  BackgroundFooter: string;
};

function GetColors(): Colors {
  return {
    Title: '#4a7cf3',
    Text: '#555555',
    BackgroundFooter: '#e7eef7',
  };
}

function GetTitle(): z.infer<typeof acornTypes.ColumnParams> {
  return {
    Content: '<h1>{{Title}}</h1>',
    Styles: {
      Align: acornStyles.align.Center,
      TextColor: GetColors().Title,
    },
  };
}

const ColumnParamsSimpleArray = z.array(acornTypes.ColumnParams);
const ColumnParamsDoubleArray = z.array(ColumnParamsSimpleArray);

function GetHeader(): z.infer<typeof ColumnParamsDoubleArray> {
  const acorn = acornmail.NewAcornEmailComponents();
  const headerTitle = GetTitle();
  return [
    [{ Content: acorn.NewSpacer() }],
    [headerTitle],
    [{ Content: acorn.NewDivider(GetColors().Title) }],
  ];
}

function GetButton(): string {
  const acorn = acornmail.NewAcornEmailComponents();
  return acorn.NewButton({
    Text: '{{TxtButton}}',
    Link: '{{Url}}',
    Styles: {
      FullWidth: true,
      Color: GetColors().Title,
      Type: acornStyles.types.Pill,
      Align: acornStyles.align.Center,
    },
  });
}

function GetFooter(): string {
  const acorn = acornmail.NewAcornEmailComponents();
  const row = acorn.NewRow([
    {
      Content: '<b>{{Footer}}</b>',
      Styles: {
        Width: acornStyles.columns.ThreeQuarters,
        Align: acornStyles.align.Center,
      },
    },
  ]);

  const colors = GetColors();
  return acorn.NewAlert({
    Content: row,
    Styles: {
      Color: colors.BackgroundFooter,
      TextColor: colors.Text,
    },
  });
}

export default function GetBasicTemplate(
  content: string,
  variables: z.infer<typeof acornTypes.AcornVariables>,
  button: boolean,
): string {
  const acorn = acornmail.NewAcornEmailComponents();

  const rowSpacer: z.infer<typeof ColumnParamsSimpleArray> = [
    { Content: acorn.NewSpacer() },
  ];

  const columns = GetHeader();
  columns.push([{ Content: content }]);
  columns.push(rowSpacer);

  if (button) {
    columns.push([{ Content: GetButton() }]);
    columns.push(rowSpacer);
  }

  const boilerplate = acorn.GetBoilerplate([
    acorn.NewGrid(columns),
    GetFooter(),
  ], true);

  return acornmail.MergeVariables(boilerplate, variables);
}
