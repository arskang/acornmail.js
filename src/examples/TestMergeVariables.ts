import * as acornmail from '../index';

(() => {
  try {
    const html = acornmail.MergeVariables(
      '<div>{{Title}}</div>',
      { Title: 'Hola mundo' },
    );
    console.log('MergeVariables', html);
  } catch (error) {
    console.log(error);
  }
})();
