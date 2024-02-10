// tasks data
import tasksFirstWeek from '@/core/data/tasks/first-week.json' assert { type: 'json' };
import tasksSecondWeek from '@/core/data/tasks/second-week.json' assert { type: 'json' };
import tasksThirdWeek from '@/core/data/tasks/third-week.json' assert { type: 'json' };

// meetings data
import meetingsFirstWeek from '@/core/data/meetings/first-week.json' assert { type: 'json' };
import meetingsSecondWeek from '@/core/data/meetings/second-week.json' assert { type: 'json' };

// information-blocks data
import companyProcedures from '@/core/data/information-blocks/company-procedures.json' assert { type: 'json' };
import trainings from '@/core/data/information-blocks/trainings.json' assert { type: 'json' };
import rules from '@/core/data/information-blocks/procedures/rules.json' assert { type: 'json' };
import processes from '@/core/data/information-blocks/procedures/processes.json' assert { type: 'json' };
import expertise from '@/core/data/information-blocks/procedures/expertise.json' assert { type: 'json' };



export const ParamDataServiceJsonMap = {
  '/tasks/first-week': tasksFirstWeek,
  '/tasks/second-week': tasksSecondWeek,
  '/tasks/third-week': tasksThirdWeek,
  '/meetings/first-week': meetingsFirstWeek,
  '/meetings/second-week': meetingsSecondWeek,
  '/information-blocks/company-procedures': companyProcedures,
  '/information-blocks/trainings': trainings,
  '/information-blocks/procedures/rules': rules,
  '/information-blocks/procedures/processes': processes,
  '/information-blocks/procedures/expertise': expertise,
}

export const paramDataService = {
  getData: (tagname: string) => ParamDataServiceJsonMap[tagname as keyof typeof ParamDataServiceJsonMap]
}