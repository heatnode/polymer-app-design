'use strict';

class HomeLastVisited {
  beforeRegister() {
    this.is = 'home-last-visited';

    this.properties = {
      module: {
        type: Object
      },

      report: {
        type: Object
      }
    };
  }

  ready() {
    this.module = {
      name: 'module 1', numberOfReports: 10,
      desc: 'The description of this module will be displayed inside this box'
    };

    var keyItems1 = [
      {abbr: 'L', desc: 'Weekly Lending outstanding', status: 'good'},
      {abbr: 'D', desc: 'Weekly Deposite outstanding', status: 'bad'},
      {abbr: 'F', desc: 'Weekly FUM outstanding', status: 'good'},
      {abbr: 'I', desc: 'Weekly Insurance outstanding', status: 'good'}];

    this.report = {
      name: 'awesome report', keyItems: keyItems1, mainFigureValue: 34, mainFigureAbbr: 'B',
      mainFigureDesc: 'This Week', mainFigureComparisonValue: 12
    };

    this.section = {
      name: 'section 1',
      numberData: [
        {value: 37, desc: 'This Week', comparisonValue: 60, status: 'good'},
        {value: 23, desc: 'This Week', comparisonValue: 30, status: 'bad'}
      ]
    };
  }

  _onModuleTap() {
    app.pageAnimationForward();

    page(`/${this.module.name}`);
  }

  _onReportTap() {
    // app.pageAnimationForward();
    // 
    // page(`${page.current}/${this.report.name}`);
  }

  _onSectionTap() {
    // app.pageAnimationForward();
    // 
    // page(`${page.current}/${this.section.name}`);
  }
}

Polymer(HomeLastVisited);
