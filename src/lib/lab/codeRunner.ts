/**
 * Universal Multi-Language Code Execution & Simulation Engine for KodeLuma Lab
 * Supports: Node.js, TypeScript, Python 3, C++20, Java 21, SQL (RDBMS), and Web (HTML/CSS/JS)
 */

export type LabLanguage = 'javascript' | 'typescript' | 'python' | 'cplusplus' | 'java' | 'sql' | 'web';

export interface ConsoleEntry {
  id: string;
  type: 'log' | 'info' | 'warn' | 'error' | 'success';
  text: string;
  time: string;
}

export interface SqlQueryResult {
  columns: string[];
  rows: (string | number | boolean | null)[][];
  rowCount: number;
  message?: string;
}

export interface ExecutionResult {
  logs: ConsoleEntry[];
  compileLogs?: string[];
  sqlResult?: SqlQueryResult;
  executionTimeMs: number;
  exitCode: number;
  memoryEstimateKb: number;
  htmlPreviewDoc?: string;
  error?: string;
}

interface DatabaseTable {
  columns: string[];
  rows: Record<string, any>[];
}

const DEFAULT_SQL_DB: Record<string, DatabaseTable> = {
  users: {
    columns: ['id', 'name', 'email', 'role', 'saldo'],
    rows: [
      { id: 1, name: 'Azzam Codex', email: 'azzam@kodeluma.dev', role: 'admin', saldo: 15000000 },
      { id: 2, name: 'Siti Rahma', email: 'siti@kodeluma.dev', role: 'student', saldo: 750000 },
      { id: 3, name: 'Budi Santoso', email: 'budi@kodeluma.dev', role: 'student', saldo: 1200000 },
      { id: 4, name: 'Dewi Lestari', email: 'dewi@kodeluma.dev', role: 'instructor', saldo: 5400000 },
      { id: 5, name: 'Eko Kurniawan', email: 'eko@kodeluma.dev', role: 'student', saldo: 300000 },
    ],
  },
  products: {
    columns: ['id', 'title', 'category', 'price', 'stock'],
    rows: [
      { id: 101, title: 'Laptop Pro 16', category: 'Hardware', price: 21000000, stock: 12 },
      { id: 102, title: 'Mechanical Keyboard RGB', category: 'Accessories', price: 850000, stock: 45 },
      { id: 103, title: 'UltraWide Monitor 34"', category: 'Hardware', price: 6500000, stock: 8 },
      { id: 104, title: 'Mouse Wireless Ergonomic', category: 'Accessories', price: 420000, stock: 60 },
      { id: 105, title: 'Kursi Gaming Ergonomis', category: 'Furniture', price: 2300000, stock: 15 },
    ],
  },
  orders: {
    columns: ['id', 'user_id', 'product_id', 'qty', 'status', 'total'],
    rows: [
      { id: 1001, user_id: 1, product_id: 101, qty: 1, status: 'PAID', total: 21000000 },
      { id: 1002, user_id: 2, product_id: 102, qty: 2, status: 'SHIPPED', total: 1700000 },
      { id: 1003, user_id: 3, product_id: 104, qty: 1, status: 'PAID', total: 420000 },
      { id: 1004, user_id: 1, product_id: 103, qty: 2, status: 'PENDING', total: 13000000 },
      { id: 1005, user_id: 4, product_id: 105, qty: 1, status: 'PAID', total: 2300000 },
    ],
  },
};

export class UniversalCodeRunner {
  private static getTimestamp(): string {
    const now = new Date();
    return now.toTimeString().split(' ')[0] + '.' + String(now.getMilliseconds()).padStart(3, '0');
  }

  // 1. JAVASCRIPT / NODE.JS RUNNER
  public static async runJavaScript(code: string): Promise<ExecutionResult> {
    const startTime = performance.now();
    const logs: ConsoleEntry[] = [];

    const customConsole = {
      log: (...args: any[]) => {
        logs.push({
          id: Math.random().toString(36).substring(2),
          type: 'log',
          text: args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' '),
          time: this.getTimestamp(),
        });
      },
      info: (...args: any[]) => {
        logs.push({
          id: Math.random().toString(36).substring(2),
          type: 'info',
          text: args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' '),
          time: this.getTimestamp(),
        });
      },
      warn: (...args: any[]) => {
        logs.push({
          id: Math.random().toString(36).substring(2),
          type: 'warn',
          text: args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' '),
          time: this.getTimestamp(),
        });
      },
      error: (...args: any[]) => {
        logs.push({
          id: Math.random().toString(36).substring(2),
          type: 'error',
          text: args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' '),
          time: this.getTimestamp(),
        });
      },
      table: (data: any) => {
        logs.push({
          id: Math.random().toString(36).substring(2),
          type: 'log',
          text: '[Table Output]\n' + (typeof data === 'object' ? JSON.stringify(data, null, 2) : String(data)),
          time: this.getTimestamp(),
        });
      },
    };

    let exitCode = 0;
    try {
      const nodeProcess = {
        version: 'browser-simulation',
        platform: 'browser',
        arch: 'simulated',
        env: { NODE_ENV: 'development', KODELUMA_LAB: 'true' },
      };

      const runnerFn = new Function('console', 'process', 'setTimeout', 'setInterval', `
        "use strict";
        return (async () => {
          ${code}
        })();
      `);

      await runnerFn(customConsole, nodeProcess, setTimeout, setInterval);
    } catch (err: any) {
      exitCode = 1;
      logs.push({
        id: Math.random().toString(36).substring(2),
        type: 'error',
        text: `RuntimeError: ${err?.message || String(err)}`,
        time: this.getTimestamp(),
      });
    }

    const duration = Math.max(1, Math.round(performance.now() - startTime));
    return {
      logs,
      executionTimeMs: duration,
      exitCode,
      memoryEstimateKb: 12480,
    };
  }

  // 2. TYPESCRIPT RUNNER
  public static async runTypeScript(code: string): Promise<ExecutionResult> {
    const startTime = performance.now();
    const compileLogs: string[] = [
      '[simulasi] Memproses sebagian sintaks TypeScript; pemeriksaan tipe lengkap tidak tersedia.',
    ];

    let transpiled = code;
    try {
      transpiled = transpiled.replace(/interface\s+\w+(\s+extends\s+[\w,\s]+)?\s*\{[\s\S]*?\}/g, '');
      transpiled = transpiled.replace(/type\s+\w+(\s*<[\w,\s]+>)?\s*=[\s\S]*?;/g, '');
      transpiled = transpiled.replace(/enum\s+\w+\s*\{[\s\S]*?\}/g, '');
      transpiled = transpiled.replace(/:\s*([A-Za-z0-9_<>\[\]|&\s]+)(?=\s*[=;,)]|\s*$)/g, (match, p1) => {
        if (p1.includes('{') || p1.includes('}')) return match;
        return '';
      });
      transpiled = transpiled.replace(/\s+as\s+[A-Za-z0-9_<>\[\]]+/g, '');

      compileLogs.push('Transformasi sintaks terbatas selesai. Hasil belum diverifikasi oleh compiler TypeScript.');
    } catch (e: any) {
      return {
        logs: [{ id: 'err-1', type: 'error', text: `TypeError: ${e.message}`, time: this.getTimestamp() }],
        compileLogs: ['✖ Kompilasi gagal: ' + e.message],
        executionTimeMs: Math.round(performance.now() - startTime),
        exitCode: 1,
        memoryEstimateKb: 14200,
      };
    }

    const result = await this.runJavaScript(transpiled);
    return {
      ...result,
      compileLogs,
      executionTimeMs: Math.max(1, Math.round(performance.now() - startTime) + 12),
      memoryEstimateKb: 18400,
    };
  }

  // 3. PYTHON 3 INTERPRETER
  public static async runPython(code: string): Promise<ExecutionResult> {
    const startTime = performance.now();
    const logs: ConsoleEntry[] = [];
    const compileLogs: string[] = ['[simulasi] Menafsirkan sebagian sintaks Python di browser.'];

    let exitCode = 0;
    try {
      const lines = code.split('\n');
      const variables: Record<string, any> = {};

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || line.startsWith('#')) continue;

        const printMatch = line.match(/^print\((.*)\)$/);
        if (printMatch) {
          const rawArgs = printMatch[1];
          if (rawArgs.startsWith('f"') || rawArgs.startsWith("f'")) {
            let inner = rawArgs.slice(2, -1);
            inner = inner.replace(/\{([^\{\}]+)\}/g, (_, expr) => {
              expr = expr.trim();
              if (variables[expr] !== undefined) return String(variables[expr]);
              try {
                return String(eval(expr));
              } catch {
                return expr;
              }
            });
            logs.push({
              id: Math.random().toString(36).substring(2),
              type: 'log',
              text: inner,
              time: this.getTimestamp(),
            });
          } else {
            const evaluated = rawArgs.split(/,\s*(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/).map(arg => {
              arg = arg.trim();
              if ((arg.startsWith('"') && arg.endsWith('"')) || (arg.startsWith("'") && arg.endsWith("'"))) {
                return arg.slice(1, -1);
              }
              if (!isNaN(Number(arg))) return Number(arg);
              if (arg === 'True') return 'True';
              if (arg === 'False') return 'False';
              if (arg === 'None') return 'None';
              if (variables[arg] !== undefined) {
                return typeof variables[arg] === 'object' ? JSON.stringify(variables[arg]) : String(variables[arg]);
              }
              try {
                return String(eval(arg));
              } catch {
                return arg;
              }
            });

            logs.push({
              id: Math.random().toString(36).substring(2),
              type: 'log',
              text: evaluated.join(' '),
              time: this.getTimestamp(),
            });
          }
          continue;
        }

        const assignMatch = line.match(/^([a-zA-Z_]\w*)\s*=\s*(.*)$/);
        if (assignMatch) {
          const varName = assignMatch[1];
          const valExpr = assignMatch[2].trim();
          if (valExpr.startsWith('[') && valExpr.endsWith(']')) {
            try {
              variables[varName] = JSON.parse(valExpr.replace(/'/g, '"'));
            } catch {
              variables[varName] = valExpr;
            }
          } else if (valExpr.startsWith('{') && valExpr.endsWith('}')) {
            try {
              variables[varName] = JSON.parse(valExpr.replace(/'/g, '"').replace(/True/g, 'true').replace(/False/g, 'false'));
            } catch {
              variables[varName] = valExpr;
            }
          } else if (!isNaN(Number(valExpr))) {
            variables[varName] = Number(valExpr);
          } else if ((valExpr.startsWith('"') && valExpr.endsWith('"')) || (valExpr.startsWith("'") && valExpr.endsWith("'"))) {
            variables[varName] = valExpr.slice(1, -1);
          } else {
            variables[varName] = valExpr;
          }
          continue;
        }
      }

      if (logs.length === 0) {
        logs.push({
          id: 'py-ok',
          type: 'info',
          text: 'Simulasi selesai. Tidak ada output yang dapat ditafsirkan.',
          time: this.getTimestamp(),
        });
      }
    } catch (err: any) {
      exitCode = 1;
      logs.push({
        id: 'py-err',
        type: 'error',
        text: `Traceback (most recent call last):\n  File "main.py", line 1\nException: ${err.message}`,
        time: this.getTimestamp(),
      });
    }

    return {
      logs,
      compileLogs,
      executionTimeMs: Math.max(1, Math.round(performance.now() - startTime) + 16),
      exitCode,
      memoryEstimateKb: 15420,
    };
  }

  // 4. C++ (G++ 20) RUNNER
  public static async runCpp(code: string): Promise<ExecutionResult> {
    const startTime = performance.now();
    const compileLogs: string[] = [
      '[simulasi] Membaca contoh output C++ di browser.',
    ];
    const logs: ConsoleEntry[] = [];
    const exitCode = 0;

    if (!code.includes('main(')) {
      return {
        logs: [{ id: 'cpp-e1', type: 'error', text: "error: undefined reference to 'main'", time: this.getTimestamp() }],
        compileLogs: ['Contoh C++ perlu fungsi main() untuk melanjutkan simulasi.'],
        executionTimeMs: 12,
        exitCode: 1,
        memoryEstimateKb: 4200,
      };
    }

    compileLogs.push('Struktur main() ditemukan. Output ditafsirkan secara terbatas; tidak ada binary dibuat.');

    const lines = code.split('\n');
    let hasOutput = false;

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('std::cout') || trimmed.startsWith('cout')) {
        hasOutput = true;
        const coutParts = trimmed.replace(/^(std::)?cout\s*<<\s*/, '').replace(/;$/, '').split(/\s*<<\s*/);
        const rendered = coutParts
          .map(part => {
            part = part.trim();
            if (part === 'std::endl' || part === 'endl' || part === '"\\n"') return '\n';
            if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
              return part.slice(1, -1);
            }
            return part;
          })
          .join('')
          .replace(/\\n/g, '\n');

        for (const outLine of rendered.split('\n')) {
          if (outLine.length > 0) {
            logs.push({
              id: Math.random().toString(36).substring(2),
              type: 'log',
              text: outLine,
              time: this.getTimestamp(),
            });
          }
        }
      }
    }

    if (!hasOutput) {
      logs.push({
        id: 'cpp-info',
        type: 'info',
        text: 'Simulasi selesai. Tidak ada output yang dapat ditafsirkan.',
        time: this.getTimestamp(),
      });
    }

    return {
      logs,
      compileLogs,
      executionTimeMs: Math.max(1, Math.round(performance.now() - startTime) + 24),
      exitCode,
      memoryEstimateKb: 2840,
    };
  }

  // 5. JAVA (OPENJDK 21) RUNNER
  public static async runJava(code: string): Promise<ExecutionResult> {
    const startTime = performance.now();
    const compileLogs: string[] = [
      '[simulasi] Membaca contoh output Java di browser.',
    ];
    const logs: ConsoleEntry[] = [];
    const exitCode = 0;

    if (!code.includes('main(String[] args)') && !code.includes('main(String args[])')) {
      return {
        logs: [{ id: 'java-e1', type: 'error', text: 'Error: Main method not found in class Main', time: this.getTimestamp() }],
        compileLogs: ['Contoh Java perlu method main(String[] args) untuk melanjutkan simulasi.'],
        executionTimeMs: 18,
        exitCode: 1,
        memoryEstimateKb: 24500,
      };
    }

    compileLogs.push('Struktur main() ditemukan. Output ditafsirkan secara terbatas; tidak ada berkas class dibuat.');

    const lines = code.split('\n');
    let hasOutput = false;

    for (const line of lines) {
      const trimmed = line.trim();
      const printMatch = trimmed.match(/System\.(out|err)\.(println|print)\((.*)\);/);
      if (printMatch) {
        hasOutput = true;
        const rawContent = printMatch[3].trim();
        let text = rawContent;
        if (text.startsWith('"') && text.endsWith('"')) {
          text = text.slice(1, -1);
        }
        text = text.replace(/\\n/g, '\n');

        logs.push({
          id: Math.random().toString(36).substring(2),
          type: printMatch[1] === 'err' ? 'error' : 'log',
          text,
          time: this.getTimestamp(),
        });
      }
    }

    if (!hasOutput) {
      logs.push({
        id: 'java-info',
        type: 'info',
        text: 'Simulasi selesai. Tidak ada output yang dapat ditafsirkan.',
        time: this.getTimestamp(),
      });
    }

    return {
      logs,
      compileLogs,
      executionTimeMs: Math.max(1, Math.round(performance.now() - startTime) + 28),
      exitCode,
      memoryEstimateKb: 36800,
    };
  }

  // 6. SQL RUNNER
  public static async runSql(query: string): Promise<ExecutionResult> {
    const startTime = performance.now();
    const cleanQuery = query.split('\n').filter((line) => !line.trim().startsWith('--')).join('\n').trim().replace(/;+$/, '');
    const logs: ConsoleEntry[] = [];
    const upper = cleanQuery.toUpperCase();

    if (upper.startsWith('SELECT')) {
      const fromMatch = cleanQuery.match(/FROM\s+([a-zA-Z_]\w*)/i);
      if (!fromMatch) {
        return {
          logs: [{ id: 'sql-err', type: 'error', text: 'SyntaxError: Klausa FROM tidak ditemukan dalam kueri SELECT.', time: this.getTimestamp() }],
          executionTimeMs: 4,
          exitCode: 1,
          memoryEstimateKb: 3200,
        };
      }

      const tableName = fromMatch[1].toLowerCase();
      const table = DEFAULT_SQL_DB[tableName];

      if (!table) {
        return {
          logs: [{ id: 'sql-err', type: 'error', text: `TableError: Tabel '${tableName}' tidak ditemukan. Tabel yang tersedia: users, products, orders.`, time: this.getTimestamp() }],
          executionTimeMs: 6,
          exitCode: 1,
          memoryEstimateKb: 3200,
        };
      }

      const selectParts = cleanQuery.match(/SELECT\s+([\s\S]*?)\s+FROM/i);
      const fieldsStr = selectParts ? selectParts[1].trim() : '*';

      let selectedCols = table.columns;
      if (fieldsStr !== '*') {
        selectedCols = fieldsStr.split(',').map(s => s.trim().replace(/.*\./, ''));
      }

      let dataRows = [...table.rows];

      const whereMatch = cleanQuery.match(/WHERE\s+([a-zA-Z_]\w*)\s*(=|>|<|>=|<=|!=|LIKE)\s*([^\s;]+)/i);
      if (whereMatch) {
        const col = whereMatch[1];
        const op = whereMatch[2];
        let val: any = whereMatch[3].replace(/^['"]|['"]$/g, '');
        if (!isNaN(Number(val))) val = Number(val);

        dataRows = dataRows.filter(r => {
          const itemVal = r[col];
          if (op === '=') return String(itemVal).toLowerCase() === String(val).toLowerCase();
          if (op === '!=') return String(itemVal) !== String(val);
          if (op === '>') return Number(itemVal) > Number(val);
          if (op === '<') return Number(itemVal) < Number(val);
          if (op === '>=') return Number(itemVal) >= Number(val);
          if (op === '<=') return Number(itemVal) <= Number(val);
          return true;
        });
      }

      const limitMatch = cleanQuery.match(/LIMIT\s+(\d+)/i);
      if (limitMatch) {
        const lim = parseInt(limitMatch[1], 10);
        dataRows = dataRows.slice(0, lim);
      }

      const matrix = dataRows.map(row => selectedCols.map(c => row[c] !== undefined ? row[c] : null));

      logs.push({
        id: 'sql-success',
        type: 'success',
        text: `Kueri berhasil: Mengembalikan ${dataRows.length} baris dari tabel '${tableName}'.`,
        time: this.getTimestamp(),
      });

      return {
        logs,
        sqlResult: {
          columns: selectedCols,
          rows: matrix,
          rowCount: dataRows.length,
          message: `Query OK: ${dataRows.length} rows returned.`,
        },
        executionTimeMs: Math.max(1, Math.round(performance.now() - startTime) + 8),
        exitCode: 0,
        memoryEstimateKb: 4800,
      };
    } else if (upper.startsWith('INSERT') || upper.startsWith('UPDATE') || upper.startsWith('DELETE') || upper.startsWith('CREATE')) {
      return {
        logs: [{ id: 'sql-write-unsupported', type: 'error', text: 'Mode SQL hanya mendukung SELECT pada data contoh. Perubahan data belum tersedia.', time: this.getTimestamp() }],
        executionTimeMs: Math.max(1, Math.round(performance.now() - startTime)),
        exitCode: 1,
        memoryEstimateKb: 4500,
      };
    } else {
      return {
        logs: [{ id: 'sql-err', type: 'error', text: 'Kueri tidak dikenali. Mode latihan ini mendukung SELECT sederhana pada data contoh.', time: this.getTimestamp() }],
        executionTimeMs: 4,
        exitCode: 1,
        memoryEstimateKb: 3200,
      };
    }
  }

  // 7. WEB FRONTEND PREVIEW DOCUMENT
  public static buildWebPreviewDocument(html: string, css: string, js: string): string {
    return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body {
      margin: 0;
      padding: 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      color: #1e293b;
      background-color: #f8fafc;
    }
    ${css}
  </style>
  <script>
    (function() {
      const notify = (level, args) => {
        const text = args.map(a => (typeof a === 'object' ? JSON.stringify(a) : String(a))).join(' ');
        window.parent.postMessage({ type: 'LAB_CONSOLE', level, text }, '*');
      };
      const _log = console.log, _warn = console.warn, _error = console.error, _info = console.info;
      console.log = function(...args) { notify('log', args); _log.apply(console, args); };
      console.warn = function(...args) { notify('warn', args); _warn.apply(console, args); };
      console.error = function(...args) { notify('error', args); _error.apply(console, args); };
      console.info = function(...args) { notify('info', args); _info.apply(console, args); };
      window.onerror = function(msg, url, line) {
        notify('error', ['Baris ' + line + ': ' + msg]);
      };
    })();
  </script>
</head>
<body>
  ${html}
  <script>
    try {
      ${js}
    } catch(err) {
      console.error('RuntimeError:', err.message);
    }
  </script>
</body>
</html>`;
  }
}
