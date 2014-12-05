var stuff = [];

function find(keywords, map) {
  return map.filter(function(doc){
    return keywords.every(function(keyword){
      var regex = new RegExp(keyword, 'i');
      return regex.test(doc.parent + ' ' + doc.name);
    });
  });
}

function map(obj, parent) {
  var result;

  if (obj.textRaw && obj.name) {
    result = {
      title: obj.textRaw,
      name: obj.name,
      parent: parent || ''
    };
    stuff.push(result);
  }

  for (var key in obj) {
    if (Array.isArray(obj[key])) {
      obj[key].forEach(function(articles){
        map(articles, result ? result.name : null);
      });
    }
  }
};

var json = {
  "source": "doc/api/all.markdown",
  "miscs": [
    {
      "textRaw": "About this Documentation",
      "name": "About this Documentation",
      "type": "misc",
      "desc": "<p>The goal of this documentation is to comprehensively explain the Node.js\nAPI, both from a reference as well as a conceptual point of view.  Each\nsection describes a built-in module or high-level concept.\n\n</p>\n<p>Where appropriate, property types, method arguments, and the arguments\nprovided to event handlers are detailed in a list underneath the topic\nheading.\n\n</p>\n<p>Every <code>.html</code> document has a corresponding <code>.json</code> document presenting\nthe same information in a structured manner.  This feature is\nexperimental, and added for the benefit of IDEs and other utilities that\nwish to do programmatic things with the documentation.\n\n</p>\n<p>Every <code>.html</code> and <code>.json</code> file is generated based on the corresponding\n<code>.markdown</code> file in the <code>doc/api/</code> folder in node&#39;s source tree.  The\ndocumentation is generated using the <code>tools/doc/generate.js</code> program.\nThe HTML template is located at <code>doc/template.html</code>.\n\n</p>\n",
      "miscs": [
        {
          "textRaw": "Stability Index",
          "name": "Stability Index",
          "type": "misc",
          "desc": "<p>Throughout the documentation, you will see indications of a section&#39;s\nstability.  The Node.js API is still somewhat changing, and as it\nmatures, certain parts are more reliable than others.  Some are so\nproven, and so relied upon, that they are unlikely to ever change at\nall.  Others are brand new and experimental, or known to be hazardous\nand in the process of being redesigned.\n\n</p>\n<p>The stability indices are as follows:\n\n</p>\n<pre><code>Stability: 0 - Deprecated\nThis feature is known to be problematic, and changes are\nplanned.  Do not rely on it.  Use of the feature may cause warnings.  Backwards\ncompatibility should not be expected.</code></pre>\n<pre><code>Stability: 1 - Experimental\nThis feature was introduced recently, and may change\nor be removed in future versions.  Please try it out and provide feedback.\nIf it addresses a use-case that is important to you, tell the node core team.</code></pre>\n<pre><code>Stability: 2 - Unstable\nThe API is in the process of settling, but has not yet had\nsufficient real-world testing to be considered stable. Backwards-compatibility\nwill be maintained if reasonable.</code></pre>\n<pre><code>Stability: 3 - Stable\nThe API has proven satisfactory, but cleanup in the underlying\ncode may cause minor changes.  Backwards-compatibility is guaranteed.</code></pre>\n<pre><code>Stability: 4 - API Frozen\nThis API has been tested extensively in production and is\nunlikely to ever have to change.</code></pre>\n<pre><code>Stability: 5 - Locked\nUnless serious bugs are found, this code will not ever\nchange.  Please do not suggest changes in this area; they will be refused.</code></pre>\n"
        },
        {
          "textRaw": "JSON Output",
          "name": "json_output",
          "stability": 1,
          "stabilityText": "Experimental",
          "desc": "<p>Every HTML file in the markdown has a corresponding JSON file with the\nsame data.\n\n</p>\n<p>This feature is new as of node v0.6.12.  It is experimental.\n\n</p>\n",
          "type": "misc",
          "displayName": "JSON Output"
        }
      ]
    },
    {
      "textRaw": "Synopsis",
      "name": "Synopsis",
      "type": "misc",
      "desc": "<p>An example of a <a href=\"http.html\">web server</a> written with Node which responds with &#39;Hello\nWorld&#39;:\n\n</p>\n<pre><code>var http = require(&#39;http&#39;);\n\nhttp.createServer(function (request, response) {\n  response.writeHead(200, {&#39;Content-Type&#39;: &#39;text/plain&#39;});\n  response.end(&#39;Hello World\\n&#39;);\n}).listen(8124);\n\nconsole.log(&#39;Server running at http://127.0.0.1:8124/&#39;);</code></pre>\n<p>To run the server, put the code into a file called <code>example.js</code> and execute\nit with the node program\n\n</p>\n<pre><code>&gt; node example.js\nServer running at http://127.0.0.1:8124/</code></pre>\n<p>All of the examples in the documentation can be run similarly.\n\n</p>\n"
    },
    {
      "textRaw": "Global Objects",
      "name": "Global Objects",
      "type": "misc",
      "desc": "<p>These objects are available in all modules. Some of these objects aren&#39;t\nactually in the global scope but in the module scope - this will be noted.\n\n</p>\n",
      "globals": [
        {
          "textRaw": "global",
          "name": "global",
          "type": "global",
          "desc": "<p>In browsers, the top-level scope is the global scope. That means that in\nbrowsers if you&#39;re in the global scope <code>var something</code> will define a global\nvariable. In Node this is different. The top-level scope is not the global\nscope; <code>var something</code> inside a Node module will be local to that module.\n\n</p>\n"
        },
        {
          "textRaw": "process",
          "name": "process",
          "type": "global",
          "desc": "<p>The process object. See the [process object][] section.\n\n</p>\n"
        },
        {
          "textRaw": "console",
          "name": "console",
          "type": "global",
          "desc": "<p>Used to print to stdout and stderr. See the [console][] section.\n\n</p>\n"
        },
        {
          "textRaw": "Class: Buffer",
          "type": "global",
          "name": "Buffer",
          "desc": "<p>Used to handle binary data. See the [buffer section][]\n\n</p>\n"
        },
        {
          "textRaw": "clearInterval(t)",
          "type": "global",
          "name": "clearInterval",
          "desc": "<p>Stop a timer that was previously created with <code>setInterval()</code>. The callback\nwill not execute.\n\n</p>\n<p>The timer functions are global variables. See the [timers][] section.\n\n</p>\n"
        },
        {
          "textRaw": "console",
          "name": "console",
          "stability": 4,
          "stabilityText": "API Frozen",
          "type": "global",
          "desc": "<p>For printing to stdout and stderr.  Similar to the console object functions\nprovided by most web browsers, here the output is sent to stdout or stderr.\n\n</p>\n<p>The console functions are synchronous when the destination is a terminal or\na file (to avoid lost messages in case of premature exit) and asynchronous\nwhen it&#39;s a pipe (to avoid blocking for long periods of time).\n\n</p>\n<p>That is, in the following example, stdout is non-blocking while stderr\nis blocking:\n\n</p>\n<pre><code>$ node script.js 2&gt; error.log | tee info.log</code></pre>\n<p>In daily use, the blocking/non-blocking dichotomy is not something you\nshould worry about unless you log huge amounts of data.\n\n\n</p>\n",
          "methods": [
            {
              "textRaw": "console.log([data], [...])",
              "type": "method",
              "name": "log",
              "desc": "<p>Prints to stdout with newline. This function can take multiple arguments in a\n<code>printf()</code>-like way. Example:\n\n</p>\n<pre><code>console.log(&#39;count: %d&#39;, count);</code></pre>\n<p>If formatting elements are not found in the first string then <code>util.inspect</code>\nis used on each argument.  See [util.format()][] for more information.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data",
                      "optional": true
                    },
                    {
                      "name": "...",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "console.info([data], [...])",
              "type": "method",
              "name": "info",
              "desc": "<p>Same as <code>console.log</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data",
                      "optional": true
                    },
                    {
                      "name": "...",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "console.error([data], [...])",
              "type": "method",
              "name": "error",
              "desc": "<p>Same as <code>console.log</code> but prints to stderr.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data",
                      "optional": true
                    },
                    {
                      "name": "...",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "console.warn([data], [...])",
              "type": "method",
              "name": "warn",
              "desc": "<p>Same as <code>console.error</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data",
                      "optional": true
                    },
                    {
                      "name": "...",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "console.dir(obj)",
              "type": "method",
              "name": "dir",
              "desc": "<p>Uses <code>util.inspect</code> on <code>obj</code> and prints resulting string to stdout.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "obj"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "console.time(label)",
              "type": "method",
              "name": "time",
              "desc": "<p>Mark a time.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "label"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "console.timeEnd(label)",
              "type": "method",
              "name": "timeEnd",
              "desc": "<p>Finish timer, record output. Example:\n\n</p>\n<pre><code>console.time(&#39;100-elements&#39;);\nfor (var i = 0; i &lt; 100; i++) {\n  ;\n}\nconsole.timeEnd(&#39;100-elements&#39;);</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "label"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "console.trace(message, [...])",
              "type": "method",
              "name": "trace",
              "desc": "<p>Print to stderr <code>&#39;Trace :&#39;</code>, followed by the formatted message and stack trace\nto the current position.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "message"
                    },
                    {
                      "name": "...",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "console.assert(value, [message], [...])",
              "type": "method",
              "name": "assert",
              "desc": "<p>Similar to [assert.ok()][], but the error message is formatted as\n<code>util.format(message...)</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "message",
                      "optional": true
                    },
                    {
                      "name": "...",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process",
          "name": "process",
          "type": "global",
          "desc": "<p>The <code>process</code> object is a global object and can be accessed from anywhere.\nIt is an instance of [EventEmitter][].\n\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'exit'",
              "type": "event",
              "name": "exit",
              "desc": "<p>Emitted when the process is about to exit. There is no way to prevent the\nexiting of the event loop at this point, and once all <code>exit</code> listeners have\nfinished running the process will exit. Therefore you <strong>must</strong> only perform\n<strong>synchronous</strong> operations in this handler. This is a good hook to perform\nchecks on the module&#39;s state (like for unit tests). The callback takes one\nargument, the code the process is exiting with.\n\n</p>\n<p>Example of listening for <code>exit</code>:\n\n</p>\n<pre><code>process.on(&#39;exit&#39;, function(code) {\n  // do *NOT* do this\n  setTimeout(function() {\n    console.log(&#39;This will not run&#39;);\n  }, 0);\n  console.log(&#39;About to exit with code:&#39;, code);\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'uncaughtException'",
              "type": "event",
              "name": "uncaughtException",
              "desc": "<p>Emitted when an exception bubbles all the way back to the event loop. If a\nlistener is added for this exception, the default action (which is to print\na stack trace and exit) will not occur.\n\n</p>\n<p>Example of listening for <code>uncaughtException</code>:\n\n</p>\n<pre><code>process.on(&#39;uncaughtException&#39;, function(err) {\n  console.log(&#39;Caught exception: &#39; + err);\n});\n\nsetTimeout(function() {\n  console.log(&#39;This will still run.&#39;);\n}, 500);\n\n// Intentionally cause an exception, but don&#39;t catch it.\nnonexistentFunc();\nconsole.log(&#39;This will not run.&#39;);</code></pre>\n<p>Note that <code>uncaughtException</code> is a very crude mechanism for exception\nhandling and may be removed in the future.\n\n</p>\n<p>Don&#39;t use it, use <a href=\"domain.html\">domains</a> instead. If you do use it, restart\nyour application after every unhandled exception!\n\n</p>\n<p>Do <em>not</em> use it as the node.js equivalent of <code>On Error Resume Next</code>. An\nunhandled exception means your application - and by extension node.js itself -\nis in an undefined state. Blindly resuming means <em>anything</em> could happen.\n\n</p>\n<p>Think of resuming as pulling the power cord when you are upgrading your system.\nNine out of ten times nothing happens - but the 10th time, your system is bust.\n\n</p>\n<p>You have been warned.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Signal Events",
              "name": "SIGINT, SIGHUP, etc.",
              "type": "event",
              "desc": "<p>Emitted when the processes receives a signal. See sigaction(2) for a list of\nstandard POSIX signal names such as SIGINT, SIGHUP, etc.\n\n</p>\n<p>Example of listening for <code>SIGINT</code>:\n\n</p>\n<pre><code>// Start reading from stdin so we don&#39;t exit.\nprocess.stdin.resume();\n\nprocess.on(&#39;SIGINT&#39;, function() {\n  console.log(&#39;Got SIGINT.  Press Control-D to exit.&#39;);\n});</code></pre>\n<p>An easy way to send the <code>SIGINT</code> signal is with <code>Control-C</code> in most terminal\nprograms.\n\n</p>\n<p>Note:\n\n</p>\n<ul>\n<li><code>SIGUSR1</code> is reserved by node.js to start the debugger.  It&#39;s possible to\ninstall a listener but that won&#39;t stop the debugger from starting.</li>\n<li><code>SIGTERM</code> and <code>SIGINT</code> have default handlers on non-Windows platforms that resets\nthe terminal mode before exiting with code <code>128 + signal number</code>. If one of\nthese signals has a listener installed, its default behaviour will be removed\n(node will no longer exit).</li>\n<li><code>SIGPIPE</code> is ignored by default, it can have a listener installed.</li>\n<li><code>SIGHUP</code> is generated on Windows when the console window is closed, and on other\nplatforms under various similar conditions, see signal(7). It can have a\nlistener installed, however node will be unconditionally terminated by Windows\nabout 10 seconds later. On non-Windows platforms, the default behaviour of\n<code>SIGHUP</code> is to terminate node, but once a listener has been installed its\ndefault behaviour will be removed.</li>\n<li><code>SIGTERM</code> is not supported on Windows, it can be listened on.</li>\n<li><code>SIGINT</code> from the terminal is supported on all platforms, and can usually be\ngenerated with <code>CTRL+C</code> (though this may be configurable). It is not generated\nwhen terminal raw mode is enabled.</li>\n<li><code>SIGBREAK</code> is delivered on Windows when <code>CTRL+BREAK</code> is pressed, on non-Windows\nplatforms it can be listened on, but there is no way to send or generate it.</li>\n<li><code>SIGWINCH</code> is delivered when the console has been resized. On Windows, this will\nonly happen on write to the console when the cursor is being moved, or when a\nreadable tty is used in raw mode.</li>\n<li><code>SIGKILL</code> cannot have a listener installed, it will unconditionally terminate\nnode on all platforms.</li>\n<li><code>SIGSTOP</code> cannot have a listener installed.</li>\n</ul>\n<p>Note that Windows does not support sending Signals, but node offers some\nemulation with <code>process.kill()</code>, and <code>child_process.kill()</code>:\n- Sending signal <code>0</code> can be used to search for the existence of a process\n- Sending <code>SIGINT</code>, <code>SIGTERM</code>, and <code>SIGKILL</code> cause the unconditional exit of the\n  target process.\n\n</p>\n",
              "params": []
            }
          ],
          "properties": [
            {
              "textRaw": "process.stdout",
              "name": "stdout",
              "desc": "<p>A <code>Writable Stream</code> to <code>stdout</code>.\n\n</p>\n<p>Example: the definition of <code>console.log</code>\n\n</p>\n<pre><code>console.log = function(d) {\n  process.stdout.write(d + &#39;\\n&#39;);\n};</code></pre>\n<p><code>process.stderr</code> and <code>process.stdout</code> are unlike other streams in Node in\nthat writes to them are usually blocking.\n\n</p>\n<ul>\n<li>They are blocking in the case that they refer to regular files or TTY file\ndescriptors.</li>\n<li>In the case they refer to pipes:<ul>\n<li>They are blocking in Linux/Unix.</li>\n<li>They are non-blocking like other streams in Windows.</li>\n</ul>\n</li>\n</ul>\n<p>To check if Node is being run in a TTY context, read the <code>isTTY</code> property\non <code>process.stderr</code>, <code>process.stdout</code>, or <code>process.stdin</code>:\n\n</p>\n<pre><code>$ node -p &quot;Boolean(process.stdin.isTTY)&quot;\ntrue\n$ echo &quot;foo&quot; | node -p &quot;Boolean(process.stdin.isTTY)&quot;\nfalse\n\n$ node -p &quot;Boolean(process.stdout.isTTY)&quot;\ntrue\n$ node -p &quot;Boolean(process.stdout.isTTY)&quot; | cat\nfalse</code></pre>\n<p>See <a href=\"tty.html#tty_tty\">the tty docs</a> for more information.\n\n</p>\n"
            },
            {
              "textRaw": "process.stderr",
              "name": "stderr",
              "desc": "<p>A writable stream to stderr.\n\n</p>\n<p><code>process.stderr</code> and <code>process.stdout</code> are unlike other streams in Node in\nthat writes to them are usually blocking.\n\n</p>\n<ul>\n<li>They are blocking in the case that they refer to regular files or TTY file\ndescriptors.</li>\n<li>In the case they refer to pipes:<ul>\n<li>They are blocking in Linux/Unix.</li>\n<li>They are non-blocking like other streams in Windows.</li>\n</ul>\n</li>\n</ul>\n"
            },
            {
              "textRaw": "process.stdin",
              "name": "stdin",
              "desc": "<p>A <code>Readable Stream</code> for stdin. \n\n</p>\n<p>Example of opening standard input and listening for both events:\n\n</p>\n<pre><code>process.stdin.setEncoding(&#39;utf8&#39;);\n\nprocess.stdin.on(&#39;readable&#39;, function() {\n  var chunk = process.stdin.read();\n  if (chunk !== null) {\n    process.stdout.write(&#39;data: &#39; + chunk);\n  }\n});\n\nprocess.stdin.on(&#39;end&#39;, function() {\n  process.stdout.write(&#39;end&#39;);\n});</code></pre>\n<p>As a Stream, <code>process.stdin</code> can also be used in &quot;old&quot; mode that is compatible\nwith scripts written for node prior v0.10.\nFor more information see\n<a href=\"stream.html#stream_compatibility_with_older_node_versions\">Stream compatibility</a>.\n\n</p>\n<p>In &quot;old&quot; Streams mode the stdin stream is paused by default, so one\nmust call <code>process.stdin.resume()</code> to read from it. Note also that calling\n<code>process.stdin.resume()</code> itself would switch stream to &quot;old&quot; mode.\n\n</p>\n<p>If you are starting a new project you should prefer a more recent &quot;new&quot; Streams\nmode over &quot;old&quot; one.\n\n</p>\n"
            },
            {
              "textRaw": "process.argv",
              "name": "argv",
              "desc": "<p>An array containing the command line arguments.  The first element will be\n&#39;node&#39;, the second element will be the name of the JavaScript file.  The\nnext elements will be any additional command line arguments.\n\n</p>\n<pre><code>// print process.argv\nprocess.argv.forEach(function(val, index, array) {\n  console.log(index + &#39;: &#39; + val);\n});</code></pre>\n<p>This will generate:\n\n</p>\n<pre><code>$ node process-2.js one two=three four\n0: node\n1: /Users/mjr/work/node/process-2.js\n2: one\n3: two=three\n4: four</code></pre>\n"
            },
            {
              "textRaw": "process.execPath",
              "name": "execPath",
              "desc": "<p>This is the absolute pathname of the executable that started the process.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>/usr/local/bin/node</code></pre>\n"
            },
            {
              "textRaw": "process.execArgv",
              "name": "execArgv",
              "desc": "<p>This is the set of node-specific command line options from the\nexecutable that started the process.  These options do not show up in\n<code>process.argv</code>, and do not include the node executable, the name of\nthe script, or any options following the script name. These options\nare useful in order to spawn child processes with the same execution\nenvironment as the parent.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>$ node --harmony script.js --version</code></pre>\n<p>results in process.execArgv:\n\n</p>\n<pre><code>[&#39;--harmony&#39;]</code></pre>\n<p>and process.argv:\n\n</p>\n<pre><code>[&#39;/usr/local/bin/node&#39;, &#39;script.js&#39;, &#39;--version&#39;]</code></pre>\n"
            },
            {
              "textRaw": "process.env",
              "name": "env",
              "desc": "<p>An object containing the user environment. See environ(7).\n\n</p>\n<p>An example of this object looks like:\n\n</p>\n<pre><code>{ TERM: &#39;xterm-256color&#39;,\n  SHELL: &#39;/usr/local/bin/bash&#39;,\n  USER: &#39;maciej&#39;,\n  PATH: &#39;~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin&#39;,\n  PWD: &#39;/Users/maciej&#39;,\n  EDITOR: &#39;vim&#39;,\n  SHLVL: &#39;1&#39;,\n  HOME: &#39;/Users/maciej&#39;,\n  LOGNAME: &#39;maciej&#39;,\n  _: &#39;/usr/local/bin/node&#39; }</code></pre>\n<p>You can write to this object, but changes won&#39;t be reflected outside of your\nprocess. That means that the following won&#39;t work:\n\n</p>\n<pre><code>node -e &#39;process.env.foo = &quot;bar&quot;&#39; &amp;&amp; echo $foo</code></pre>\n<p>But this will:\n\n</p>\n<pre><code>process.env.foo = &#39;bar&#39;;\nconsole.log(process.env.foo);</code></pre>\n"
            },
            {
              "textRaw": "process.version",
              "name": "version",
              "desc": "<p>A compiled-in property that exposes <code>NODE_VERSION</code>.\n\n</p>\n<pre><code>console.log(&#39;Version: &#39; + process.version);</code></pre>\n"
            },
            {
              "textRaw": "process.versions",
              "name": "versions",
              "desc": "<p>A property exposing version strings of node and its dependencies.\n\n</p>\n<pre><code>console.log(process.versions);</code></pre>\n<p>Will print something like:\n\n</p>\n<pre><code>{ http_parser: &#39;1.0&#39;,\n  node: &#39;0.10.4&#39;,\n  v8: &#39;3.14.5.8&#39;,\n  ares: &#39;1.9.0-DEV&#39;,\n  uv: &#39;0.10.3&#39;,\n  zlib: &#39;1.2.3&#39;,\n  modules: &#39;11&#39;,\n  openssl: &#39;1.0.1e&#39; }</code></pre>\n"
            },
            {
              "textRaw": "process.config",
              "name": "config",
              "desc": "<p>An Object containing the JavaScript representation of the configure options\nthat were used to compile the current node executable. This is the same as\nthe &quot;config.gypi&quot; file that was produced when running the <code>./configure</code> script.\n\n</p>\n<p>An example of the possible output looks like:\n\n</p>\n<pre><code>{ target_defaults:\n   { cflags: [],\n     default_configuration: &#39;Release&#39;,\n     defines: [],\n     include_dirs: [],\n     libraries: [] },\n  variables:\n   { host_arch: &#39;x64&#39;,\n     node_install_npm: &#39;true&#39;,\n     node_prefix: &#39;&#39;,\n     node_shared_cares: &#39;false&#39;,\n     node_shared_http_parser: &#39;false&#39;,\n     node_shared_libuv: &#39;false&#39;,\n     node_shared_v8: &#39;false&#39;,\n     node_shared_zlib: &#39;false&#39;,\n     node_use_dtrace: &#39;false&#39;,\n     node_use_openssl: &#39;true&#39;,\n     node_shared_openssl: &#39;false&#39;,\n     strict_aliasing: &#39;true&#39;,\n     target_arch: &#39;x64&#39;,\n     v8_use_snapshot: &#39;true&#39; } }</code></pre>\n"
            },
            {
              "textRaw": "process.pid",
              "name": "pid",
              "desc": "<p>The PID of the process.\n\n</p>\n<pre><code>console.log(&#39;This process is pid &#39; + process.pid);</code></pre>\n"
            },
            {
              "textRaw": "process.title",
              "name": "title",
              "desc": "<p>Getter/setter to set what is displayed in &#39;ps&#39;.\n\n</p>\n<p>When used as a setter, the maximum length is platform-specific and probably\nshort.\n\n</p>\n<p>On Linux and OS X, it&#39;s limited to the size of the binary name plus the\nlength of the command line arguments because it overwrites the argv memory.\n\n</p>\n<p>v0.8 allowed for longer process title strings by also overwriting the environ\nmemory but that was potentially insecure/confusing in some (rather obscure)\ncases.\n\n\n</p>\n"
            },
            {
              "textRaw": "process.arch",
              "name": "arch",
              "desc": "<p>What processor architecture you&#39;re running on: <code>&#39;arm&#39;</code>, <code>&#39;ia32&#39;</code>, or <code>&#39;x64&#39;</code>.\n\n</p>\n<pre><code>console.log(&#39;This processor architecture is &#39; + process.arch);</code></pre>\n"
            },
            {
              "textRaw": "process.platform",
              "name": "platform",
              "desc": "<p>What platform you&#39;re running on:\n<code>&#39;darwin&#39;</code>, <code>&#39;freebsd&#39;</code>, <code>&#39;linux&#39;</code>, <code>&#39;sunos&#39;</code> or <code>&#39;win32&#39;</code>\n\n</p>\n<pre><code>console.log(&#39;This platform is &#39; + process.platform);</code></pre>\n"
            },
            {
              "textRaw": "`maxTickDepth` {Number} Default = 1000 ",
              "name": "maxTickDepth",
              "desc": "<p>Callbacks passed to <code>process.nextTick</code> will <em>usually</em> be called at the\nend of the current flow of execution, and are thus approximately as fast\nas calling a function synchronously.  Left unchecked, this would starve\nthe event loop, preventing any I/O from occurring.\n\n</p>\n<p>Consider this code:\n\n</p>\n<pre><code>process.nextTick(function foo() {\n  process.nextTick(foo);\n});</code></pre>\n<p>In order to avoid the situation where Node is blocked by an infinite\nloop of recursive series of nextTick calls, it defers to allow some I/O\nto be done every so often.\n\n</p>\n<p>The <code>process.maxTickDepth</code> value is the maximum depth of\nnextTick-calling nextTick-callbacks that will be evaluated before\nallowing other forms of I/O to occur.\n\n</p>\n",
              "shortDesc": "Default = 1000"
            }
          ],
          "methods": [
            {
              "textRaw": "process.abort()",
              "type": "method",
              "name": "abort",
              "desc": "<p>This causes node to emit an abort. This will cause node to exit and\ngenerate a core file.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "process.chdir(directory)",
              "type": "method",
              "name": "chdir",
              "desc": "<p>Changes the current working directory of the process or throws an exception if that fails.\n\n</p>\n<pre><code>console.log(&#39;Starting directory: &#39; + process.cwd());\ntry {\n  process.chdir(&#39;/tmp&#39;);\n  console.log(&#39;New directory: &#39; + process.cwd());\n}\ncatch (err) {\n  console.log(&#39;chdir: &#39; + err);\n}</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "directory"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.cwd()",
              "type": "method",
              "name": "cwd",
              "desc": "<p>Returns the current working directory of the process.\n\n</p>\n<pre><code>console.log(&#39;Current directory: &#39; + process.cwd());</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "process.exit([code])",
              "type": "method",
              "name": "exit",
              "desc": "<p>Ends the process with the specified <code>code</code>.  If omitted, exit uses the\n&#39;success&#39; code <code>0</code>.\n\n</p>\n<p>To exit with a &#39;failure&#39; code:\n\n</p>\n<pre><code>process.exit(1);</code></pre>\n<p>The shell that executed node should see the exit code as 1.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "code",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.getgid()",
              "type": "method",
              "name": "getgid",
              "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Gets the group identity of the process. (See getgid(2).)\nThis is the numerical group id, not the group name.\n\n</p>\n<pre><code>if (process.getgid) {\n  console.log(&#39;Current gid: &#39; + process.getgid());\n}</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "process.setgid(id)",
              "type": "method",
              "name": "setgid",
              "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Sets the group identity of the process. (See setgid(2).)  This accepts either\na numerical ID or a groupname string. If a groupname is specified, this method\nblocks while resolving it to a numerical ID.\n\n</p>\n<pre><code>if (process.getgid &amp;&amp; process.setgid) {\n  console.log(&#39;Current gid: &#39; + process.getgid());\n  try {\n    process.setgid(501);\n    console.log(&#39;New gid: &#39; + process.getgid());\n  }\n  catch (err) {\n    console.log(&#39;Failed to set gid: &#39; + err);\n  }\n}</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "id"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.getuid()",
              "type": "method",
              "name": "getuid",
              "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Gets the user identity of the process. (See getuid(2).)\nThis is the numerical userid, not the username.\n\n</p>\n<pre><code>if (process.getuid) {\n  console.log(&#39;Current uid: &#39; + process.getuid());\n}</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "process.setuid(id)",
              "type": "method",
              "name": "setuid",
              "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Sets the user identity of the process. (See setuid(2).)  This accepts either\na numerical ID or a username string.  If a username is specified, this method\nblocks while resolving it to a numerical ID.\n\n</p>\n<pre><code>if (process.getuid &amp;&amp; process.setuid) {\n  console.log(&#39;Current uid: &#39; + process.getuid());\n  try {\n    process.setuid(501);\n    console.log(&#39;New uid: &#39; + process.getuid());\n  }\n  catch (err) {\n    console.log(&#39;Failed to set uid: &#39; + err);\n  }\n}</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "id"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.getgroups()",
              "type": "method",
              "name": "getgroups",
              "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Returns an array with the supplementary group IDs. POSIX leaves it unspecified\nif the effective group ID is included but node.js ensures it always is.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "process.setgroups(groups)",
              "type": "method",
              "name": "setgroups",
              "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Sets the supplementary group IDs. This is a privileged operation, meaning you\nneed to be root or have the CAP_SETGID capability.\n\n</p>\n<p>The list can contain group IDs, group names or both.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "groups"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.initgroups(user, extra_group)",
              "type": "method",
              "name": "initgroups",
              "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Reads /etc/group and initializes the group access list, using all groups of\nwhich the user is a member. This is a privileged operation, meaning you need\nto be root or have the CAP_SETGID capability.\n\n</p>\n<p><code>user</code> is a user name or user ID. <code>extra_group</code> is a group name or group ID.\n\n</p>\n<p>Some care needs to be taken when dropping privileges. Example:\n\n</p>\n<pre><code>console.log(process.getgroups());         // [ 0 ]\nprocess.initgroups(&#39;bnoordhuis&#39;, 1000);   // switch user\nconsole.log(process.getgroups());         // [ 27, 30, 46, 1000, 0 ]\nprocess.setgid(1000);                     // drop root gid\nconsole.log(process.getgroups());         // [ 27, 30, 46, 1000 ]</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "user"
                    },
                    {
                      "name": "extra_group"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.kill(pid, [signal])",
              "type": "method",
              "name": "kill",
              "desc": "<p>Send a signal to a process. <code>pid</code> is the process id and <code>signal</code> is the\nstring describing the signal to send.  Signal names are strings like\n&#39;SIGINT&#39; or &#39;SIGHUP&#39;.  If omitted, the signal will be &#39;SIGTERM&#39;.\nSee <a href=\"#process_signal_events\">Signal Events</a> and kill(2) for more information.\n\n</p>\n<p>Will throw an error if target does not exist, and as a special case, a signal of\n<code>0</code> can be used to test for the existence of a process.\n\n</p>\n<p>Note that just because the name of this function is <code>process.kill</code>, it is\nreally just a signal sender, like the <code>kill</code> system call.  The signal sent\nmay do something other than kill the target process.\n\n</p>\n<p>Example of sending a signal to yourself:\n\n</p>\n<pre><code>process.on(&#39;SIGHUP&#39;, function() {\n  console.log(&#39;Got SIGHUP signal.&#39;);\n});\n\nsetTimeout(function() {\n  console.log(&#39;Exiting.&#39;);\n  process.exit(0);\n}, 100);\n\nprocess.kill(process.pid, &#39;SIGHUP&#39;);</code></pre>\n<p>Note: When SIGUSR1 is received by Node.js it starts the debugger, see\n<a href=\"#process_signal_events\">Signal Events</a>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "pid"
                    },
                    {
                      "name": "signal",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.memoryUsage()",
              "type": "method",
              "name": "memoryUsage",
              "desc": "<p>Returns an object describing the memory usage of the Node process\nmeasured in bytes.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;);\n\nconsole.log(util.inspect(process.memoryUsage()));</code></pre>\n<p>This will generate:\n\n</p>\n<pre><code>{ rss: 4935680,\n  heapTotal: 1826816,\n  heapUsed: 650472 }</code></pre>\n<p><code>heapTotal</code> and <code>heapUsed</code> refer to V8&#39;s memory usage.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "process.nextTick(callback)",
              "type": "method",
              "name": "nextTick",
              "desc": "<p>On the next loop around the event loop call this callback.\nThis is <em>not</em> a simple alias to <code>setTimeout(fn, 0)</code>, it&#39;s much more\nefficient.  It typically runs before any other I/O events fire, but there\nare some exceptions.  See <code>process.maxTickDepth</code> below.\n\n</p>\n<pre><code>process.nextTick(function() {\n  console.log(&#39;nextTick callback&#39;);\n});</code></pre>\n<p>This is important in developing APIs where you want to give the user the\nchance to assign event handlers after an object has been constructed,\nbut before any I/O has occurred.\n\n</p>\n<pre><code>function MyThing(options) {\n  this.setupOptions(options);\n\n  process.nextTick(function() {\n    this.startDoingStuff();\n  }.bind(this));\n}\n\nvar thing = new MyThing();\nthing.getReadyForStuff();\n\n// thing.startDoingStuff() gets called now, not before.</code></pre>\n<p>It is very important for APIs to be either 100% synchronous or 100%\nasynchronous.  Consider this example:\n\n</p>\n<pre><code>// WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!\nfunction maybeSync(arg, cb) {\n  if (arg) {\n    cb();\n    return;\n  }\n\n  fs.stat(&#39;file&#39;, cb);\n}</code></pre>\n<p>This API is hazardous.  If you do this:\n\n</p>\n<pre><code>maybeSync(true, function() {\n  foo();\n});\nbar();</code></pre>\n<p>then it&#39;s not clear whether <code>foo()</code> or <code>bar()</code> will be called first.\n\n</p>\n<p>This approach is much better:\n\n</p>\n<pre><code>function definitelyAsync(arg, cb) {\n  if (arg) {\n    process.nextTick(cb);\n    return;\n  }\n\n  fs.stat(&#39;file&#39;, cb);\n}</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "callback"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.umask([mask])",
              "type": "method",
              "name": "umask",
              "desc": "<p>Sets or reads the process&#39;s file mode creation mask. Child processes inherit\nthe mask from the parent process. Returns the old mask if <code>mask</code> argument is\ngiven, otherwise returns the current mask.\n\n</p>\n<pre><code>var oldmask, newmask = 0644;\n\noldmask = process.umask(newmask);\nconsole.log(&#39;Changed umask from: &#39; + oldmask.toString(8) +\n            &#39; to &#39; + newmask.toString(8));</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "mask",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "process.uptime()",
              "type": "method",
              "name": "uptime",
              "desc": "<p>Number of seconds Node has been running.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "process.hrtime()",
              "type": "method",
              "name": "hrtime",
              "desc": "<p>Returns the current high-resolution real time in a <code>[seconds, nanoseconds]</code>\ntuple Array. It is relative to an arbitrary time in the past. It is not\nrelated to the time of day and therefore not subject to clock drift. The\nprimary use is for measuring performance between intervals.\n\n</p>\n<p>You may pass in the result of a previous call to <code>process.hrtime()</code> to get\na diff reading, useful for benchmarks and measuring intervals:\n\n</p>\n<pre><code>var time = process.hrtime();\n// [ 1800216, 25 ]\n\nsetTimeout(function() {\n  var diff = process.hrtime(time);\n  // [ 1, 552 ]\n\n  console.log(&#39;benchmark took %d nanoseconds&#39;, diff[0] * 1e9 + diff[1]);\n  // benchmark took 1000000527 nanoseconds\n}, 1000);</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ]
        }
      ],
      "vars": [
        {
          "textRaw": "require()",
          "type": "var",
          "name": "require",
          "desc": "<p>To require modules. See the [Modules][] section.  <code>require</code> isn&#39;t actually a\nglobal but rather local to each module.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "require.resolve()",
              "type": "method",
              "name": "resolve",
              "desc": "<p>Use the internal <code>require()</code> machinery to look up the location of a module,\nbut rather than loading the module, just return the resolved filename.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ],
          "properties": [
            {
              "textRaw": "`cache` {Object} ",
              "name": "cache",
              "desc": "<p>Modules are cached in this object when they are required. By deleting a key\nvalue from this object, the next <code>require</code> will reload the module.\n\n</p>\n"
            },
            {
              "textRaw": "`extensions` {Object} ",
              "name": "extensions",
              "stability": 0,
              "stabilityText": "Deprecated",
              "desc": "<p>Instruct <code>require</code> on how to handle certain file extensions.\n\n</p>\n<p>Process files with the extension <code>.sjs</code> as <code>.js</code>:\n\n</p>\n<pre><code>require.extensions[&#39;.sjs&#39;] = require.extensions[&#39;.js&#39;];</code></pre>\n<p><strong>Deprecated</strong>  In the past, this list has been used to load\nnon-JavaScript modules into Node by compiling them on-demand.\nHowever, in practice, there are much better ways to do this, such as\nloading modules via some other Node program, or compiling them to\nJavaScript ahead of time.\n\n</p>\n<p>Since the Module system is locked, this feature will probably never go\naway.  However, it may have subtle bugs and complexities that are best\nleft untouched.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "__filename",
          "name": "__filename",
          "type": "var",
          "desc": "<p>The filename of the code being executed.  This is the resolved absolute path\nof this code file.  For a main program this is not necessarily the same\nfilename used in the command line.  The value inside a module is the path\nto that module file.\n\n</p>\n<p>Example: running <code>node example.js</code> from <code>/Users/mjr</code>\n\n</p>\n<pre><code>console.log(__filename);\n// /Users/mjr/example.js</code></pre>\n<p><code>__filename</code> isn&#39;t actually a global but rather local to each module.\n\n</p>\n"
        },
        {
          "textRaw": "__dirname",
          "name": "__dirname",
          "type": "var",
          "desc": "<p>The name of the directory that the currently executing script resides in.\n\n</p>\n<p>Example: running <code>node example.js</code> from <code>/Users/mjr</code>\n\n</p>\n<pre><code>console.log(__dirname);\n// /Users/mjr</code></pre>\n<p><code>__dirname</code> isn&#39;t actually a global but rather local to each module.\n\n\n</p>\n"
        },
        {
          "textRaw": "module",
          "name": "module",
          "type": "var",
          "desc": "<p>A reference to the current module. In particular\n<code>module.exports</code> is used for defining what a module exports and makes\navailable through <code>require()</code>.\n\n</p>\n<p><code>module</code> isn&#39;t actually a global but rather local to each module.\n\n</p>\n<p>See the [module system documentation][] for more information.\n\n</p>\n"
        },
        {
          "textRaw": "exports",
          "name": "exports",
          "type": "var",
          "desc": "<p>A reference to the <code>module.exports</code> that is shorter to type.\nSee [module system documentation][] for details on when to use <code>exports</code> and\nwhen to use <code>module.exports</code>.\n\n</p>\n<p><code>exports</code> isn&#39;t actually a global but rather local to each module.\n\n</p>\n<p>See the [module system documentation][] for more information.\n\n</p>\n<p>See the [module section][] for more information.\n\n</p>\n"
        }
      ],
      "methods": [
        {
          "textRaw": "setTimeout(cb, ms)",
          "type": "method",
          "name": "setTimeout",
          "desc": "<p>Run callback <code>cb</code> after <em>at least</em> <code>ms</code> milliseconds. The actual delay depends\non external factors like OS timer granularity and system load.\n\n</p>\n<p>The timeout must be in the range of 1-2,147,483,647 inclusive. If the value is\noutside that range, it&#39;s changed to 1 millisecond. Broadly speaking, a timer\ncannot span more than 24.8 days.\n\n</p>\n<p>Returns an opaque value that represents the timer.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "cb"
                },
                {
                  "name": "ms"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "clearTimeout(t)",
          "type": "method",
          "name": "clearTimeout",
          "desc": "<p>Stop a timer that was previously created with <code>setTimeout()</code>. The callback will\nnot execute.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "t"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "setInterval(cb, ms)",
          "type": "method",
          "name": "setInterval",
          "desc": "<p>Run callback <code>cb</code> repeatedly every <code>ms</code> milliseconds. Note that the actual\ninterval may vary, depending on external factors like OS timer granularity and\nsystem load. It&#39;s never less than <code>ms</code> but it may be longer.\n\n</p>\n<p>The interval must be in the range of 1-2,147,483,647 inclusive. If the value is\noutside that range, it&#39;s changed to 1 millisecond. Broadly speaking, a timer\ncannot span more than 24.8 days.\n\n</p>\n<p>Returns an opaque value that represents the timer.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "cb"
                },
                {
                  "name": "ms"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "textRaw": "Debugger",
      "name": "Debugger",
      "stability": 3,
      "stabilityText": "Stable",
      "type": "misc",
      "desc": "<p>V8 comes with an extensive debugger which is accessible out-of-process via a\nsimple <a href=\"http://code.google.com/p/v8/wiki/DebuggerProtocol\">TCP protocol</a>.\nNode has a built-in client for this debugger. To use this, start Node with the\n<code>debug</code> argument; a prompt will appear:\n\n</p>\n<pre><code>% node debug myscript.js\n&lt; debugger listening on port 5858\nconnecting... ok\nbreak in /home/indutny/Code/git/indutny/myscript.js:1\n  1 x = 5;\n  2 setTimeout(function () {\n  3   debugger;\ndebug&gt;</code></pre>\n<p>Node&#39;s debugger client doesn&#39;t support the full range of commands, but\nsimple step and inspection is possible. By putting the statement <code>debugger;</code>\ninto the source code of your script, you will enable a breakpoint.\n\n</p>\n<p>For example, suppose <code>myscript.js</code> looked like this:\n\n</p>\n<pre><code>// myscript.js\nx = 5;\nsetTimeout(function () {\n  debugger;\n  console.log(&quot;world&quot;);\n}, 1000);\nconsole.log(&quot;hello&quot;);</code></pre>\n<p>Then once the debugger is run, it will break on line 4.\n\n</p>\n<pre><code>% node debug myscript.js\n&lt; debugger listening on port 5858\nconnecting... ok\nbreak in /home/indutny/Code/git/indutny/myscript.js:1\n  1 x = 5;\n  2 setTimeout(function () {\n  3   debugger;\ndebug&gt; cont\n&lt; hello\nbreak in /home/indutny/Code/git/indutny/myscript.js:3\n  1 x = 5;\n  2 setTimeout(function () {\n  3   debugger;\n  4   console.log(&quot;world&quot;);\n  5 }, 1000);\ndebug&gt; next\nbreak in /home/indutny/Code/git/indutny/myscript.js:4\n  2 setTimeout(function () {\n  3   debugger;\n  4   console.log(&quot;world&quot;);\n  5 }, 1000);\n  6 console.log(&quot;hello&quot;);\ndebug&gt; repl\nPress Ctrl + C to leave debug repl\n&gt; x\n5\n&gt; 2+2\n4\ndebug&gt; next\n&lt; world\nbreak in /home/indutny/Code/git/indutny/myscript.js:5\n  3   debugger;\n  4   console.log(&quot;world&quot;);\n  5 }, 1000);\n  6 console.log(&quot;hello&quot;);\n  7\ndebug&gt; quit\n%</code></pre>\n<p>The <code>repl</code> command allows you to evaluate code remotely. The <code>next</code> command\nsteps over to the next line. There are a few other commands available and more\nto come. Type <code>help</code> to see others.\n\n</p>\n",
      "miscs": [
        {
          "textRaw": "Watchers",
          "name": "watchers",
          "desc": "<p>You can watch expression and variable values while debugging your code.\nOn every breakpoint each expression from the watchers list will be evaluated\nin the current context and displayed just before the breakpoint&#39;s source code\nlisting.\n\n</p>\n<p>To start watching an expression, type <code>watch(&quot;my_expression&quot;)</code>. <code>watchers</code>\nprints the active watchers. To remove a watcher, type\n<code>unwatch(&quot;my_expression&quot;)</code>.\n\n</p>\n",
          "type": "misc",
          "displayName": "Watchers"
        },
        {
          "textRaw": "Commands reference",
          "name": "commands_reference",
          "modules": [
            {
              "textRaw": "Stepping",
              "name": "Stepping",
              "desc": "<p>It is also possible to set a breakpoint in a file (module) that\nisn&#39;t loaded yet:\n\n</p>\n<pre><code>% ./node debug test/fixtures/break-in-module/main.js\n&lt; debugger listening on port 5858\nconnecting to port 5858... ok\nbreak in test/fixtures/break-in-module/main.js:1\n  1 var mod = require(&#39;./mod.js&#39;);\n  2 mod.hello();\n  3 mod.hello();\ndebug&gt; setBreakpoint(&#39;mod.js&#39;, 23)\nWarning: script &#39;mod.js&#39; was not loaded yet.\n  1 var mod = require(&#39;./mod.js&#39;);\n  2 mod.hello();\n  3 mod.hello();\ndebug&gt; c\nbreak in test/fixtures/break-in-module/mod.js:23\n 21\n 22 exports.hello = function() {\n 23   return &#39;hello from module&#39;;\n 24 };\n 25\ndebug&gt;</code></pre>\n",
              "type": "module",
              "displayName": "Breakpoints"
            },
            {
              "textRaw": "Breakpoints",
              "name": "breakpoints",
              "desc": "<p>It is also possible to set a breakpoint in a file (module) that\nisn&#39;t loaded yet:\n\n</p>\n<pre><code>% ./node debug test/fixtures/break-in-module/main.js\n&lt; debugger listening on port 5858\nconnecting to port 5858... ok\nbreak in test/fixtures/break-in-module/main.js:1\n  1 var mod = require(&#39;./mod.js&#39;);\n  2 mod.hello();\n  3 mod.hello();\ndebug&gt; setBreakpoint(&#39;mod.js&#39;, 23)\nWarning: script &#39;mod.js&#39; was not loaded yet.\n  1 var mod = require(&#39;./mod.js&#39;);\n  2 mod.hello();\n  3 mod.hello();\ndebug&gt; c\nbreak in test/fixtures/break-in-module/mod.js:23\n 21\n 22 exports.hello = function() {\n 23   return &#39;hello from module&#39;;\n 24 };\n 25\ndebug&gt;</code></pre>\n",
              "type": "module",
              "displayName": "Breakpoints"
            },
            {
              "textRaw": "Execution control",
              "name": "Execution control",
              "type": "module",
              "displayName": "Various"
            },
            {
              "textRaw": "Various",
              "name": "various",
              "type": "module",
              "displayName": "Various"
            }
          ],
          "type": "misc",
          "displayName": "Commands reference"
        },
        {
          "textRaw": "Advanced Usage",
          "name": "advanced_usage",
          "desc": "<p>The V8 debugger can be enabled and accessed either by starting Node with\nthe <code>--debug</code> command-line flag or by signaling an existing Node process\nwith <code>SIGUSR1</code>.\n\n</p>\n<p>Once a process has been set in debug mode with this it can be connected to\nwith the node debugger. Either connect to the <code>pid</code> or the URI to the debugger.\nThe syntax is:\n\n</p>\n<ul>\n<li><code>node debug -p &lt;pid&gt;</code> - Connects to the process via the <code>pid</code></li>\n<li><code>node debug &lt;URI&gt;</code> - Connects to the process via the URI such as localhost:5858</li>\n</ul>\n",
          "type": "misc",
          "displayName": "Advanced Usage"
        }
      ]
    }
  ],
  "globals": [
    {
      "textRaw": "global",
      "name": "global",
      "type": "global",
      "desc": "<p>In browsers, the top-level scope is the global scope. That means that in\nbrowsers if you&#39;re in the global scope <code>var something</code> will define a global\nvariable. In Node this is different. The top-level scope is not the global\nscope; <code>var something</code> inside a Node module will be local to that module.\n\n</p>\n"
    },
    {
      "textRaw": "process",
      "name": "process",
      "type": "global",
      "desc": "<p>The process object. See the [process object][] section.\n\n</p>\n"
    },
    {
      "textRaw": "console",
      "name": "console",
      "type": "global",
      "desc": "<p>Used to print to stdout and stderr. See the [console][] section.\n\n</p>\n"
    },
    {
      "textRaw": "Class: Buffer",
      "type": "global",
      "name": "Buffer",
      "desc": "<p>Used to handle binary data. See the [buffer section][]\n\n</p>\n"
    },
    {
      "textRaw": "clearInterval(t)",
      "type": "global",
      "name": "clearInterval",
      "desc": "<p>Stop a timer that was previously created with <code>setInterval()</code>. The callback\nwill not execute.\n\n</p>\n<p>The timer functions are global variables. See the [timers][] section.\n\n</p>\n"
    },
    {
      "textRaw": "console",
      "name": "console",
      "stability": 4,
      "stabilityText": "API Frozen",
      "type": "global",
      "desc": "<p>For printing to stdout and stderr.  Similar to the console object functions\nprovided by most web browsers, here the output is sent to stdout or stderr.\n\n</p>\n<p>The console functions are synchronous when the destination is a terminal or\na file (to avoid lost messages in case of premature exit) and asynchronous\nwhen it&#39;s a pipe (to avoid blocking for long periods of time).\n\n</p>\n<p>That is, in the following example, stdout is non-blocking while stderr\nis blocking:\n\n</p>\n<pre><code>$ node script.js 2&gt; error.log | tee info.log</code></pre>\n<p>In daily use, the blocking/non-blocking dichotomy is not something you\nshould worry about unless you log huge amounts of data.\n\n\n</p>\n",
      "methods": [
        {
          "textRaw": "console.log([data], [...])",
          "type": "method",
          "name": "log",
          "desc": "<p>Prints to stdout with newline. This function can take multiple arguments in a\n<code>printf()</code>-like way. Example:\n\n</p>\n<pre><code>console.log(&#39;count: %d&#39;, count);</code></pre>\n<p>If formatting elements are not found in the first string then <code>util.inspect</code>\nis used on each argument.  See [util.format()][] for more information.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "data",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "console.info([data], [...])",
          "type": "method",
          "name": "info",
          "desc": "<p>Same as <code>console.log</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "data",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "console.error([data], [...])",
          "type": "method",
          "name": "error",
          "desc": "<p>Same as <code>console.log</code> but prints to stderr.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "data",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "console.warn([data], [...])",
          "type": "method",
          "name": "warn",
          "desc": "<p>Same as <code>console.error</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "data",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "console.dir(obj)",
          "type": "method",
          "name": "dir",
          "desc": "<p>Uses <code>util.inspect</code> on <code>obj</code> and prints resulting string to stdout.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "obj"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "console.time(label)",
          "type": "method",
          "name": "time",
          "desc": "<p>Mark a time.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "label"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "console.timeEnd(label)",
          "type": "method",
          "name": "timeEnd",
          "desc": "<p>Finish timer, record output. Example:\n\n</p>\n<pre><code>console.time(&#39;100-elements&#39;);\nfor (var i = 0; i &lt; 100; i++) {\n  ;\n}\nconsole.timeEnd(&#39;100-elements&#39;);</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "label"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "console.trace(message, [...])",
          "type": "method",
          "name": "trace",
          "desc": "<p>Print to stderr <code>&#39;Trace :&#39;</code>, followed by the formatted message and stack trace\nto the current position.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "message"
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "console.assert(value, [message], [...])",
          "type": "method",
          "name": "assert",
          "desc": "<p>Similar to [assert.ok()][], but the error message is formatted as\n<code>util.format(message...)</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "value"
                },
                {
                  "name": "message",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "textRaw": "process",
      "name": "process",
      "type": "global",
      "desc": "<p>The <code>process</code> object is a global object and can be accessed from anywhere.\nIt is an instance of [EventEmitter][].\n\n\n</p>\n",
      "events": [
        {
          "textRaw": "Event: 'exit'",
          "type": "event",
          "name": "exit",
          "desc": "<p>Emitted when the process is about to exit. There is no way to prevent the\nexiting of the event loop at this point, and once all <code>exit</code> listeners have\nfinished running the process will exit. Therefore you <strong>must</strong> only perform\n<strong>synchronous</strong> operations in this handler. This is a good hook to perform\nchecks on the module&#39;s state (like for unit tests). The callback takes one\nargument, the code the process is exiting with.\n\n</p>\n<p>Example of listening for <code>exit</code>:\n\n</p>\n<pre><code>process.on(&#39;exit&#39;, function(code) {\n  // do *NOT* do this\n  setTimeout(function() {\n    console.log(&#39;This will not run&#39;);\n  }, 0);\n  console.log(&#39;About to exit with code:&#39;, code);\n});</code></pre>\n",
          "params": []
        },
        {
          "textRaw": "Event: 'uncaughtException'",
          "type": "event",
          "name": "uncaughtException",
          "desc": "<p>Emitted when an exception bubbles all the way back to the event loop. If a\nlistener is added for this exception, the default action (which is to print\na stack trace and exit) will not occur.\n\n</p>\n<p>Example of listening for <code>uncaughtException</code>:\n\n</p>\n<pre><code>process.on(&#39;uncaughtException&#39;, function(err) {\n  console.log(&#39;Caught exception: &#39; + err);\n});\n\nsetTimeout(function() {\n  console.log(&#39;This will still run.&#39;);\n}, 500);\n\n// Intentionally cause an exception, but don&#39;t catch it.\nnonexistentFunc();\nconsole.log(&#39;This will not run.&#39;);</code></pre>\n<p>Note that <code>uncaughtException</code> is a very crude mechanism for exception\nhandling and may be removed in the future.\n\n</p>\n<p>Don&#39;t use it, use <a href=\"domain.html\">domains</a> instead. If you do use it, restart\nyour application after every unhandled exception!\n\n</p>\n<p>Do <em>not</em> use it as the node.js equivalent of <code>On Error Resume Next</code>. An\nunhandled exception means your application - and by extension node.js itself -\nis in an undefined state. Blindly resuming means <em>anything</em> could happen.\n\n</p>\n<p>Think of resuming as pulling the power cord when you are upgrading your system.\nNine out of ten times nothing happens - but the 10th time, your system is bust.\n\n</p>\n<p>You have been warned.\n\n</p>\n",
          "params": []
        },
        {
          "textRaw": "Signal Events",
          "name": "SIGINT, SIGHUP, etc.",
          "type": "event",
          "desc": "<p>Emitted when the processes receives a signal. See sigaction(2) for a list of\nstandard POSIX signal names such as SIGINT, SIGHUP, etc.\n\n</p>\n<p>Example of listening for <code>SIGINT</code>:\n\n</p>\n<pre><code>// Start reading from stdin so we don&#39;t exit.\nprocess.stdin.resume();\n\nprocess.on(&#39;SIGINT&#39;, function() {\n  console.log(&#39;Got SIGINT.  Press Control-D to exit.&#39;);\n});</code></pre>\n<p>An easy way to send the <code>SIGINT</code> signal is with <code>Control-C</code> in most terminal\nprograms.\n\n</p>\n<p>Note:\n\n</p>\n<ul>\n<li><code>SIGUSR1</code> is reserved by node.js to start the debugger.  It&#39;s possible to\ninstall a listener but that won&#39;t stop the debugger from starting.</li>\n<li><code>SIGTERM</code> and <code>SIGINT</code> have default handlers on non-Windows platforms that resets\nthe terminal mode before exiting with code <code>128 + signal number</code>. If one of\nthese signals has a listener installed, its default behaviour will be removed\n(node will no longer exit).</li>\n<li><code>SIGPIPE</code> is ignored by default, it can have a listener installed.</li>\n<li><code>SIGHUP</code> is generated on Windows when the console window is closed, and on other\nplatforms under various similar conditions, see signal(7). It can have a\nlistener installed, however node will be unconditionally terminated by Windows\nabout 10 seconds later. On non-Windows platforms, the default behaviour of\n<code>SIGHUP</code> is to terminate node, but once a listener has been installed its\ndefault behaviour will be removed.</li>\n<li><code>SIGTERM</code> is not supported on Windows, it can be listened on.</li>\n<li><code>SIGINT</code> from the terminal is supported on all platforms, and can usually be\ngenerated with <code>CTRL+C</code> (though this may be configurable). It is not generated\nwhen terminal raw mode is enabled.</li>\n<li><code>SIGBREAK</code> is delivered on Windows when <code>CTRL+BREAK</code> is pressed, on non-Windows\nplatforms it can be listened on, but there is no way to send or generate it.</li>\n<li><code>SIGWINCH</code> is delivered when the console has been resized. On Windows, this will\nonly happen on write to the console when the cursor is being moved, or when a\nreadable tty is used in raw mode.</li>\n<li><code>SIGKILL</code> cannot have a listener installed, it will unconditionally terminate\nnode on all platforms.</li>\n<li><code>SIGSTOP</code> cannot have a listener installed.</li>\n</ul>\n<p>Note that Windows does not support sending Signals, but node offers some\nemulation with <code>process.kill()</code>, and <code>child_process.kill()</code>:\n- Sending signal <code>0</code> can be used to search for the existence of a process\n- Sending <code>SIGINT</code>, <code>SIGTERM</code>, and <code>SIGKILL</code> cause the unconditional exit of the\n  target process.\n\n</p>\n",
          "params": []
        }
      ],
      "properties": [
        {
          "textRaw": "process.stdout",
          "name": "stdout",
          "desc": "<p>A <code>Writable Stream</code> to <code>stdout</code>.\n\n</p>\n<p>Example: the definition of <code>console.log</code>\n\n</p>\n<pre><code>console.log = function(d) {\n  process.stdout.write(d + &#39;\\n&#39;);\n};</code></pre>\n<p><code>process.stderr</code> and <code>process.stdout</code> are unlike other streams in Node in\nthat writes to them are usually blocking.\n\n</p>\n<ul>\n<li>They are blocking in the case that they refer to regular files or TTY file\ndescriptors.</li>\n<li>In the case they refer to pipes:<ul>\n<li>They are blocking in Linux/Unix.</li>\n<li>They are non-blocking like other streams in Windows.</li>\n</ul>\n</li>\n</ul>\n<p>To check if Node is being run in a TTY context, read the <code>isTTY</code> property\non <code>process.stderr</code>, <code>process.stdout</code>, or <code>process.stdin</code>:\n\n</p>\n<pre><code>$ node -p &quot;Boolean(process.stdin.isTTY)&quot;\ntrue\n$ echo &quot;foo&quot; | node -p &quot;Boolean(process.stdin.isTTY)&quot;\nfalse\n\n$ node -p &quot;Boolean(process.stdout.isTTY)&quot;\ntrue\n$ node -p &quot;Boolean(process.stdout.isTTY)&quot; | cat\nfalse</code></pre>\n<p>See <a href=\"tty.html#tty_tty\">the tty docs</a> for more information.\n\n</p>\n"
        },
        {
          "textRaw": "process.stderr",
          "name": "stderr",
          "desc": "<p>A writable stream to stderr.\n\n</p>\n<p><code>process.stderr</code> and <code>process.stdout</code> are unlike other streams in Node in\nthat writes to them are usually blocking.\n\n</p>\n<ul>\n<li>They are blocking in the case that they refer to regular files or TTY file\ndescriptors.</li>\n<li>In the case they refer to pipes:<ul>\n<li>They are blocking in Linux/Unix.</li>\n<li>They are non-blocking like other streams in Windows.</li>\n</ul>\n</li>\n</ul>\n"
        },
        {
          "textRaw": "process.stdin",
          "name": "stdin",
          "desc": "<p>A <code>Readable Stream</code> for stdin. \n\n</p>\n<p>Example of opening standard input and listening for both events:\n\n</p>\n<pre><code>process.stdin.setEncoding(&#39;utf8&#39;);\n\nprocess.stdin.on(&#39;readable&#39;, function() {\n  var chunk = process.stdin.read();\n  if (chunk !== null) {\n    process.stdout.write(&#39;data: &#39; + chunk);\n  }\n});\n\nprocess.stdin.on(&#39;end&#39;, function() {\n  process.stdout.write(&#39;end&#39;);\n});</code></pre>\n<p>As a Stream, <code>process.stdin</code> can also be used in &quot;old&quot; mode that is compatible\nwith scripts written for node prior v0.10.\nFor more information see\n<a href=\"stream.html#stream_compatibility_with_older_node_versions\">Stream compatibility</a>.\n\n</p>\n<p>In &quot;old&quot; Streams mode the stdin stream is paused by default, so one\nmust call <code>process.stdin.resume()</code> to read from it. Note also that calling\n<code>process.stdin.resume()</code> itself would switch stream to &quot;old&quot; mode.\n\n</p>\n<p>If you are starting a new project you should prefer a more recent &quot;new&quot; Streams\nmode over &quot;old&quot; one.\n\n</p>\n"
        },
        {
          "textRaw": "process.argv",
          "name": "argv",
          "desc": "<p>An array containing the command line arguments.  The first element will be\n&#39;node&#39;, the second element will be the name of the JavaScript file.  The\nnext elements will be any additional command line arguments.\n\n</p>\n<pre><code>// print process.argv\nprocess.argv.forEach(function(val, index, array) {\n  console.log(index + &#39;: &#39; + val);\n});</code></pre>\n<p>This will generate:\n\n</p>\n<pre><code>$ node process-2.js one two=three four\n0: node\n1: /Users/mjr/work/node/process-2.js\n2: one\n3: two=three\n4: four</code></pre>\n"
        },
        {
          "textRaw": "process.execPath",
          "name": "execPath",
          "desc": "<p>This is the absolute pathname of the executable that started the process.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>/usr/local/bin/node</code></pre>\n"
        },
        {
          "textRaw": "process.execArgv",
          "name": "execArgv",
          "desc": "<p>This is the set of node-specific command line options from the\nexecutable that started the process.  These options do not show up in\n<code>process.argv</code>, and do not include the node executable, the name of\nthe script, or any options following the script name. These options\nare useful in order to spawn child processes with the same execution\nenvironment as the parent.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>$ node --harmony script.js --version</code></pre>\n<p>results in process.execArgv:\n\n</p>\n<pre><code>[&#39;--harmony&#39;]</code></pre>\n<p>and process.argv:\n\n</p>\n<pre><code>[&#39;/usr/local/bin/node&#39;, &#39;script.js&#39;, &#39;--version&#39;]</code></pre>\n"
        },
        {
          "textRaw": "process.env",
          "name": "env",
          "desc": "<p>An object containing the user environment. See environ(7).\n\n</p>\n<p>An example of this object looks like:\n\n</p>\n<pre><code>{ TERM: &#39;xterm-256color&#39;,\n  SHELL: &#39;/usr/local/bin/bash&#39;,\n  USER: &#39;maciej&#39;,\n  PATH: &#39;~/.bin/:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin&#39;,\n  PWD: &#39;/Users/maciej&#39;,\n  EDITOR: &#39;vim&#39;,\n  SHLVL: &#39;1&#39;,\n  HOME: &#39;/Users/maciej&#39;,\n  LOGNAME: &#39;maciej&#39;,\n  _: &#39;/usr/local/bin/node&#39; }</code></pre>\n<p>You can write to this object, but changes won&#39;t be reflected outside of your\nprocess. That means that the following won&#39;t work:\n\n</p>\n<pre><code>node -e &#39;process.env.foo = &quot;bar&quot;&#39; &amp;&amp; echo $foo</code></pre>\n<p>But this will:\n\n</p>\n<pre><code>process.env.foo = &#39;bar&#39;;\nconsole.log(process.env.foo);</code></pre>\n"
        },
        {
          "textRaw": "process.version",
          "name": "version",
          "desc": "<p>A compiled-in property that exposes <code>NODE_VERSION</code>.\n\n</p>\n<pre><code>console.log(&#39;Version: &#39; + process.version);</code></pre>\n"
        },
        {
          "textRaw": "process.versions",
          "name": "versions",
          "desc": "<p>A property exposing version strings of node and its dependencies.\n\n</p>\n<pre><code>console.log(process.versions);</code></pre>\n<p>Will print something like:\n\n</p>\n<pre><code>{ http_parser: &#39;1.0&#39;,\n  node: &#39;0.10.4&#39;,\n  v8: &#39;3.14.5.8&#39;,\n  ares: &#39;1.9.0-DEV&#39;,\n  uv: &#39;0.10.3&#39;,\n  zlib: &#39;1.2.3&#39;,\n  modules: &#39;11&#39;,\n  openssl: &#39;1.0.1e&#39; }</code></pre>\n"
        },
        {
          "textRaw": "process.config",
          "name": "config",
          "desc": "<p>An Object containing the JavaScript representation of the configure options\nthat were used to compile the current node executable. This is the same as\nthe &quot;config.gypi&quot; file that was produced when running the <code>./configure</code> script.\n\n</p>\n<p>An example of the possible output looks like:\n\n</p>\n<pre><code>{ target_defaults:\n   { cflags: [],\n     default_configuration: &#39;Release&#39;,\n     defines: [],\n     include_dirs: [],\n     libraries: [] },\n  variables:\n   { host_arch: &#39;x64&#39;,\n     node_install_npm: &#39;true&#39;,\n     node_prefix: &#39;&#39;,\n     node_shared_cares: &#39;false&#39;,\n     node_shared_http_parser: &#39;false&#39;,\n     node_shared_libuv: &#39;false&#39;,\n     node_shared_v8: &#39;false&#39;,\n     node_shared_zlib: &#39;false&#39;,\n     node_use_dtrace: &#39;false&#39;,\n     node_use_openssl: &#39;true&#39;,\n     node_shared_openssl: &#39;false&#39;,\n     strict_aliasing: &#39;true&#39;,\n     target_arch: &#39;x64&#39;,\n     v8_use_snapshot: &#39;true&#39; } }</code></pre>\n"
        },
        {
          "textRaw": "process.pid",
          "name": "pid",
          "desc": "<p>The PID of the process.\n\n</p>\n<pre><code>console.log(&#39;This process is pid &#39; + process.pid);</code></pre>\n"
        },
        {
          "textRaw": "process.title",
          "name": "title",
          "desc": "<p>Getter/setter to set what is displayed in &#39;ps&#39;.\n\n</p>\n<p>When used as a setter, the maximum length is platform-specific and probably\nshort.\n\n</p>\n<p>On Linux and OS X, it&#39;s limited to the size of the binary name plus the\nlength of the command line arguments because it overwrites the argv memory.\n\n</p>\n<p>v0.8 allowed for longer process title strings by also overwriting the environ\nmemory but that was potentially insecure/confusing in some (rather obscure)\ncases.\n\n\n</p>\n"
        },
        {
          "textRaw": "process.arch",
          "name": "arch",
          "desc": "<p>What processor architecture you&#39;re running on: <code>&#39;arm&#39;</code>, <code>&#39;ia32&#39;</code>, or <code>&#39;x64&#39;</code>.\n\n</p>\n<pre><code>console.log(&#39;This processor architecture is &#39; + process.arch);</code></pre>\n"
        },
        {
          "textRaw": "process.platform",
          "name": "platform",
          "desc": "<p>What platform you&#39;re running on:\n<code>&#39;darwin&#39;</code>, <code>&#39;freebsd&#39;</code>, <code>&#39;linux&#39;</code>, <code>&#39;sunos&#39;</code> or <code>&#39;win32&#39;</code>\n\n</p>\n<pre><code>console.log(&#39;This platform is &#39; + process.platform);</code></pre>\n"
        },
        {
          "textRaw": "`maxTickDepth` {Number} Default = 1000 ",
          "name": "maxTickDepth",
          "desc": "<p>Callbacks passed to <code>process.nextTick</code> will <em>usually</em> be called at the\nend of the current flow of execution, and are thus approximately as fast\nas calling a function synchronously.  Left unchecked, this would starve\nthe event loop, preventing any I/O from occurring.\n\n</p>\n<p>Consider this code:\n\n</p>\n<pre><code>process.nextTick(function foo() {\n  process.nextTick(foo);\n});</code></pre>\n<p>In order to avoid the situation where Node is blocked by an infinite\nloop of recursive series of nextTick calls, it defers to allow some I/O\nto be done every so often.\n\n</p>\n<p>The <code>process.maxTickDepth</code> value is the maximum depth of\nnextTick-calling nextTick-callbacks that will be evaluated before\nallowing other forms of I/O to occur.\n\n</p>\n",
          "shortDesc": "Default = 1000"
        }
      ],
      "methods": [
        {
          "textRaw": "process.abort()",
          "type": "method",
          "name": "abort",
          "desc": "<p>This causes node to emit an abort. This will cause node to exit and\ngenerate a core file.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "process.chdir(directory)",
          "type": "method",
          "name": "chdir",
          "desc": "<p>Changes the current working directory of the process or throws an exception if that fails.\n\n</p>\n<pre><code>console.log(&#39;Starting directory: &#39; + process.cwd());\ntry {\n  process.chdir(&#39;/tmp&#39;);\n  console.log(&#39;New directory: &#39; + process.cwd());\n}\ncatch (err) {\n  console.log(&#39;chdir: &#39; + err);\n}</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "directory"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.cwd()",
          "type": "method",
          "name": "cwd",
          "desc": "<p>Returns the current working directory of the process.\n\n</p>\n<pre><code>console.log(&#39;Current directory: &#39; + process.cwd());</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "process.exit([code])",
          "type": "method",
          "name": "exit",
          "desc": "<p>Ends the process with the specified <code>code</code>.  If omitted, exit uses the\n&#39;success&#39; code <code>0</code>.\n\n</p>\n<p>To exit with a &#39;failure&#39; code:\n\n</p>\n<pre><code>process.exit(1);</code></pre>\n<p>The shell that executed node should see the exit code as 1.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "code",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.getgid()",
          "type": "method",
          "name": "getgid",
          "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Gets the group identity of the process. (See getgid(2).)\nThis is the numerical group id, not the group name.\n\n</p>\n<pre><code>if (process.getgid) {\n  console.log(&#39;Current gid: &#39; + process.getgid());\n}</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "process.setgid(id)",
          "type": "method",
          "name": "setgid",
          "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Sets the group identity of the process. (See setgid(2).)  This accepts either\na numerical ID or a groupname string. If a groupname is specified, this method\nblocks while resolving it to a numerical ID.\n\n</p>\n<pre><code>if (process.getgid &amp;&amp; process.setgid) {\n  console.log(&#39;Current gid: &#39; + process.getgid());\n  try {\n    process.setgid(501);\n    console.log(&#39;New gid: &#39; + process.getgid());\n  }\n  catch (err) {\n    console.log(&#39;Failed to set gid: &#39; + err);\n  }\n}</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "id"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.getuid()",
          "type": "method",
          "name": "getuid",
          "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Gets the user identity of the process. (See getuid(2).)\nThis is the numerical userid, not the username.\n\n</p>\n<pre><code>if (process.getuid) {\n  console.log(&#39;Current uid: &#39; + process.getuid());\n}</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "process.setuid(id)",
          "type": "method",
          "name": "setuid",
          "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Sets the user identity of the process. (See setuid(2).)  This accepts either\na numerical ID or a username string.  If a username is specified, this method\nblocks while resolving it to a numerical ID.\n\n</p>\n<pre><code>if (process.getuid &amp;&amp; process.setuid) {\n  console.log(&#39;Current uid: &#39; + process.getuid());\n  try {\n    process.setuid(501);\n    console.log(&#39;New uid: &#39; + process.getuid());\n  }\n  catch (err) {\n    console.log(&#39;Failed to set uid: &#39; + err);\n  }\n}</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "id"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.getgroups()",
          "type": "method",
          "name": "getgroups",
          "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Returns an array with the supplementary group IDs. POSIX leaves it unspecified\nif the effective group ID is included but node.js ensures it always is.\n\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "process.setgroups(groups)",
          "type": "method",
          "name": "setgroups",
          "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Sets the supplementary group IDs. This is a privileged operation, meaning you\nneed to be root or have the CAP_SETGID capability.\n\n</p>\n<p>The list can contain group IDs, group names or both.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "groups"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.initgroups(user, extra_group)",
          "type": "method",
          "name": "initgroups",
          "desc": "<p>Note: this function is only available on POSIX platforms (i.e. not Windows)\n\n</p>\n<p>Reads /etc/group and initializes the group access list, using all groups of\nwhich the user is a member. This is a privileged operation, meaning you need\nto be root or have the CAP_SETGID capability.\n\n</p>\n<p><code>user</code> is a user name or user ID. <code>extra_group</code> is a group name or group ID.\n\n</p>\n<p>Some care needs to be taken when dropping privileges. Example:\n\n</p>\n<pre><code>console.log(process.getgroups());         // [ 0 ]\nprocess.initgroups(&#39;bnoordhuis&#39;, 1000);   // switch user\nconsole.log(process.getgroups());         // [ 27, 30, 46, 1000, 0 ]\nprocess.setgid(1000);                     // drop root gid\nconsole.log(process.getgroups());         // [ 27, 30, 46, 1000 ]</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "user"
                },
                {
                  "name": "extra_group"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.kill(pid, [signal])",
          "type": "method",
          "name": "kill",
          "desc": "<p>Send a signal to a process. <code>pid</code> is the process id and <code>signal</code> is the\nstring describing the signal to send.  Signal names are strings like\n&#39;SIGINT&#39; or &#39;SIGHUP&#39;.  If omitted, the signal will be &#39;SIGTERM&#39;.\nSee <a href=\"#process_signal_events\">Signal Events</a> and kill(2) for more information.\n\n</p>\n<p>Will throw an error if target does not exist, and as a special case, a signal of\n<code>0</code> can be used to test for the existence of a process.\n\n</p>\n<p>Note that just because the name of this function is <code>process.kill</code>, it is\nreally just a signal sender, like the <code>kill</code> system call.  The signal sent\nmay do something other than kill the target process.\n\n</p>\n<p>Example of sending a signal to yourself:\n\n</p>\n<pre><code>process.on(&#39;SIGHUP&#39;, function() {\n  console.log(&#39;Got SIGHUP signal.&#39;);\n});\n\nsetTimeout(function() {\n  console.log(&#39;Exiting.&#39;);\n  process.exit(0);\n}, 100);\n\nprocess.kill(process.pid, &#39;SIGHUP&#39;);</code></pre>\n<p>Note: When SIGUSR1 is received by Node.js it starts the debugger, see\n<a href=\"#process_signal_events\">Signal Events</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "pid"
                },
                {
                  "name": "signal",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.memoryUsage()",
          "type": "method",
          "name": "memoryUsage",
          "desc": "<p>Returns an object describing the memory usage of the Node process\nmeasured in bytes.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;);\n\nconsole.log(util.inspect(process.memoryUsage()));</code></pre>\n<p>This will generate:\n\n</p>\n<pre><code>{ rss: 4935680,\n  heapTotal: 1826816,\n  heapUsed: 650472 }</code></pre>\n<p><code>heapTotal</code> and <code>heapUsed</code> refer to V8&#39;s memory usage.\n\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "process.nextTick(callback)",
          "type": "method",
          "name": "nextTick",
          "desc": "<p>On the next loop around the event loop call this callback.\nThis is <em>not</em> a simple alias to <code>setTimeout(fn, 0)</code>, it&#39;s much more\nefficient.  It typically runs before any other I/O events fire, but there\nare some exceptions.  See <code>process.maxTickDepth</code> below.\n\n</p>\n<pre><code>process.nextTick(function() {\n  console.log(&#39;nextTick callback&#39;);\n});</code></pre>\n<p>This is important in developing APIs where you want to give the user the\nchance to assign event handlers after an object has been constructed,\nbut before any I/O has occurred.\n\n</p>\n<pre><code>function MyThing(options) {\n  this.setupOptions(options);\n\n  process.nextTick(function() {\n    this.startDoingStuff();\n  }.bind(this));\n}\n\nvar thing = new MyThing();\nthing.getReadyForStuff();\n\n// thing.startDoingStuff() gets called now, not before.</code></pre>\n<p>It is very important for APIs to be either 100% synchronous or 100%\nasynchronous.  Consider this example:\n\n</p>\n<pre><code>// WARNING!  DO NOT USE!  BAD UNSAFE HAZARD!\nfunction maybeSync(arg, cb) {\n  if (arg) {\n    cb();\n    return;\n  }\n\n  fs.stat(&#39;file&#39;, cb);\n}</code></pre>\n<p>This API is hazardous.  If you do this:\n\n</p>\n<pre><code>maybeSync(true, function() {\n  foo();\n});\nbar();</code></pre>\n<p>then it&#39;s not clear whether <code>foo()</code> or <code>bar()</code> will be called first.\n\n</p>\n<p>This approach is much better:\n\n</p>\n<pre><code>function definitelyAsync(arg, cb) {\n  if (arg) {\n    process.nextTick(cb);\n    return;\n  }\n\n  fs.stat(&#39;file&#39;, cb);\n}</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.umask([mask])",
          "type": "method",
          "name": "umask",
          "desc": "<p>Sets or reads the process&#39;s file mode creation mask. Child processes inherit\nthe mask from the parent process. Returns the old mask if <code>mask</code> argument is\ngiven, otherwise returns the current mask.\n\n</p>\n<pre><code>var oldmask, newmask = 0644;\n\noldmask = process.umask(newmask);\nconsole.log(&#39;Changed umask from: &#39; + oldmask.toString(8) +\n            &#39; to &#39; + newmask.toString(8));</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "mask",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "process.uptime()",
          "type": "method",
          "name": "uptime",
          "desc": "<p>Number of seconds Node has been running.\n\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "process.hrtime()",
          "type": "method",
          "name": "hrtime",
          "desc": "<p>Returns the current high-resolution real time in a <code>[seconds, nanoseconds]</code>\ntuple Array. It is relative to an arbitrary time in the past. It is not\nrelated to the time of day and therefore not subject to clock drift. The\nprimary use is for measuring performance between intervals.\n\n</p>\n<p>You may pass in the result of a previous call to <code>process.hrtime()</code> to get\na diff reading, useful for benchmarks and measuring intervals:\n\n</p>\n<pre><code>var time = process.hrtime();\n// [ 1800216, 25 ]\n\nsetTimeout(function() {\n  var diff = process.hrtime(time);\n  // [ 1, 552 ]\n\n  console.log(&#39;benchmark took %d nanoseconds&#39;, diff[0] * 1e9 + diff[1]);\n  // benchmark took 1000000527 nanoseconds\n}, 1000);</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        }
      ]
    }
  ],
  "vars": [
    {
      "textRaw": "require()",
      "type": "var",
      "name": "require",
      "desc": "<p>To require modules. See the [Modules][] section.  <code>require</code> isn&#39;t actually a\nglobal but rather local to each module.\n\n</p>\n",
      "methods": [
        {
          "textRaw": "require.resolve()",
          "type": "method",
          "name": "resolve",
          "desc": "<p>Use the internal <code>require()</code> machinery to look up the location of a module,\nbut rather than loading the module, just return the resolved filename.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        }
      ],
      "properties": [
        {
          "textRaw": "`cache` {Object} ",
          "name": "cache",
          "desc": "<p>Modules are cached in this object when they are required. By deleting a key\nvalue from this object, the next <code>require</code> will reload the module.\n\n</p>\n"
        },
        {
          "textRaw": "`extensions` {Object} ",
          "name": "extensions",
          "stability": 0,
          "stabilityText": "Deprecated",
          "desc": "<p>Instruct <code>require</code> on how to handle certain file extensions.\n\n</p>\n<p>Process files with the extension <code>.sjs</code> as <code>.js</code>:\n\n</p>\n<pre><code>require.extensions[&#39;.sjs&#39;] = require.extensions[&#39;.js&#39;];</code></pre>\n<p><strong>Deprecated</strong>  In the past, this list has been used to load\nnon-JavaScript modules into Node by compiling them on-demand.\nHowever, in practice, there are much better ways to do this, such as\nloading modules via some other Node program, or compiling them to\nJavaScript ahead of time.\n\n</p>\n<p>Since the Module system is locked, this feature will probably never go\naway.  However, it may have subtle bugs and complexities that are best\nleft untouched.\n\n</p>\n"
        }
      ]
    },
    {
      "textRaw": "__filename",
      "name": "__filename",
      "type": "var",
      "desc": "<p>The filename of the code being executed.  This is the resolved absolute path\nof this code file.  For a main program this is not necessarily the same\nfilename used in the command line.  The value inside a module is the path\nto that module file.\n\n</p>\n<p>Example: running <code>node example.js</code> from <code>/Users/mjr</code>\n\n</p>\n<pre><code>console.log(__filename);\n// /Users/mjr/example.js</code></pre>\n<p><code>__filename</code> isn&#39;t actually a global but rather local to each module.\n\n</p>\n"
    },
    {
      "textRaw": "__dirname",
      "name": "__dirname",
      "type": "var",
      "desc": "<p>The name of the directory that the currently executing script resides in.\n\n</p>\n<p>Example: running <code>node example.js</code> from <code>/Users/mjr</code>\n\n</p>\n<pre><code>console.log(__dirname);\n// /Users/mjr</code></pre>\n<p><code>__dirname</code> isn&#39;t actually a global but rather local to each module.\n\n\n</p>\n"
    },
    {
      "textRaw": "module",
      "name": "module",
      "type": "var",
      "desc": "<p>A reference to the current module. In particular\n<code>module.exports</code> is used for defining what a module exports and makes\navailable through <code>require()</code>.\n\n</p>\n<p><code>module</code> isn&#39;t actually a global but rather local to each module.\n\n</p>\n<p>See the [module system documentation][] for more information.\n\n</p>\n"
    },
    {
      "textRaw": "exports",
      "name": "exports",
      "type": "var",
      "desc": "<p>A reference to the <code>module.exports</code> that is shorter to type.\nSee [module system documentation][] for details on when to use <code>exports</code> and\nwhen to use <code>module.exports</code>.\n\n</p>\n<p><code>exports</code> isn&#39;t actually a global but rather local to each module.\n\n</p>\n<p>See the [module system documentation][] for more information.\n\n</p>\n<p>See the [module section][] for more information.\n\n</p>\n"
    }
  ],
  "methods": [
    {
      "textRaw": "setTimeout(cb, ms)",
      "type": "method",
      "name": "setTimeout",
      "desc": "<p>Run callback <code>cb</code> after <em>at least</em> <code>ms</code> milliseconds. The actual delay depends\non external factors like OS timer granularity and system load.\n\n</p>\n<p>The timeout must be in the range of 1-2,147,483,647 inclusive. If the value is\noutside that range, it&#39;s changed to 1 millisecond. Broadly speaking, a timer\ncannot span more than 24.8 days.\n\n</p>\n<p>Returns an opaque value that represents the timer.\n\n</p>\n",
      "signatures": [
        {
          "params": [
            {
              "name": "cb"
            },
            {
              "name": "ms"
            }
          ]
        }
      ]
    },
    {
      "textRaw": "clearTimeout(t)",
      "type": "method",
      "name": "clearTimeout",
      "desc": "<p>Stop a timer that was previously created with <code>setTimeout()</code>. The callback will\nnot execute.\n\n</p>\n",
      "signatures": [
        {
          "params": [
            {
              "name": "t"
            }
          ]
        }
      ]
    },
    {
      "textRaw": "setInterval(cb, ms)",
      "type": "method",
      "name": "setInterval",
      "desc": "<p>Run callback <code>cb</code> repeatedly every <code>ms</code> milliseconds. Note that the actual\ninterval may vary, depending on external factors like OS timer granularity and\nsystem load. It&#39;s never less than <code>ms</code> but it may be longer.\n\n</p>\n<p>The interval must be in the range of 1-2,147,483,647 inclusive. If the value is\noutside that range, it&#39;s changed to 1 millisecond. Broadly speaking, a timer\ncannot span more than 24.8 days.\n\n</p>\n<p>Returns an opaque value that represents the timer.\n\n</p>\n",
      "signatures": [
        {
          "params": [
            {
              "name": "cb"
            },
            {
              "name": "ms"
            }
          ]
        }
      ]
    }
  ],
  "modules": [
    {
      "textRaw": "Timers",
      "name": "timers",
      "stability": 5,
      "stabilityText": "Locked",
      "desc": "<p>All of the timer functions are globals.  You do not need to <code>require()</code>\nthis module in order to use them.\n\n</p>\n",
      "methods": [
        {
          "textRaw": "setTimeout(callback, delay, [arg], [...])",
          "type": "method",
          "name": "setTimeout",
          "desc": "<p>To schedule execution of a one-time <code>callback</code> after <code>delay</code> milliseconds. Returns a\n<code>timeoutObject</code> for possible use with <code>clearTimeout()</code>. Optionally you can\nalso pass arguments to the callback.\n\n</p>\n<p>It is important to note that your callback will probably not be called in exactly\n<code>delay</code> milliseconds - Node.js makes no guarantees about the exact timing of when\nthe callback will fire, nor of the ordering things will fire in. The callback will\nbe called as close as possible to the time specified.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "callback"
                },
                {
                  "name": "delay"
                },
                {
                  "name": "arg",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "clearTimeout(timeoutObject)",
          "type": "method",
          "name": "clearTimeout",
          "desc": "<p>Prevents a timeout from triggering.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "timeoutObject"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "setInterval(callback, delay, [arg], [...])",
          "type": "method",
          "name": "setInterval",
          "desc": "<p>To schedule the repeated execution of <code>callback</code> every <code>delay</code> milliseconds.\nReturns a <code>intervalObject</code> for possible use with <code>clearInterval()</code>. Optionally\nyou can also pass arguments to the callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "callback"
                },
                {
                  "name": "delay"
                },
                {
                  "name": "arg",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "clearInterval(intervalObject)",
          "type": "method",
          "name": "clearInterval",
          "desc": "<p>Stops a interval from triggering.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "intervalObject"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "unref()",
          "type": "method",
          "name": "unref",
          "desc": "<p>The opaque value returned by <code>setTimeout</code> and <code>setInterval</code> also has the method\n<code>timer.unref()</code> which will allow you to create a timer that is active but if\nit is the only item left in the event loop won&#39;t keep the program running.\nIf the timer is already <code>unref</code>d calling <code>unref</code> again will have no effect.\n\n</p>\n<p>In the case of <code>setTimeout</code> when you <code>unref</code> you create a separate timer that\nwill wakeup the event loop, creating too many of these may adversely effect\nevent loop performance -- use wisely.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "ref()",
          "type": "method",
          "name": "ref",
          "desc": "<p>If you had previously <code>unref()</code>d a timer you can call <code>ref()</code> to explicitly\nrequest the timer hold the program open. If the timer is already <code>ref</code>d calling\n<code>ref</code> again will have no effect.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "setImmediate(callback, [arg], [...])",
          "type": "method",
          "name": "setImmediate",
          "desc": "<p>To schedule the &quot;immediate&quot; execution of <code>callback</code> after I/O events\ncallbacks and before <code>setTimeout</code> and <code>setInterval</code> . Returns an\n<code>immediateObject</code> for possible use with <code>clearImmediate()</code>. Optionally you\ncan also pass arguments to the callback.\n\n</p>\n<p>Immediates are queued in the order created, and are popped off the queue once\nper loop iteration. This is different from <code>process.nextTick</code> which will\nexecute <code>process.maxTickDepth</code> queued callbacks per iteration. <code>setImmediate</code>\nwill yield to the event loop after firing a queued callback to make sure I/O is\nnot being starved. While order is preserved for execution, other I/O events may\nfire between any two scheduled immediate callbacks.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "callback"
                },
                {
                  "name": "arg",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "clearImmediate(immediateObject)",
          "type": "method",
          "name": "clearImmediate",
          "desc": "<p>Stops an immediate from triggering.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "immediateObject"
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "Timers"
    },
    {
      "textRaw": "Modules",
      "name": "module",
      "stability": 5,
      "stabilityText": "Locked",
      "desc": "<p>Node has a simple module loading system.  In Node, files and modules are in\none-to-one correspondence.  As an example, <code>foo.js</code> loads the module\n<code>circle.js</code> in the same directory.\n\n</p>\n<p>The contents of <code>foo.js</code>:\n\n</p>\n<pre><code>var circle = require(&#39;./circle.js&#39;);\nconsole.log( &#39;The area of a circle of radius 4 is &#39;\n           + circle.area(4));</code></pre>\n<p>The contents of <code>circle.js</code>:\n\n</p>\n<pre><code>var PI = Math.PI;\n\nexports.area = function (r) {\n  return PI * r * r;\n};\n\nexports.circumference = function (r) {\n  return 2 * PI * r;\n};</code></pre>\n<p>The module <code>circle.js</code> has exported the functions <code>area()</code> and\n<code>circumference()</code>.  To add functions and objects to the root of your module,\nyou can add them to the special <code>exports</code> object.\n\n</p>\n<p>Variables local to the module will be private, as though the module was wrapped\nin a function. In this example the variable <code>PI</code> is private to <code>circle.js</code>.\n\n</p>\n<p>If you want the root of your module&#39;s export to be a function (such as a\nconstructor) or if you want to export a complete object in one assignment\ninstead of building it one property at a time, assign it to <code>module.exports</code>\ninstead of <code>exports</code>.\n\n</p>\n<p>Below, <code>bar.js</code> makes use of the <code>square</code> module, which exports a constructor:\n\n</p>\n<pre><code>var square = require(&#39;./square.js&#39;);\nvar mySquare = square(2);\nconsole.log(&#39;The area of my square is &#39; + mySquare.area());</code></pre>\n<p>The <code>square</code> module is defined in <code>square.js</code>:\n\n</p>\n<pre><code>// assigning to exports will not modify module, must use module.exports\nmodule.exports = function(width) {\n  return {\n    area: function() {\n      return width * width;\n    }\n  };\n}</code></pre>\n<p>The module system is implemented in the <code>require(&quot;module&quot;)</code> module.\n\n</p>\n",
      "miscs": [
        {
          "textRaw": "Cycles",
          "name": "Cycles",
          "type": "misc",
          "desc": "<p>When there are circular <code>require()</code> calls, a module might not be\ndone being executed when it is returned.\n\n</p>\n<p>Consider this situation:\n\n</p>\n<p><code>a.js</code>:\n\n</p>\n<pre><code>console.log(&#39;a starting&#39;);\nexports.done = false;\nvar b = require(&#39;./b.js&#39;);\nconsole.log(&#39;in a, b.done = %j&#39;, b.done);\nexports.done = true;\nconsole.log(&#39;a done&#39;);</code></pre>\n<p><code>b.js</code>:\n\n</p>\n<pre><code>console.log(&#39;b starting&#39;);\nexports.done = false;\nvar a = require(&#39;./a.js&#39;);\nconsole.log(&#39;in b, a.done = %j&#39;, a.done);\nexports.done = true;\nconsole.log(&#39;b done&#39;);</code></pre>\n<p><code>main.js</code>:\n\n</p>\n<pre><code>console.log(&#39;main starting&#39;);\nvar a = require(&#39;./a.js&#39;);\nvar b = require(&#39;./b.js&#39;);\nconsole.log(&#39;in main, a.done=%j, b.done=%j&#39;, a.done, b.done);</code></pre>\n<p>When <code>main.js</code> loads <code>a.js</code>, then <code>a.js</code> in turn loads <code>b.js</code>.  At that\npoint, <code>b.js</code> tries to load <code>a.js</code>.  In order to prevent an infinite\nloop an <strong>unfinished copy</strong> of the <code>a.js</code> exports object is returned to the\n<code>b.js</code> module.  <code>b.js</code> then finishes loading, and its <code>exports</code> object is\nprovided to the <code>a.js</code> module.\n\n</p>\n<p>By the time <code>main.js</code> has loaded both modules, they&#39;re both finished.\nThe output of this program would thus be:\n\n</p>\n<pre><code>$ node main.js\nmain starting\na starting\nb starting\nin b, a.done = false\nb done\nin a, b.done = true\na done\nin main, a.done=true, b.done=true</code></pre>\n<p>If you have cyclic module dependencies in your program, make sure to\nplan accordingly.\n\n</p>\n"
        },
        {
          "textRaw": "Core Modules",
          "name": "Core Modules",
          "type": "misc",
          "desc": "<p>Node has several modules compiled into the binary.  These modules are\ndescribed in greater detail elsewhere in this documentation.\n\n</p>\n<p>The core modules are defined in node&#39;s source in the <code>lib/</code> folder.\n\n</p>\n<p>Core modules are always preferentially loaded if their identifier is\npassed to <code>require()</code>.  For instance, <code>require(&#39;http&#39;)</code> will always\nreturn the built in HTTP module, even if there is a file by that name.\n\n</p>\n"
        },
        {
          "textRaw": "File Modules",
          "name": "File Modules",
          "type": "misc",
          "desc": "<p>If the exact filename is not found, then node will attempt to load the\nrequired filename with the added extension of <code>.js</code>, <code>.json</code>, and then <code>.node</code>.\n\n</p>\n<p><code>.js</code> files are interpreted as JavaScript text files, and <code>.json</code> files are\nparsed as JSON text files. <code>.node</code> files are interpreted as compiled addon\nmodules loaded with <code>dlopen</code>.\n\n</p>\n<p>A module prefixed with <code>&#39;/&#39;</code> is an absolute path to the file.  For\nexample, <code>require(&#39;/home/marco/foo.js&#39;)</code> will load the file at\n<code>/home/marco/foo.js</code>.\n\n</p>\n<p>A module prefixed with <code>&#39;./&#39;</code> is relative to the file calling <code>require()</code>.\nThat is, <code>circle.js</code> must be in the same directory as <code>foo.js</code> for\n<code>require(&#39;./circle&#39;)</code> to find it.\n\n</p>\n<p>Without a leading &#39;/&#39; or &#39;./&#39; to indicate a file, the module is either a\n&quot;core module&quot; or is loaded from a <code>node_modules</code> folder.\n\n</p>\n<p>If the given path does not exist, <code>require()</code> will throw an Error with its\n<code>code</code> property set to <code>&#39;MODULE_NOT_FOUND&#39;</code>.\n\n</p>\n"
        },
        {
          "textRaw": "Loading from `node_modules` Folders",
          "name": "Loading from `node_modules` Folders",
          "type": "misc",
          "desc": "<p>If the module identifier passed to <code>require()</code> is not a native module,\nand does not begin with <code>&#39;/&#39;</code>, <code>&#39;../&#39;</code>, or <code>&#39;./&#39;</code>, then node starts at the\nparent directory of the current module, and adds <code>/node_modules</code>, and\nattempts to load the module from that location.\n\n</p>\n<p>If it is not found there, then it moves to the parent directory, and so\non, until the root of the file system is reached.\n\n</p>\n<p>For example, if the file at <code>&#39;/home/ry/projects/foo.js&#39;</code> called\n<code>require(&#39;bar.js&#39;)</code>, then node would look in the following locations, in\nthis order:\n\n</p>\n<ul>\n<li><code>/home/ry/projects/node_modules/bar.js</code></li>\n<li><code>/home/ry/node_modules/bar.js</code></li>\n<li><code>/home/node_modules/bar.js</code></li>\n<li><code>/node_modules/bar.js</code></li>\n</ul>\n<p>This allows programs to localize their dependencies, so that they do not\nclash.\n\n</p>\n"
        },
        {
          "textRaw": "Folders as Modules",
          "name": "Folders as Modules",
          "type": "misc",
          "desc": "<p>It is convenient to organize programs and libraries into self-contained\ndirectories, and then provide a single entry point to that library.\nThere are three ways in which a folder may be passed to <code>require()</code> as\nan argument.\n\n</p>\n<p>The first is to create a <code>package.json</code> file in the root of the folder,\nwhich specifies a <code>main</code> module.  An example package.json file might\nlook like this:\n\n</p>\n<pre><code>{ &quot;name&quot; : &quot;some-library&quot;,\n  &quot;main&quot; : &quot;./lib/some-library.js&quot; }</code></pre>\n<p>If this was in a folder at <code>./some-library</code>, then\n<code>require(&#39;./some-library&#39;)</code> would attempt to load\n<code>./some-library/lib/some-library.js</code>.\n\n</p>\n<p>This is the extent of Node&#39;s awareness of package.json files.\n\n</p>\n<p>If there is no package.json file present in the directory, then node\nwill attempt to load an <code>index.js</code> or <code>index.node</code> file out of that\ndirectory.  For example, if there was no package.json file in the above\nexample, then <code>require(&#39;./some-library&#39;)</code> would attempt to load:\n\n</p>\n<ul>\n<li><code>./some-library/index.js</code></li>\n<li><code>./some-library/index.node</code></li>\n</ul>\n"
        },
        {
          "textRaw": "Caching",
          "name": "Caching",
          "type": "misc",
          "desc": "<p>Modules are cached after the first time they are loaded.  This means\n(among other things) that every call to <code>require(&#39;foo&#39;)</code> will get\nexactly the same object returned, if it would resolve to the same file.\n\n</p>\n<p>Multiple calls to <code>require(&#39;foo&#39;)</code> may not cause the module code to be\nexecuted multiple times.  This is an important feature.  With it,\n&quot;partially done&quot; objects can be returned, thus allowing transitive\ndependencies to be loaded even when they would cause cycles.\n\n</p>\n<p>If you want to have a module execute code multiple times, then export a\nfunction, and call that function.\n\n</p>\n",
          "miscs": [
            {
              "textRaw": "Module Caching Caveats",
              "name": "Module Caching Caveats",
              "type": "misc",
              "desc": "<p>Modules are cached based on their resolved filename.  Since modules may\nresolve to a different filename based on the location of the calling\nmodule (loading from <code>node_modules</code> folders), it is not a <em>guarantee</em>\nthat <code>require(&#39;foo&#39;)</code> will always return the exact same object, if it\nwould resolve to different files.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "All Together...",
          "name": "All Together...",
          "type": "misc",
          "desc": "<p>To get the exact filename that will be loaded when <code>require()</code> is called, use\nthe <code>require.resolve()</code> function.\n\n</p>\n<p>Putting together all of the above, here is the high-level algorithm\nin pseudocode of what require.resolve does:\n\n</p>\n<pre><code>require(X) from module at path Y\n1. If X is a core module,\n   a. return the core module\n   b. STOP\n2. If X begins with &#39;./&#39; or &#39;/&#39; or &#39;../&#39;\n   a. LOAD_AS_FILE(Y + X)\n   b. LOAD_AS_DIRECTORY(Y + X)\n3. LOAD_NODE_MODULES(X, dirname(Y))\n4. THROW &quot;not found&quot;\n\nLOAD_AS_FILE(X)\n1. If X is a file, load X as JavaScript text.  STOP\n2. If X.js is a file, load X.js as JavaScript text.  STOP\n3. If X.json is a file, parse X.json to a JavaScript Object.  STOP\n4. If X.node is a file, load X.node as binary addon.  STOP\n\nLOAD_AS_DIRECTORY(X)\n1. If X/package.json is a file,\n   a. Parse X/package.json, and look for &quot;main&quot; field.\n   b. let M = X + (json main field)\n   c. LOAD_AS_FILE(M)\n2. If X/index.js is a file, load X/index.js as JavaScript text.  STOP\n3. If X/index.json is a file, parse X/index.json to a JavaScript object. STOP\n4. If X/index.node is a file, load X/index.node as binary addon.  STOP\n\nLOAD_NODE_MODULES(X, START)\n1. let DIRS=NODE_MODULES_PATHS(START)\n2. for each DIR in DIRS:\n   a. LOAD_AS_FILE(DIR/X)\n   b. LOAD_AS_DIRECTORY(DIR/X)\n\nNODE_MODULES_PATHS(START)\n1. let PARTS = path split(START)\n2. let I = count of PARTS - 1\n3. let DIRS = []\n4. while I &gt;= 0,\n   a. if PARTS[I] = &quot;node_modules&quot; CONTINUE\n   c. DIR = path join(PARTS[0 .. I] + &quot;node_modules&quot;)\n   b. DIRS = DIRS + DIR\n   c. let I = I - 1\n5. return DIRS</code></pre>\n"
        },
        {
          "textRaw": "Loading from the global folders",
          "name": "Loading from the global folders",
          "type": "misc",
          "desc": "<p>If the <code>NODE_PATH</code> environment variable is set to a colon-delimited list\nof absolute paths, then node will search those paths for modules if they\nare not found elsewhere.  (Note: On Windows, <code>NODE_PATH</code> is delimited by\nsemicolons instead of colons.)\n\n</p>\n<p>Additionally, node will search in the following locations:\n\n</p>\n<ul>\n<li>1: <code>$HOME/.node_modules</code></li>\n<li>2: <code>$HOME/.node_libraries</code></li>\n<li>3: <code>$PREFIX/lib/node</code></li>\n</ul>\n<p>Where <code>$HOME</code> is the user&#39;s home directory, and <code>$PREFIX</code> is node&#39;s\nconfigured <code>node_prefix</code>.\n\n</p>\n<p>These are mostly for historic reasons.  You are highly encouraged to\nplace your dependencies locally in <code>node_modules</code> folders.  They will be\nloaded faster, and more reliably.\n\n</p>\n"
        },
        {
          "textRaw": "Accessing the main module",
          "name": "Accessing the main module",
          "type": "misc",
          "desc": "<p>When a file is run directly from Node, <code>require.main</code> is set to its\n<code>module</code>. That means that you can determine whether a file has been run\ndirectly by testing\n\n</p>\n<pre><code>require.main === module</code></pre>\n<p>For a file <code>foo.js</code>, this will be <code>true</code> if run via <code>node foo.js</code>, but\n<code>false</code> if run by <code>require(&#39;./foo&#39;)</code>.\n\n</p>\n<p>Because <code>module</code> provides a <code>filename</code> property (normally equivalent to\n<code>__filename</code>), the entry point of the current application can be obtained\nby checking <code>require.main.filename</code>.\n\n</p>\n"
        },
        {
          "textRaw": "Addenda: Package Manager Tips",
          "name": "Addenda: Package Manager Tips",
          "type": "misc",
          "desc": "<p>The semantics of Node&#39;s <code>require()</code> function were designed to be general\nenough to support a number of sane directory structures. Package manager\nprograms such as <code>dpkg</code>, <code>rpm</code>, and <code>npm</code> will hopefully find it possible to\nbuild native packages from Node modules without modification.\n\n</p>\n<p>Below we give a suggested directory structure that could work:\n\n</p>\n<p>Let&#39;s say that we wanted to have the folder at\n<code>/usr/lib/node/&lt;some-package&gt;/&lt;some-version&gt;</code> hold the contents of a\nspecific version of a package.\n\n</p>\n<p>Packages can depend on one another. In order to install package <code>foo</code>, you\nmay have to install a specific version of package <code>bar</code>.  The <code>bar</code> package\nmay itself have dependencies, and in some cases, these dependencies may even\ncollide or form cycles.\n\n</p>\n<p>Since Node looks up the <code>realpath</code> of any modules it loads (that is,\nresolves symlinks), and then looks for their dependencies in the\n<code>node_modules</code> folders as described above, this situation is very simple to\nresolve with the following architecture:\n\n</p>\n<ul>\n<li><code>/usr/lib/node/foo/1.2.3/</code> - Contents of the <code>foo</code> package, version 1.2.3.</li>\n<li><code>/usr/lib/node/bar/4.3.2/</code> - Contents of the <code>bar</code> package that <code>foo</code>\ndepends on.</li>\n<li><code>/usr/lib/node/foo/1.2.3/node_modules/bar</code> - Symbolic link to\n<code>/usr/lib/node/bar/4.3.2/</code>.</li>\n<li><code>/usr/lib/node/bar/4.3.2/node_modules/*</code> - Symbolic links to the packages\nthat <code>bar</code> depends on.</li>\n</ul>\n<p>Thus, even if a cycle is encountered, or if there are dependency\nconflicts, every module will be able to get a version of its dependency\nthat it can use.\n\n</p>\n<p>When the code in the <code>foo</code> package does <code>require(&#39;bar&#39;)</code>, it will get the\nversion that is symlinked into <code>/usr/lib/node/foo/1.2.3/node_modules/bar</code>.\nThen, when the code in the <code>bar</code> package calls <code>require(&#39;quux&#39;)</code>, it&#39;ll get\nthe version that is symlinked into\n<code>/usr/lib/node/bar/4.3.2/node_modules/quux</code>.\n\n</p>\n<p>Furthermore, to make the module lookup process even more optimal, rather\nthan putting packages directly in <code>/usr/lib/node</code>, we could put them in\n<code>/usr/lib/node_modules/&lt;name&gt;/&lt;version&gt;</code>.  Then node will not bother\nlooking for missing dependencies in <code>/usr/node_modules</code> or <code>/node_modules</code>.\n\n</p>\n<p>In order to make modules available to the node REPL, it might be useful to\nalso add the <code>/usr/lib/node_modules</code> folder to the <code>$NODE_PATH</code> environment\nvariable.  Since the module lookups using <code>node_modules</code> folders are all\nrelative, and based on the real path of the files making the calls to\n<code>require()</code>, the packages themselves can be anywhere.\n\n</p>\n"
        }
      ],
      "vars": [
        {
          "textRaw": "The `module` Object",
          "name": "module",
          "type": "var",
          "desc": "<p>In each module, the <code>module</code> free variable is a reference to the object\nrepresenting the current module.  For convenience, <code>module.exports</code> is\nalso accessible via the <code>exports</code> module-global. <code>module</code> isn&#39;t actually\na global but rather local to each module.\n\n</p>\n",
          "properties": [
            {
              "textRaw": "`exports` {Object} ",
              "name": "exports",
              "desc": "<p>The <code>module.exports</code> object is created by the Module system. Sometimes this is not\nacceptable; many want their module to be an instance of some class. To do this\nassign the desired export object to <code>module.exports</code>. Note that assigning the\ndesired object to <code>exports</code> will simply rebind the local <code>exports</code> variable,\nwhich is probably not what you want to do.\n\n</p>\n<p>For example suppose we were making a module called <code>a.js</code>\n\n</p>\n<pre><code>var EventEmitter = require(&#39;events&#39;).EventEmitter;\n\nmodule.exports = new EventEmitter();\n\n// Do some work, and after some time emit\n// the &#39;ready&#39; event from the module itself.\nsetTimeout(function() {\n  module.exports.emit(&#39;ready&#39;);\n}, 1000);</code></pre>\n<p>Then in another file we could do\n\n</p>\n<pre><code>var a = require(&#39;./a&#39;);\na.on(&#39;ready&#39;, function() {\n  console.log(&#39;module a is ready&#39;);\n});</code></pre>\n<p>Note that assignment to <code>module.exports</code> must be done immediately. It cannot be\ndone in any callbacks.  This does not work:\n\n</p>\n<p>x.js:\n\n</p>\n<pre><code>setTimeout(function() {\n  module.exports = { a: &quot;hello&quot; };\n}, 0);</code></pre>\n<p>y.js:\n\n</p>\n<pre><code>var x = require(&#39;./x&#39;);\nconsole.log(x.a);</code></pre>\n",
              "modules": [
                {
                  "textRaw": "exports alias",
                  "name": "exports_alias",
                  "desc": "<p>The <code>exports</code> variable that is available within a module starts as a reference\nto <code>module.exports</code>. As with any variable, if you assign a new value to it, it\nis no longer bound to the previous value.\n\n</p>\n<p>To illustrate the behaviour, imagine this hypothetical implementation of\n<code>require()</code>:\n\n</p>\n<pre><code>function require(...) {\n  // ...\n  function (module, exports) {\n    // Your module code here\n    exports = some_func;        // re-assigns exports, exports is no longer\n                                // a shortcut, and nothing is exported.\n    module.exports = some_func; // makes your module export 0\n  } (module, module.exports);\n  return module;\n}</code></pre>\n<p>As a guideline, if the relationship between <code>exports</code> and <code>module.exports</code>\nseems like magic to you, ignore <code>exports</code> and only use <code>module.exports</code>.\n\n</p>\n",
                  "type": "module",
                  "displayName": "exports alias"
                }
              ]
            },
            {
              "textRaw": "`id` {String} ",
              "name": "id",
              "desc": "<p>The identifier for the module.  Typically this is the fully resolved\nfilename.\n\n\n</p>\n"
            },
            {
              "textRaw": "`filename` {String} ",
              "name": "filename",
              "desc": "<p>The fully resolved filename to the module.\n\n\n</p>\n"
            },
            {
              "textRaw": "`loaded` {Boolean} ",
              "name": "loaded",
              "desc": "<p>Whether or not the module is done loading, or is in the process of\nloading.\n\n\n</p>\n"
            },
            {
              "textRaw": "`parent` {Module Object} ",
              "name": "parent",
              "desc": "<p>The module that required this one.\n\n\n</p>\n"
            },
            {
              "textRaw": "`children` {Array} ",
              "name": "children",
              "desc": "<p>The module objects required by this one.\n\n\n\n</p>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "module.require(id)",
              "type": "method",
              "name": "require",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: {Object} `module.exports` from the resolved module ",
                    "name": "return",
                    "type": "Object",
                    "desc": "`module.exports` from the resolved module"
                  },
                  "params": [
                    {
                      "textRaw": "`id` {String} ",
                      "name": "id",
                      "type": "String"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "id"
                    }
                  ]
                }
              ],
              "desc": "<p>The <code>module.require</code> method provides a way to load a module as if\n<code>require()</code> was called from the original module.\n\n</p>\n<p>Note that in order to do this, you must get a reference to the <code>module</code>\nobject.  Since <code>require()</code> returns the <code>module.exports</code>, and the <code>module</code> is\ntypically <em>only</em> available within a specific module&#39;s code, it must be\nexplicitly exported in order to be used.\n\n\n</p>\n"
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "module"
    },
    {
      "textRaw": "Addons",
      "name": "addons",
      "desc": "<p>Addons are dynamically linked shared objects. They can provide glue to C and\nC++ libraries. The API (at the moment) is rather complex, involving\nknowledge of several libraries:\n\n</p>\n<ul>\n<li><p>V8 JavaScript, a C++ library. Used for interfacing with JavaScript:\ncreating objects, calling functions, etc.  Documented mostly in the\n<code>v8.h</code> header file (<code>deps/v8/include/v8.h</code> in the Node source\ntree), which is also available\n<a href=\"http://izs.me/v8-docs/main.html\">online</a>.</p>\n</li>\n<li><p><a href=\"https://github.com/joyent/libuv\">libuv</a>, C event loop library.\nAnytime one needs to wait for a file descriptor to become readable,\nwait for a timer, or wait for a signal to be received one will need\nto interface with libuv. That is, if you perform any I/O, libuv will\nneed to be used.</p>\n</li>\n<li><p>Internal Node libraries. Most importantly is the <code>node::ObjectWrap</code>\nclass which you will likely want to derive from.</p>\n</li>\n<li><p>Others. Look in <code>deps/</code> for what else is available.</p>\n</li>\n</ul>\n<p>Node statically compiles all its dependencies into the executable.\nWhen compiling your module, you don&#39;t need to worry about linking to\nany of these libraries.\n\n</p>\n<p>All of the following examples are available for\n<a href=\"https://github.com/rvagg/node-addon-examples\">download</a> and may be\nused as a starting-point for your own Addon.\n\n</p>\n",
      "modules": [
        {
          "textRaw": "Hello world",
          "name": "hello_world",
          "desc": "<p>To get started let&#39;s make a small Addon which is the C++ equivalent of\nthe following JavaScript code:\n\n</p>\n<pre><code>module.exports.hello = function() { return &#39;world&#39;; };</code></pre>\n<p>First we create a file <code>hello.cc</code>:\n\n</p>\n<pre><code>#include &lt;node.h&gt;\n#include &lt;v8.h&gt;\n\nusing namespace v8;\n\nHandle&lt;Value&gt; Method(const Arguments&amp; args) {\n  HandleScope scope;\n  return scope.Close(String::New(&quot;world&quot;));\n}\n\nvoid init(Handle&lt;Object&gt; exports) {\n  exports-&gt;Set(String::NewSymbol(&quot;hello&quot;),\n      FunctionTemplate::New(Method)-&gt;GetFunction());\n}\n\nNODE_MODULE(hello, init)</code></pre>\n<p>Note that all Node addons must export an initialization function:\n\n</p>\n<pre><code>void Initialize (Handle&lt;Object&gt; exports);\nNODE_MODULE(module_name, Initialize)</code></pre>\n<p>There is no semi-colon after <code>NODE_MODULE</code> as it&#39;s not a function (see <code>node.h</code>).\n\n</p>\n<p>The <code>module_name</code> needs to match the filename of the final binary (minus the\n.node suffix).\n\n</p>\n<p>The source code needs to be built into <code>hello.node</code>, the binary Addon. To\ndo this we create a file called <code>binding.gyp</code> which describes the configuration\nto build your module in a JSON-like format. This file gets compiled by\n<a href=\"https://github.com/TooTallNate/node-gyp\">node-gyp</a>.\n\n</p>\n<pre><code>{\n  &quot;targets&quot;: [\n    {\n      &quot;target_name&quot;: &quot;hello&quot;,\n      &quot;sources&quot;: [ &quot;hello.cc&quot; ]\n    }\n  ]\n}</code></pre>\n<p>The next step is to generate the appropriate project build files for the\ncurrent platform. Use <code>node-gyp configure</code> for that.\n\n</p>\n<p>Now you will have either a <code>Makefile</code> (on Unix platforms) or a <code>vcxproj</code> file\n(on Windows) in the <code>build/</code> directory. Next invoke the <code>node-gyp build</code>\ncommand.\n\n</p>\n<p>Now you have your compiled <code>.node</code> bindings file! The compiled bindings end up\nin <code>build/Release/</code>.\n\n</p>\n<p>You can now use the binary addon in a Node project <code>hello.js</code> by pointing <code>require</code> to\nthe recently built <code>hello.node</code> module:\n\n</p>\n<pre><code>var addon = require(&#39;./build/Release/hello&#39;);\n\nconsole.log(addon.hello()); // &#39;world&#39;</code></pre>\n<p>Please see patterns below for further information or\n</p>\n<p><a href=\"https://github.com/arturadib/node-qt\">https://github.com/arturadib/node-qt</a> for an example in production.\n\n\n</p>\n",
          "type": "module",
          "displayName": "Hello world"
        },
        {
          "textRaw": "Addon patterns",
          "name": "addon_patterns",
          "desc": "<p>Below are some addon patterns to help you get started. Consult the online\n<a href=\"http://izs.me/v8-docs/main.html\">v8 reference</a> for help with the various v8\ncalls, and v8&#39;s <a href=\"http://code.google.com/apis/v8/embed.html\">Embedder&#39;s Guide</a>\nfor an explanation of several concepts used such as handles, scopes,\nfunction templates, etc.\n\n</p>\n<p>In order to use these examples you need to compile them using <code>node-gyp</code>.\nCreate the following <code>binding.gyp</code> file:\n\n</p>\n<pre><code>{\n  &quot;targets&quot;: [\n    {\n      &quot;target_name&quot;: &quot;addon&quot;,\n      &quot;sources&quot;: [ &quot;addon.cc&quot; ]\n    }\n  ]\n}</code></pre>\n<p>In cases where there is more than one <code>.cc</code> file, simply add the file name to the\n<code>sources</code> array, e.g.:\n\n</p>\n<pre><code>&quot;sources&quot;: [&quot;addon.cc&quot;, &quot;myexample.cc&quot;]</code></pre>\n<p>Now that you have your <code>binding.gyp</code> ready, you can configure and build the\naddon:\n\n</p>\n<pre><code>$ node-gyp configure build</code></pre>\n",
          "modules": [
            {
              "textRaw": "Function arguments",
              "name": "function_arguments",
              "desc": "<p>The following pattern illustrates how to read arguments from JavaScript\nfunction calls and return a result. This is the main and only needed source\n<code>addon.cc</code>:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n\nusing namespace v8;\n\nHandle&lt;Value&gt; Add(const Arguments&amp; args) {\n  HandleScope scope;\n\n  if (args.Length() &lt; 2) {\n    ThrowException(Exception::TypeError(String::New(&quot;Wrong number of arguments&quot;)));\n    return scope.Close(Undefined());\n  }\n\n  if (!args[0]-&gt;IsNumber() || !args[1]-&gt;IsNumber()) {\n    ThrowException(Exception::TypeError(String::New(&quot;Wrong arguments&quot;)));\n    return scope.Close(Undefined());\n  }\n\n  Local&lt;Number&gt; num = Number::New(args[0]-&gt;NumberValue() +\n      args[1]-&gt;NumberValue());\n  return scope.Close(num);\n}\n\nvoid Init(Handle&lt;Object&gt; exports) {\n  exports-&gt;Set(String::NewSymbol(&quot;add&quot;),\n      FunctionTemplate::New(Add)-&gt;GetFunction());\n}\n\nNODE_MODULE(addon, Init)</code></pre>\n<p>You can test it with the following JavaScript snippet:\n\n</p>\n<pre><code>var addon = require(&#39;./build/Release/addon&#39;);\n\nconsole.log( &#39;This should be eight:&#39;, addon.add(3,5) );</code></pre>\n",
              "type": "module",
              "displayName": "Function arguments"
            },
            {
              "textRaw": "Callbacks",
              "name": "callbacks",
              "desc": "<p>You can pass JavaScript functions to a C++ function and execute them from\nthere. Here&#39;s <code>addon.cc</code>:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n\nusing namespace v8;\n\nHandle&lt;Value&gt; RunCallback(const Arguments&amp; args) {\n  HandleScope scope;\n\n  Local&lt;Function&gt; cb = Local&lt;Function&gt;::Cast(args[0]);\n  const unsigned argc = 1;\n  Local&lt;Value&gt; argv[argc] = { Local&lt;Value&gt;::New(String::New(&quot;hello world&quot;)) };\n  cb-&gt;Call(Context::GetCurrent()-&gt;Global(), argc, argv);\n\n  return scope.Close(Undefined());\n}\n\nvoid Init(Handle&lt;Object&gt; exports, Handle&lt;Object&gt; module) {\n  module-&gt;Set(String::NewSymbol(&quot;exports&quot;),\n      FunctionTemplate::New(RunCallback)-&gt;GetFunction());\n}\n\nNODE_MODULE(addon, Init)</code></pre>\n<p>Note that this example uses a two-argument form of <code>Init()</code> that receives\nthe full <code>module</code> object as the second argument. This allows the addon\nto completely overwrite <code>exports</code> with a single function instead of\nadding the function as a property of <code>exports</code>.\n\n</p>\n<p>To test it run the following JavaScript snippet:\n\n</p>\n<pre><code>var addon = require(&#39;./build/Release/addon&#39;);\n\naddon(function(msg){\n  console.log(msg); // &#39;hello world&#39;\n});</code></pre>\n",
              "type": "module",
              "displayName": "Callbacks"
            },
            {
              "textRaw": "Object factory",
              "name": "object_factory",
              "desc": "<p>You can create and return new objects from within a C++ function with this\n<code>addon.cc</code> pattern, which returns an object with property <code>msg</code> that echoes\nthe string passed to <code>createObject()</code>:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n\nusing namespace v8;\n\nHandle&lt;Value&gt; CreateObject(const Arguments&amp; args) {\n  HandleScope scope;\n\n  Local&lt;Object&gt; obj = Object::New();\n  obj-&gt;Set(String::NewSymbol(&quot;msg&quot;), args[0]-&gt;ToString());\n\n  return scope.Close(obj);\n}\n\nvoid Init(Handle&lt;Object&gt; exports, Handle&lt;Object&gt; module) {\n  module-&gt;Set(String::NewSymbol(&quot;exports&quot;),\n      FunctionTemplate::New(CreateObject)-&gt;GetFunction());\n}\n\nNODE_MODULE(addon, Init)</code></pre>\n<p>To test it in JavaScript:\n\n</p>\n<pre><code>var addon = require(&#39;./build/Release/addon&#39;);\n\nvar obj1 = addon(&#39;hello&#39;);\nvar obj2 = addon(&#39;world&#39;);\nconsole.log(obj1.msg+&#39; &#39;+obj2.msg); // &#39;hello world&#39;</code></pre>\n",
              "type": "module",
              "displayName": "Object factory"
            },
            {
              "textRaw": "Function factory",
              "name": "function_factory",
              "desc": "<p>This pattern illustrates how to create and return a JavaScript function that\nwraps a C++ function:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n\nusing namespace v8;\n\nHandle&lt;Value&gt; MyFunction(const Arguments&amp; args) {\n  HandleScope scope;\n  return scope.Close(String::New(&quot;hello world&quot;));\n}\n\nHandle&lt;Value&gt; CreateFunction(const Arguments&amp; args) {\n  HandleScope scope;\n\n  Local&lt;FunctionTemplate&gt; tpl = FunctionTemplate::New(MyFunction);\n  Local&lt;Function&gt; fn = tpl-&gt;GetFunction();\n  fn-&gt;SetName(String::NewSymbol(&quot;theFunction&quot;)); // omit this to make it anonymous\n\n  return scope.Close(fn);\n}\n\nvoid Init(Handle&lt;Object&gt; exports, Handle&lt;Object&gt; module) {\n  module-&gt;Set(String::NewSymbol(&quot;exports&quot;),\n      FunctionTemplate::New(CreateFunction)-&gt;GetFunction());\n}\n\nNODE_MODULE(addon, Init)</code></pre>\n<p>To test:\n\n</p>\n<pre><code>var addon = require(&#39;./build/Release/addon&#39;);\n\nvar fn = addon();\nconsole.log(fn()); // &#39;hello world&#39;</code></pre>\n",
              "type": "module",
              "displayName": "Function factory"
            },
            {
              "textRaw": "Wrapping C++ objects",
              "name": "wrapping_c++_objects",
              "desc": "<p>Here we will create a wrapper for a C++ object/class <code>MyObject</code> that can be\ninstantiated in JavaScript through the <code>new</code> operator. First prepare the main\nmodule <code>addon.cc</code>:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n#include &quot;myobject.h&quot;\n\nusing namespace v8;\n\nvoid InitAll(Handle&lt;Object&gt; exports) {\n  MyObject::Init(exports);\n}\n\nNODE_MODULE(addon, InitAll)</code></pre>\n<p>Then in <code>myobject.h</code> make your wrapper inherit from <code>node::ObjectWrap</code>:\n\n</p>\n<pre><code>#ifndef MYOBJECT_H\n#define MYOBJECT_H\n\n#include &lt;node.h&gt;\n\nclass MyObject : public node::ObjectWrap {\n public:\n  static void Init(v8::Handle&lt;v8::Object&gt; exports);\n\n private:\n  explicit MyObject(double value = 0);\n  ~MyObject();\n\n  static v8::Handle&lt;v8::Value&gt; New(const v8::Arguments&amp; args);\n  static v8::Handle&lt;v8::Value&gt; PlusOne(const v8::Arguments&amp; args);\n  static v8::Persistent&lt;v8::Function&gt; constructor;\n  double value_;\n};\n\n#endif</code></pre>\n<p>And in <code>myobject.cc</code> implement the various methods that you want to expose.\nHere we expose the method <code>plusOne</code> by adding it to the constructor&#39;s\nprototype:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n#include &quot;myobject.h&quot;\n\nusing namespace v8;\n\nPersistent&lt;Function&gt; MyObject::constructor;\n\nMyObject::MyObject(double value) : value_(value) {\n}\n\nMyObject::~MyObject() {\n}\n\nvoid MyObject::Init(Handle&lt;Object&gt; exports) {\n  // Prepare constructor template\n  Local&lt;FunctionTemplate&gt; tpl = FunctionTemplate::New(New);\n  tpl-&gt;SetClassName(String::NewSymbol(&quot;MyObject&quot;));\n  tpl-&gt;InstanceTemplate()-&gt;SetInternalFieldCount(1);\n  // Prototype\n  tpl-&gt;PrototypeTemplate()-&gt;Set(String::NewSymbol(&quot;plusOne&quot;),\n      FunctionTemplate::New(PlusOne)-&gt;GetFunction());\n  constructor = Persistent&lt;Function&gt;::New(tpl-&gt;GetFunction());\n  exports-&gt;Set(String::NewSymbol(&quot;MyObject&quot;), constructor);\n}\n\nHandle&lt;Value&gt; MyObject::New(const Arguments&amp; args) {\n  HandleScope scope;\n\n  if (args.IsConstructCall()) {\n    // Invoked as constructor: `new MyObject(...)`\n    double value = args[0]-&gt;IsUndefined() ? 0 : args[0]-&gt;NumberValue();\n    MyObject* obj = new MyObject(value);\n    obj-&gt;Wrap(args.This());\n    return args.This();\n  } else {\n    // Invoked as plain function `MyObject(...)`, turn into construct call.\n    const int argc = 1;\n    Local&lt;Value&gt; argv[argc] = { args[0] };\n    return scope.Close(constructor-&gt;NewInstance(argc, argv));\n  }\n}\n\nHandle&lt;Value&gt; MyObject::PlusOne(const Arguments&amp; args) {\n  HandleScope scope;\n\n  MyObject* obj = ObjectWrap::Unwrap&lt;MyObject&gt;(args.This());\n  obj-&gt;value_ += 1;\n\n  return scope.Close(Number::New(obj-&gt;value_));\n}</code></pre>\n<p>Test it with:\n\n</p>\n<pre><code>var addon = require(&#39;./build/Release/addon&#39;);\n\nvar obj = new addon.MyObject(10);\nconsole.log( obj.plusOne() ); // 11\nconsole.log( obj.plusOne() ); // 12\nconsole.log( obj.plusOne() ); // 13</code></pre>\n",
              "type": "module",
              "displayName": "Wrapping C++ objects"
            },
            {
              "textRaw": "Factory of wrapped objects",
              "name": "factory_of_wrapped_objects",
              "desc": "<p>This is useful when you want to be able to create native objects without\nexplicitly instantiating them with the <code>new</code> operator in JavaScript, e.g.\n\n</p>\n<pre><code>var obj = addon.createObject();\n// instead of:\n// var obj = new addon.Object();</code></pre>\n<p>Let&#39;s register our <code>createObject</code> method in <code>addon.cc</code>:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n#include &quot;myobject.h&quot;\n\nusing namespace v8;\n\nHandle&lt;Value&gt; CreateObject(const Arguments&amp; args) {\n  HandleScope scope;\n  return scope.Close(MyObject::NewInstance(args));\n}\n\nvoid InitAll(Handle&lt;Object&gt; exports, Handle&lt;Object&gt; module) {\n  MyObject::Init();\n\n  module-&gt;Set(String::NewSymbol(&quot;exports&quot;),\n      FunctionTemplate::New(CreateObject)-&gt;GetFunction());\n}\n\nNODE_MODULE(addon, InitAll)</code></pre>\n<p>In <code>myobject.h</code> we now introduce the static method <code>NewInstance</code> that takes\ncare of instantiating the object (i.e. it does the job of <code>new</code> in JavaScript):\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#ifndef MYOBJECT_H\n#define MYOBJECT_H\n\n#include &lt;node.h&gt;\n\nclass MyObject : public node::ObjectWrap {\n public:\n  static void Init();\n  static v8::Handle&lt;v8::Value&gt; NewInstance(const v8::Arguments&amp; args);\n\n private:\n  explicit MyObject(double value = 0);\n  ~MyObject();\n\n  static v8::Handle&lt;v8::Value&gt; New(const v8::Arguments&amp; args);\n  static v8::Handle&lt;v8::Value&gt; PlusOne(const v8::Arguments&amp; args);\n  static v8::Persistent&lt;v8::Function&gt; constructor;\n  double value_;\n};\n\n#endif</code></pre>\n<p>The implementation is similar to the above in <code>myobject.cc</code>:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n#include &quot;myobject.h&quot;\n\nusing namespace v8;\n\nPersistent&lt;Function&gt; MyObject::constructor;\n\nMyObject::MyObject(double value) : value_(value) {\n}\n\nMyObject::~MyObject() {\n}\n\nvoid MyObject::Init() {\n  // Prepare constructor template\n  Local&lt;FunctionTemplate&gt; tpl = FunctionTemplate::New(New);\n  tpl-&gt;SetClassName(String::NewSymbol(&quot;MyObject&quot;));\n  tpl-&gt;InstanceTemplate()-&gt;SetInternalFieldCount(1);\n  // Prototype\n  tpl-&gt;PrototypeTemplate()-&gt;Set(String::NewSymbol(&quot;plusOne&quot;),\n      FunctionTemplate::New(PlusOne)-&gt;GetFunction());\n  constructor = Persistent&lt;Function&gt;::New(tpl-&gt;GetFunction());\n}\n\nHandle&lt;Value&gt; MyObject::New(const Arguments&amp; args) {\n  HandleScope scope;\n\n  if (args.IsConstructCall()) {\n    // Invoked as constructor: `new MyObject(...)`\n    double value = args[0]-&gt;IsUndefined() ? 0 : args[0]-&gt;NumberValue();\n    MyObject* obj = new MyObject(value);\n    obj-&gt;Wrap(args.This());\n    return args.This();\n  } else {\n    // Invoked as plain function `MyObject(...)`, turn into construct call.\n    const int argc = 1;\n    Local&lt;Value&gt; argv[argc] = { args[0] };\n    return scope.Close(constructor-&gt;NewInstance(argc, argv));\n  }\n}\n\nHandle&lt;Value&gt; MyObject::NewInstance(const Arguments&amp; args) {\n  HandleScope scope;\n\n  const unsigned argc = 1;\n  Handle&lt;Value&gt; argv[argc] = { args[0] };\n  Local&lt;Object&gt; instance = constructor-&gt;NewInstance(argc, argv);\n\n  return scope.Close(instance);\n}\n\nHandle&lt;Value&gt; MyObject::PlusOne(const Arguments&amp; args) {\n  HandleScope scope;\n\n  MyObject* obj = ObjectWrap::Unwrap&lt;MyObject&gt;(args.This());\n  obj-&gt;value_ += 1;\n\n  return scope.Close(Number::New(obj-&gt;value_));\n}</code></pre>\n<p>Test it with:\n\n</p>\n<pre><code>var createObject = require(&#39;./build/Release/addon&#39;);\n\nvar obj = createObject(10);\nconsole.log( obj.plusOne() ); // 11\nconsole.log( obj.plusOne() ); // 12\nconsole.log( obj.plusOne() ); // 13\n\nvar obj2 = createObject(20);\nconsole.log( obj2.plusOne() ); // 21\nconsole.log( obj2.plusOne() ); // 22\nconsole.log( obj2.plusOne() ); // 23</code></pre>\n",
              "type": "module",
              "displayName": "Factory of wrapped objects"
            },
            {
              "textRaw": "Passing wrapped objects around",
              "name": "passing_wrapped_objects_around",
              "desc": "<p>In addition to wrapping and returning C++ objects, you can pass them around\nby unwrapping them with Node&#39;s <code>node::ObjectWrap::Unwrap</code> helper function.\nIn the following <code>addon.cc</code> we introduce a function <code>add()</code> that can take on two\n<code>MyObject</code> objects:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n#include &quot;myobject.h&quot;\n\nusing namespace v8;\n\nHandle&lt;Value&gt; CreateObject(const Arguments&amp; args) {\n  HandleScope scope;\n  return scope.Close(MyObject::NewInstance(args));\n}\n\nHandle&lt;Value&gt; Add(const Arguments&amp; args) {\n  HandleScope scope;\n\n  MyObject* obj1 = node::ObjectWrap::Unwrap&lt;MyObject&gt;(\n      args[0]-&gt;ToObject());\n  MyObject* obj2 = node::ObjectWrap::Unwrap&lt;MyObject&gt;(\n      args[1]-&gt;ToObject());\n\n  double sum = obj1-&gt;Value() + obj2-&gt;Value();\n  return scope.Close(Number::New(sum));\n}\n\nvoid InitAll(Handle&lt;Object&gt; exports) {\n  MyObject::Init();\n\n  exports-&gt;Set(String::NewSymbol(&quot;createObject&quot;),\n      FunctionTemplate::New(CreateObject)-&gt;GetFunction());\n\n  exports-&gt;Set(String::NewSymbol(&quot;add&quot;),\n      FunctionTemplate::New(Add)-&gt;GetFunction());\n}\n\nNODE_MODULE(addon, InitAll)</code></pre>\n<p>To make things interesting we introduce a public method in <code>myobject.h</code> so we\ncan probe private values after unwrapping the object:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#ifndef MYOBJECT_H\n#define MYOBJECT_H\n\n#include &lt;node.h&gt;\n\nclass MyObject : public node::ObjectWrap {\n public:\n  static void Init();\n  static v8::Handle&lt;v8::Value&gt; NewInstance(const v8::Arguments&amp; args);\n  double Value() const { return value_; }\n\n private:\n  explicit MyObject(double value = 0);\n  ~MyObject();\n\n  static v8::Handle&lt;v8::Value&gt; New(const v8::Arguments&amp; args);\n  static v8::Persistent&lt;v8::Function&gt; constructor;\n  double value_;\n};\n\n#endif</code></pre>\n<p>The implementation of <code>myobject.cc</code> is similar as before:\n\n</p>\n<pre><code>#define BUILDING_NODE_EXTENSION\n#include &lt;node.h&gt;\n#include &quot;myobject.h&quot;\n\nusing namespace v8;\n\nPersistent&lt;Function&gt; MyObject::constructor;\n\nMyObject::MyObject(double value) : value_(value) {\n}\n\nMyObject::~MyObject() {\n}\n\nvoid MyObject::Init() {\n  // Prepare constructor template\n  Local&lt;FunctionTemplate&gt; tpl = FunctionTemplate::New(New);\n  tpl-&gt;SetClassName(String::NewSymbol(&quot;MyObject&quot;));\n  tpl-&gt;InstanceTemplate()-&gt;SetInternalFieldCount(1);\n  constructor = Persistent&lt;Function&gt;::New(tpl-&gt;GetFunction());\n}\n\nHandle&lt;Value&gt; MyObject::New(const Arguments&amp; args) {\n  HandleScope scope;\n\n  if (args.IsConstructCall()) {\n    // Invoked as constructor: `new MyObject(...)`\n    double value = args[0]-&gt;IsUndefined() ? 0 : args[0]-&gt;NumberValue();\n    MyObject* obj = new MyObject(value);\n    obj-&gt;Wrap(args.This());\n    return args.This();\n  } else {\n    // Invoked as plain function `MyObject(...)`, turn into construct call.\n    const int argc = 1;\n    Local&lt;Value&gt; argv[argc] = { args[0] };\n    return scope.Close(constructor-&gt;NewInstance(argc, argv));\n  }\n}\n\nHandle&lt;Value&gt; MyObject::NewInstance(const Arguments&amp; args) {\n  HandleScope scope;\n\n  const unsigned argc = 1;\n  Handle&lt;Value&gt; argv[argc] = { args[0] };\n  Local&lt;Object&gt; instance = constructor-&gt;NewInstance(argc, argv);\n\n  return scope.Close(instance);\n}</code></pre>\n<p>Test it with:\n\n</p>\n<pre><code>var addon = require(&#39;./build/Release/addon&#39;);\n\nvar obj1 = addon.createObject(10);\nvar obj2 = addon.createObject(20);\nvar result = addon.add(obj1, obj2);\n\nconsole.log(result); // 30</code></pre>\n",
              "type": "module",
              "displayName": "Passing wrapped objects around"
            }
          ],
          "type": "module",
          "displayName": "Addon patterns"
        }
      ],
      "type": "module",
      "displayName": "Addons"
    },
    {
      "textRaw": "util",
      "name": "util",
      "stability": 4,
      "stabilityText": "API Frozen",
      "desc": "<p>These functions are in the module <code>&#39;util&#39;</code>. Use <code>require(&#39;util&#39;)</code> to access\nthem.\n\n\n</p>\n",
      "methods": [
        {
          "textRaw": "util.format(format, [...])",
          "type": "method",
          "name": "format",
          "desc": "<p>Returns a formatted string using the first argument as a <code>printf</code>-like format.\n\n</p>\n<p>The first argument is a string that contains zero or more <em>placeholders</em>.\nEach placeholder is replaced with the converted value from its corresponding\nargument. Supported placeholders are:\n\n</p>\n<ul>\n<li><code>%s</code> - String.</li>\n<li><code>%d</code> - Number (both integer and float).</li>\n<li><code>%j</code> - JSON.</li>\n<li><code>%</code> - single percent sign (<code>&#39;%&#39;</code>). This does not consume an argument.</li>\n</ul>\n<p>If the placeholder does not have a corresponding argument, the placeholder is\nnot replaced.\n\n</p>\n<pre><code>util.format(&#39;%s:%s&#39;, &#39;foo&#39;); // &#39;foo:%s&#39;</code></pre>\n<p>If there are more arguments than placeholders, the extra arguments are\nconverted to strings with <code>util.inspect()</code> and these strings are concatenated,\ndelimited by a space.\n\n</p>\n<pre><code>util.format(&#39;%s:%s&#39;, &#39;foo&#39;, &#39;bar&#39;, &#39;baz&#39;); // &#39;foo:bar baz&#39;</code></pre>\n<p>If the first argument is not a format string then <code>util.format()</code> returns\na string that is the concatenation of all its arguments separated by spaces.\nEach argument is converted to a string with <code>util.inspect()</code>.\n\n</p>\n<pre><code>util.format(1, 2, 3); // &#39;1 2 3&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "format"
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.debug(string)",
          "type": "method",
          "name": "debug",
          "desc": "<p>A synchronous output function. Will block the process and\noutput <code>string</code> immediately to <code>stderr</code>.\n\n</p>\n<pre><code>require(&#39;util&#39;).debug(&#39;message on stderr&#39;);</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "string"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.error([...])",
          "type": "method",
          "name": "error",
          "desc": "<p>Same as <code>util.debug()</code> except this will output all arguments immediately to\n<code>stderr</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.puts([...])",
          "type": "method",
          "name": "puts",
          "desc": "<p>A synchronous output function. Will block the process and output all arguments\nto <code>stdout</code> with newlines after each argument.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.print([...])",
          "type": "method",
          "name": "print",
          "desc": "<p>A synchronous output function. Will block the process, cast each argument to a\nstring then output to <code>stdout</code>. Does not place newlines after each argument.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.log(string)",
          "type": "method",
          "name": "log",
          "desc": "<p>Output with timestamp on <code>stdout</code>.\n\n</p>\n<pre><code>require(&#39;util&#39;).log(&#39;Timestamped message.&#39;);</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "string"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.inspect(object, [options])",
          "type": "method",
          "name": "inspect",
          "desc": "<p>Return a string representation of <code>object</code>, which is useful for debugging.\n\n</p>\n<p>An optional <em>options</em> object may be passed that alters certain aspects of the\nformatted string:\n\n</p>\n<ul>\n<li><p><code>showHidden</code> - if <code>true</code> then the object&#39;s non-enumerable properties will be\nshown too. Defaults to <code>false</code>.</p>\n</li>\n<li><p><code>depth</code> - tells <code>inspect</code> how many times to recurse while formatting the\nobject. This is useful for inspecting large complicated objects. Defaults to\n<code>2</code>. To make it recurse indefinitely pass <code>null</code>.</p>\n</li>\n<li><p><code>colors</code> - if <code>true</code>, then the output will be styled with ANSI color codes.\nDefaults to <code>false</code>. Colors are customizable, see below.</p>\n</li>\n<li><p><code>customInspect</code> - if <code>false</code>, then custom <code>inspect()</code> functions defined on the\nobjects being inspected won&#39;t be called. Defaults to <code>true</code>.</p>\n</li>\n</ul>\n<p>Example of inspecting all properties of the <code>util</code> object:\n\n</p>\n<pre><code>var util = require(&#39;util&#39;);\n\nconsole.log(util.inspect(util, { showHidden: true, depth: null }));</code></pre>\n",
          "modules": [
            {
              "textRaw": "Customizing `util.inspect` colors",
              "name": "customizing_`util.inspect`_colors",
              "desc": "<p>Color output (if enabled) of <code>util.inspect</code> is customizable globally\nvia <code>util.inspect.styles</code> and <code>util.inspect.colors</code> objects.\n\n</p>\n<p><code>util.inspect.styles</code> is a map assigning each style a color\nfrom <code>util.inspect.colors</code>.\nHighlighted styles and their default values are:\n <em> <code>number</code> (yellow)\n </em> <code>boolean</code> (yellow)\n <em> <code>string</code> (green)\n </em> <code>date</code> (magenta)\n <em> <code>regexp</code> (red)\n </em> <code>null</code> (bold)\n <em> <code>undefined</code> (grey)\n </em> <code>special</code> - only function at this time (cyan)\n * <code>name</code> (intentionally no styling)\n\n</p>\n<p>Predefined color codes are: <code>white</code>, <code>grey</code>, <code>black</code>, <code>blue</code>, <code>cyan</code>, \n<code>green</code>, <code>magenta</code>, <code>red</code> and <code>yellow</code>.\nThere are also <code>bold</code>, <code>italic</code>, <code>underline</code> and <code>inverse</code> codes.\n\n</p>\n<p>Objects also may define their own <code>inspect(depth)</code> function which <code>util.inspect()</code>\nwill invoke and use the result of when inspecting the object:\n\n</p>\n<pre><code>var util = require(&#39;util&#39;);\n\nvar obj = { name: &#39;nate&#39; };\nobj.inspect = function(depth) {\n  return &#39;{&#39; + this.name + &#39;}&#39;;\n};\n\nutil.inspect(obj);\n  // &quot;{nate}&quot;</code></pre>\n",
              "type": "module",
              "displayName": "Customizing `util.inspect` colors"
            }
          ],
          "signatures": [
            {
              "params": [
                {
                  "name": "object"
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.isArray(object)",
          "type": "method",
          "name": "isArray",
          "desc": "<p>Returns <code>true</code> if the given &quot;object&quot; is an <code>Array</code>. <code>false</code> otherwise.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;);\n\nutil.isArray([])\n  // true\nutil.isArray(new Array)\n  // true\nutil.isArray({})\n  // false</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "object"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.isRegExp(object)",
          "type": "method",
          "name": "isRegExp",
          "desc": "<p>Returns <code>true</code> if the given &quot;object&quot; is a <code>RegExp</code>. <code>false</code> otherwise.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;);\n\nutil.isRegExp(/some regexp/)\n  // true\nutil.isRegExp(new RegExp(&#39;another regexp&#39;))\n  // true\nutil.isRegExp({})\n  // false</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "object"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.isDate(object)",
          "type": "method",
          "name": "isDate",
          "desc": "<p>Returns <code>true</code> if the given &quot;object&quot; is a <code>Date</code>. <code>false</code> otherwise.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;);\n\nutil.isDate(new Date())\n  // true\nutil.isDate(Date())\n  // false (without &#39;new&#39; returns a String)\nutil.isDate({})\n  // false</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "object"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.isError(object)",
          "type": "method",
          "name": "isError",
          "desc": "<p>Returns <code>true</code> if the given &quot;object&quot; is an <code>Error</code>. <code>false</code> otherwise.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;);\n\nutil.isError(new Error())\n  // true\nutil.isError(new TypeError())\n  // true\nutil.isError({ name: &#39;Error&#39;, message: &#39;an error occurred&#39; })\n  // false</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "object"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.pump(readableStream, writableStream, [callback])",
          "type": "method",
          "name": "pump",
          "stability": 0,
          "stabilityText": "Deprecated: Use readableStream.pipe(writableStream)",
          "desc": "<p>Read the data from <code>readableStream</code> and send it to the <code>writableStream</code>.\nWhen <code>writableStream.write(data)</code> returns <code>false</code> <code>readableStream</code> will be\npaused until the <code>drain</code> event occurs on the <code>writableStream</code>. <code>callback</code> gets\nan error as its only argument and is called when <code>writableStream</code> is closed or\nwhen an error occurs.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "readableStream"
                },
                {
                  "name": "writableStream"
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "util.inherits(constructor, superConstructor)",
          "type": "method",
          "name": "inherits",
          "desc": "<p>Inherit the prototype methods from one\n<a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/constructor\">constructor</a>\ninto another.  The prototype of <code>constructor</code> will be set to a new\nobject created from <code>superConstructor</code>.\n\n</p>\n<p>As an additional convenience, <code>superConstructor</code> will be accessible\nthrough the <code>constructor.super_</code> property.\n\n</p>\n<pre><code>var util = require(&quot;util&quot;);\nvar events = require(&quot;events&quot;);\n\nfunction MyStream() {\n    events.EventEmitter.call(this);\n}\n\nutil.inherits(MyStream, events.EventEmitter);\n\nMyStream.prototype.write = function(data) {\n    this.emit(&quot;data&quot;, data);\n}\n\nvar stream = new MyStream();\n\nconsole.log(stream instanceof events.EventEmitter); // true\nconsole.log(MyStream.super_ === events.EventEmitter); // true\n\nstream.on(&quot;data&quot;, function(data) {\n    console.log(&#39;Received data: &quot;&#39; + data + &#39;&quot;&#39;);\n})\nstream.write(&quot;It works!&quot;); // Received data: &quot;It works!&quot;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "constructor"
                },
                {
                  "name": "superConstructor"
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "util"
    },
    {
      "textRaw": "Events",
      "name": "Events",
      "stability": 4,
      "stabilityText": "API Frozen",
      "type": "module",
      "desc": "<p>Many objects in Node emit events: a <code>net.Server</code> emits an event each time\na peer connects to it, a <code>fs.readStream</code> emits an event when the file is\nopened. All objects which emit events are instances of <code>events.EventEmitter</code>.\nYou can access this module by doing: <code>require(&quot;events&quot;);</code>\n\n</p>\n<p>Typically, event names are represented by a camel-cased string, however,\nthere aren&#39;t any strict restrictions on that, as any string will be accepted.\n\n</p>\n<p>Functions can then be attached to objects, to be executed when an event\nis emitted. These functions are called <em>listeners</em>. Inside a listener\nfunction, <code>this</code> refers to the <code>EventEmitter</code> that the listener was\nattached to.\n\n\n</p>\n",
      "classes": [
        {
          "textRaw": "Class: events.EventEmitter",
          "type": "class",
          "name": "events.EventEmitter",
          "desc": "<p>To access the EventEmitter class, <code>require(&#39;events&#39;).EventEmitter</code>.\n\n</p>\n<p>When an <code>EventEmitter</code> instance experiences an error, the typical action is\nto emit an <code>&#39;error&#39;</code> event.  Error events are treated as a special case in node.\nIf there is no listener for it, then the default action is to print a stack\ntrace and exit the program.\n\n</p>\n<p>All EventEmitters emit the event <code>&#39;newListener&#39;</code> when new listeners are\nadded and <code>&#39;removeListener&#39;</code> when a listener is removed.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "emitter.addListener(event, listener)",
              "type": "method",
              "name": "addListener",
              "desc": "<p>Adds a listener to the end of the listeners array for the specified event.\n\n</p>\n<pre><code>server.on(&#39;connection&#39;, function (stream) {\n  console.log(&#39;someone connected!&#39;);\n});</code></pre>\n<p>Returns emitter, so calls can be chained.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "event"
                    },
                    {
                      "name": "listener"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "event"
                    },
                    {
                      "name": "listener"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "emitter.on(event, listener)",
              "type": "method",
              "name": "on",
              "desc": "<p>Adds a listener to the end of the listeners array for the specified event.\n\n</p>\n<pre><code>server.on(&#39;connection&#39;, function (stream) {\n  console.log(&#39;someone connected!&#39;);\n});</code></pre>\n<p>Returns emitter, so calls can be chained.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "event"
                    },
                    {
                      "name": "listener"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "emitter.once(event, listener)",
              "type": "method",
              "name": "once",
              "desc": "<p>Adds a <strong>one time</strong> listener for the event. This listener is\ninvoked only the next time the event is fired, after which\nit is removed.\n\n</p>\n<pre><code>server.once(&#39;connection&#39;, function (stream) {\n  console.log(&#39;Ah, we have our first user!&#39;);\n});</code></pre>\n<p>Returns emitter, so calls can be chained.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "event"
                    },
                    {
                      "name": "listener"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "emitter.removeListener(event, listener)",
              "type": "method",
              "name": "removeListener",
              "desc": "<p>Remove a listener from the listener array for the specified event.\n<strong>Caution</strong>: changes array indices in the listener array behind the listener.\n\n</p>\n<pre><code>var callback = function(stream) {\n  console.log(&#39;someone connected!&#39;);\n};\nserver.on(&#39;connection&#39;, callback);\n// ...\nserver.removeListener(&#39;connection&#39;, callback);</code></pre>\n<p>Returns emitter, so calls can be chained.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "event"
                    },
                    {
                      "name": "listener"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "emitter.removeAllListeners([event])",
              "type": "method",
              "name": "removeAllListeners",
              "desc": "<p>Removes all listeners, or those of the specified event. It&#39;s not a good idea to\nremove listeners that were added elsewhere in the code, especially when it&#39;s on\nan emitter that you didn&#39;t create (e.g. sockets or file streams).\n\n</p>\n<p>Returns emitter, so calls can be chained.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "event",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "emitter.setMaxListeners(n)",
              "type": "method",
              "name": "setMaxListeners",
              "desc": "<p>By default EventEmitters will print a warning if more than 10 listeners are\nadded for a particular event. This is a useful default which helps finding memory leaks.\nObviously not all Emitters should be limited to 10. This function allows\nthat to be increased. Set to zero for unlimited.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "n"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "emitter.listeners(event)",
              "type": "method",
              "name": "listeners",
              "desc": "<p>Returns an array of listeners for the specified event.\n\n</p>\n<pre><code>server.on(&#39;connection&#39;, function (stream) {\n  console.log(&#39;someone connected!&#39;);\n});\nconsole.log(util.inspect(server.listeners(&#39;connection&#39;))); // [ [Function] ]</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "event"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "emitter.emit(event, [arg1], [arg2], [...])",
              "type": "method",
              "name": "emit",
              "desc": "<p>Execute each of the listeners in order with the supplied arguments.\n\n</p>\n<p>Returns <code>true</code> if event had listeners, <code>false</code> otherwise.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "event"
                    },
                    {
                      "name": "arg1",
                      "optional": true
                    },
                    {
                      "name": "arg2",
                      "optional": true
                    },
                    {
                      "name": "...",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ],
          "classMethods": [
            {
              "textRaw": "Class Method: EventEmitter.listenerCount(emitter, event)",
              "type": "classMethod",
              "name": "listenerCount",
              "desc": "<p>Return the number of listeners for a given event.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "emitter"
                    },
                    {
                      "name": "event"
                    }
                  ]
                }
              ]
            }
          ],
          "events": [
            {
              "textRaw": "Event: 'newListener'",
              "type": "event",
              "name": "newListener",
              "params": [],
              "desc": "<p>This event is emitted any time someone adds a new listener.  It is unspecified\nif <code>listener</code> is in the list returned by <code>emitter.listeners(event)</code>.\n\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'removeListener'",
              "type": "event",
              "name": "removeListener",
              "params": [],
              "desc": "<p>This event is emitted any time someone removes a listener.  It is unspecified\nif <code>listener</code> is in the list returned by <code>emitter.listeners(event)</code>.\n\n</p>\n"
            }
          ]
        }
      ]
    },
    {
      "textRaw": "Domain",
      "name": "domain",
      "stability": 2,
      "stabilityText": "Unstable",
      "desc": "<p>Domains provide a way to handle multiple different IO operations as a\nsingle group.  If any of the event emitters or callbacks registered to a\ndomain emit an <code>error</code> event, or throw an error, then the domain object\nwill be notified, rather than losing the context of the error in the\n<code>process.on(&#39;uncaughtException&#39;)</code> handler, or causing the program to\nexit immediately with an error code.\n\n</p>\n",
      "miscs": [
        {
          "textRaw": "Warning: Don't Ignore Errors!",
          "name": "Warning: Don't Ignore Errors!",
          "type": "misc",
          "desc": "<p>Domain error handlers are not a substitute for closing down your\nprocess when an error occurs.\n\n</p>\n<p>By the very nature of how <code>throw</code> works in JavaScript, there is almost\nnever any way to safely &quot;pick up where you left off&quot;, without leaking\nreferences, or creating some other sort of undefined brittle state.\n\n</p>\n<p>The safest way to respond to a thrown error is to shut down the\nprocess.  Of course, in a normal web server, you might have many\nconnections open, and it is not reasonable to abruptly shut those down\nbecause an error was triggered by someone else.\n\n</p>\n<p>The better approach is send an error response to the request that\ntriggered the error, while letting the others finish in their normal\ntime, and stop listening for new requests in that worker.\n\n</p>\n<p>In this way, <code>domain</code> usage goes hand-in-hand with the cluster module,\nsince the master process can fork a new worker when a worker\nencounters an error.  For node programs that scale to multiple\nmachines, the terminating proxy or service registry can take note of\nthe failure, and react accordingly.\n\n</p>\n<p>For example, this is not a good idea:\n\n</p>\n<pre><code class=\"javascript\">// XXX WARNING!  BAD IDEA!\n\nvar d = require(&#39;domain&#39;).create();\nd.on(&#39;error&#39;, function(er) {\n  // The error won&#39;t crash the process, but what it does is worse!\n  // Though we&#39;ve prevented abrupt process restarting, we are leaking\n  // resources like crazy if this ever happens.\n  // This is no better than process.on(&#39;uncaughtException&#39;)!\n  console.log(&#39;error, but oh well&#39;, er.message);\n});\nd.run(function() {\n  require(&#39;http&#39;).createServer(function(req, res) {\n    handleRequest(req, res);\n  }).listen(PORT);\n});</code></pre>\n<p>By using the context of a domain, and the resilience of separating our\nprogram into multiple worker processes, we can react more\nappropriately, and handle errors with much greater safety.\n\n</p>\n<pre><code class=\"javascript\">// Much better!\n\nvar cluster = require(&#39;cluster&#39;);\nvar PORT = +process.env.PORT || 1337;\n\nif (cluster.isMaster) {\n  // In real life, you&#39;d probably use more than just 2 workers,\n  // and perhaps not put the master and worker in the same file.\n  //\n  // You can also of course get a bit fancier about logging, and\n  // implement whatever custom logic you need to prevent DoS\n  // attacks and other bad behavior.\n  //\n  // See the options in the cluster documentation.\n  //\n  // The important thing is that the master does very little,\n  // increasing our resilience to unexpected errors.\n\n  cluster.fork();\n  cluster.fork();\n\n  cluster.on(&#39;disconnect&#39;, function(worker) {\n    console.error(&#39;disconnect!&#39;);\n    cluster.fork();\n  });\n\n} else {\n  // the worker\n  //\n  // This is where we put our bugs!\n\n  var domain = require(&#39;domain&#39;);\n\n  // See the cluster documentation for more details about using\n  // worker processes to serve requests.  How it works, caveats, etc.\n\n  var server = require(&#39;http&#39;).createServer(function(req, res) {\n    var d = domain.create();\n    d.on(&#39;error&#39;, function(er) {\n      console.error(&#39;error&#39;, er.stack);\n\n      // Note: we&#39;re in dangerous territory!\n      // By definition, something unexpected occurred,\n      // which we probably didn&#39;t want.\n      // Anything can happen now!  Be very careful!\n\n      try {\n        // make sure we close down within 30 seconds\n        var killtimer = setTimeout(function() {\n          process.exit(1);\n        }, 30000);\n        // But don&#39;t keep the process open just for that!\n        killtimer.unref();\n\n        // stop taking new requests.\n        server.close();\n\n        // Let the master know we&#39;re dead.  This will trigger a\n        // &#39;disconnect&#39; in the cluster master, and then it will fork\n        // a new worker.\n        cluster.worker.disconnect();\n\n        // try to send an error to the request that triggered the problem\n        res.statusCode = 500;\n        res.setHeader(&#39;content-type&#39;, &#39;text/plain&#39;);\n        res.end(&#39;Oops, there was a problem!\\n&#39;);\n      } catch (er2) {\n        // oh well, not much we can do at this point.\n        console.error(&#39;Error sending 500!&#39;, er2.stack);\n      }\n    });\n\n    // Because req and res were created before this domain existed,\n    // we need to explicitly add them.\n    // See the explanation of implicit vs explicit binding below.\n    d.add(req);\n    d.add(res);\n\n    // Now run the handler function in the domain.\n    d.run(function() {\n      handleRequest(req, res);\n    });\n  });\n  server.listen(PORT);\n}\n\n// This part isn&#39;t important.  Just an example routing thing.\n// You&#39;d put your fancy application logic here.\nfunction handleRequest(req, res) {\n  switch(req.url) {\n    case &#39;/error&#39;:\n      // We do some async stuff, and then...\n      setTimeout(function() {\n        // Whoops!\n        flerb.bark();\n      });\n      break;\n    default:\n      res.end(&#39;ok&#39;);\n  }\n}</code></pre>\n"
        },
        {
          "textRaw": "Additions to Error objects",
          "name": "Additions to Error objects",
          "type": "misc",
          "desc": "<p>Any time an Error object is routed through a domain, a few extra fields\nare added to it.\n\n</p>\n<ul>\n<li><code>error.domain</code> The domain that first handled the error.</li>\n<li><code>error.domainEmitter</code> The event emitter that emitted an &#39;error&#39; event\nwith the error object.</li>\n<li><code>error.domainBound</code> The callback function which was bound to the\ndomain, and passed an error as its first argument.</li>\n<li><code>error.domainThrown</code> A boolean indicating whether the error was\nthrown, emitted, or passed to a bound callback function.</li>\n</ul>\n"
        },
        {
          "textRaw": "Implicit Binding",
          "name": "Implicit Binding",
          "type": "misc",
          "desc": "<p>If domains are in use, then all <strong>new</strong> EventEmitter objects (including\nStream objects, requests, responses, etc.) will be implicitly bound to\nthe active domain at the time of their creation.\n\n</p>\n<p>Additionally, callbacks passed to lowlevel event loop requests (such as\nto fs.open, or other callback-taking methods) will automatically be\nbound to the active domain.  If they throw, then the domain will catch\nthe error.\n\n</p>\n<p>In order to prevent excessive memory usage, Domain objects themselves\nare not implicitly added as children of the active domain.  If they\nwere, then it would be too easy to prevent request and response objects\nfrom being properly garbage collected.\n\n</p>\n<p>If you <em>want</em> to nest Domain objects as children of a parent Domain,\nthen you must explicitly add them.\n\n</p>\n<p>Implicit binding routes thrown errors and <code>&#39;error&#39;</code> events to the\nDomain&#39;s <code>error</code> event, but does not register the EventEmitter on the\nDomain, so <code>domain.dispose()</code> will not shut down the EventEmitter.\nImplicit binding only takes care of thrown errors and <code>&#39;error&#39;</code> events.\n\n</p>\n"
        },
        {
          "textRaw": "Explicit Binding",
          "name": "Explicit Binding",
          "type": "misc",
          "desc": "<p>Sometimes, the domain in use is not the one that ought to be used for a\nspecific event emitter.  Or, the event emitter could have been created\nin the context of one domain, but ought to instead be bound to some\nother domain.\n\n</p>\n<p>For example, there could be one domain in use for an HTTP server, but\nperhaps we would like to have a separate domain to use for each request.\n\n</p>\n<p>That is possible via explicit binding.\n\n</p>\n<p>For example:\n\n</p>\n<pre><code>// create a top-level domain for the server\nvar serverDomain = domain.create();\n\nserverDomain.run(function() {\n  // server is created in the scope of serverDomain\n  http.createServer(function(req, res) {\n    // req and res are also created in the scope of serverDomain\n    // however, we&#39;d prefer to have a separate domain for each request.\n    // create it first thing, and add req and res to it.\n    var reqd = domain.create();\n    reqd.add(req);\n    reqd.add(res);\n    reqd.on(&#39;error&#39;, function(er) {\n      console.error(&#39;Error&#39;, er, req.url);\n      try {\n        res.writeHead(500);\n        res.end(&#39;Error occurred, sorry.&#39;);\n      } catch (er) {\n        console.error(&#39;Error sending 500&#39;, er, req.url);\n      }\n    });\n  }).listen(1337);\n});</code></pre>\n"
        }
      ],
      "methods": [
        {
          "textRaw": "domain.create()",
          "type": "method",
          "name": "create",
          "signatures": [
            {
              "return": {
                "textRaw": "return: {Domain} ",
                "name": "return",
                "type": "Domain"
              },
              "params": []
            },
            {
              "params": []
            }
          ],
          "desc": "<p>Returns a new Domain object.\n\n</p>\n"
        }
      ],
      "classes": [
        {
          "textRaw": "Class: Domain",
          "type": "class",
          "name": "Domain",
          "desc": "<p>The Domain class encapsulates the functionality of routing errors and\nuncaught exceptions to the active Domain object.\n\n</p>\n<p>Domain is a child class of [EventEmitter][].  To handle the errors that it\ncatches, listen to its <code>error</code> event.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "domain.run(fn)",
              "type": "method",
              "name": "run",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`fn` {Function} ",
                      "name": "fn",
                      "type": "Function"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "fn"
                    }
                  ]
                }
              ],
              "desc": "<p>Run the supplied function in the context of the domain, implicitly\nbinding all event emitters, timers, and lowlevel requests that are\ncreated in that context.\n\n</p>\n<p>This is the most basic way to use a domain.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var d = domain.create();\nd.on(&#39;error&#39;, function(er) {\n  console.error(&#39;Caught error!&#39;, er);\n});\nd.run(function() {\n  process.nextTick(function() {\n    setTimeout(function() { // simulating some various async stuff\n      fs.open(&#39;non-existent file&#39;, &#39;r&#39;, function(er, fd) {\n        if (er) throw er;\n        // proceed...\n      });\n    }, 100);\n  });\n});</code></pre>\n<p>In this example, the <code>d.on(&#39;error&#39;)</code> handler will be triggered, rather\nthan crashing the program.\n\n</p>\n"
            },
            {
              "textRaw": "domain.add(emitter)",
              "type": "method",
              "name": "add",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`emitter` {EventEmitter | Timer} emitter or timer to be added to the domain ",
                      "name": "emitter",
                      "type": "EventEmitter | Timer",
                      "desc": "emitter or timer to be added to the domain"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "emitter"
                    }
                  ]
                }
              ],
              "desc": "<p>Explicitly adds an emitter to the domain.  If any event handlers called by\nthe emitter throw an error, or if the emitter emits an <code>error</code> event, it\nwill be routed to the domain&#39;s <code>error</code> event, just like with implicit\nbinding.\n\n</p>\n<p>This also works with timers that are returned from <code>setInterval</code> and\n<code>setTimeout</code>.  If their callback function throws, it will be caught by\nthe domain &#39;error&#39; handler.\n\n</p>\n<p>If the Timer or EventEmitter was already bound to a domain, it is removed\nfrom that one, and bound to this one instead.\n\n</p>\n"
            },
            {
              "textRaw": "domain.remove(emitter)",
              "type": "method",
              "name": "remove",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`emitter` {EventEmitter | Timer} emitter or timer to be removed from the domain ",
                      "name": "emitter",
                      "type": "EventEmitter | Timer",
                      "desc": "emitter or timer to be removed from the domain"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "emitter"
                    }
                  ]
                }
              ],
              "desc": "<p>The opposite of <code>domain.add(emitter)</code>.  Removes domain handling from the\nspecified emitter.\n\n</p>\n"
            },
            {
              "textRaw": "domain.bind(callback)",
              "type": "method",
              "name": "bind",
              "signatures": [
                {
                  "return": {
                    "textRaw": "return: {Function} The bound function ",
                    "name": "return",
                    "type": "Function",
                    "desc": "The bound function"
                  },
                  "params": [
                    {
                      "textRaw": "`callback` {Function} The callback function ",
                      "name": "callback",
                      "type": "Function",
                      "desc": "The callback function"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "callback"
                    }
                  ]
                }
              ],
              "desc": "<p>The returned function will be a wrapper around the supplied callback\nfunction.  When the returned function is called, any errors that are\nthrown will be routed to the domain&#39;s <code>error</code> event.\n\n</p>\n<h4>Example</h4>\n<pre><code>var d = domain.create();\n\nfunction readSomeFile(filename, cb) {\n  fs.readFile(filename, &#39;utf8&#39;, d.bind(function(er, data) {\n    // if this throws, it will also be passed to the domain\n    return cb(er, data ? JSON.parse(data) : null);\n  }));\n}\n\nd.on(&#39;error&#39;, function(er) {\n  // an error occurred somewhere.\n  // if we throw it now, it will crash the program\n  // with the normal line number and stack message.\n});</code></pre>\n"
            },
            {
              "textRaw": "domain.intercept(callback)",
              "type": "method",
              "name": "intercept",
              "signatures": [
                {
                  "return": {
                    "textRaw": "return: {Function} The intercepted function ",
                    "name": "return",
                    "type": "Function",
                    "desc": "The intercepted function"
                  },
                  "params": [
                    {
                      "textRaw": "`callback` {Function} The callback function ",
                      "name": "callback",
                      "type": "Function",
                      "desc": "The callback function"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "callback"
                    }
                  ]
                }
              ],
              "desc": "<p>This method is almost identical to <code>domain.bind(callback)</code>.  However, in\naddition to catching thrown errors, it will also intercept <code>Error</code>\nobjects sent as the first argument to the function.\n\n</p>\n<p>In this way, the common <code>if (er) return callback(er);</code> pattern can be replaced\nwith a single error handler in a single place.\n\n</p>\n<h4>Example</h4>\n<pre><code>var d = domain.create();\n\nfunction readSomeFile(filename, cb) {\n  fs.readFile(filename, &#39;utf8&#39;, d.intercept(function(data) {\n    // note, the first argument is never passed to the\n    // callback since it is assumed to be the &#39;Error&#39; argument\n    // and thus intercepted by the domain.\n\n    // if this throws, it will also be passed to the domain\n    // so the error-handling logic can be moved to the &#39;error&#39;\n    // event on the domain instead of being repeated throughout\n    // the program.\n    return cb(null, JSON.parse(data));\n  }));\n}\n\nd.on(&#39;error&#39;, function(er) {\n  // an error occurred somewhere.\n  // if we throw it now, it will crash the program\n  // with the normal line number and stack message.\n});</code></pre>\n"
            },
            {
              "textRaw": "domain.enter()",
              "type": "method",
              "name": "enter",
              "desc": "<p>The <code>enter</code> method is plumbing used by the <code>run</code>, <code>bind</code>, and <code>intercept</code>\nmethods to set the active domain. It sets <code>domain.active</code> and <code>process.domain</code>\nto the domain, and implicitly pushes the domain onto the domain stack managed\nby the domain module (see <code>domain.exit()</code> for details on the domain stack). The\ncall to <code>enter</code> delimits the beginning of a chain of asynchronous calls and I/O\noperations bound to a domain.\n\n</p>\n<p>Calling <code>enter</code> changes only the active domain, and does not alter the domain\nitself. <code>Enter</code> and <code>exit</code> can be called an arbitrary number of times on a\nsingle domain.\n\n</p>\n<p>If the domain on which <code>enter</code> is called has been disposed, <code>enter</code> will return\nwithout setting the domain.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "domain.exit()",
              "type": "method",
              "name": "exit",
              "desc": "<p>The <code>exit</code> method exits the current domain, popping it off the domain stack.\nAny time execution is going to switch to the context of a different chain of\nasynchronous calls, it&#39;s important to ensure that the current domain is exited.\nThe call to <code>exit</code> delimits either the end of or an interruption to the chain\nof asynchronous calls and I/O operations bound to a domain.\n\n</p>\n<p>If there are multiple, nested domains bound to the current execution context,\n<code>exit</code> will exit any domains nested within this domain.\n\n</p>\n<p>Calling <code>exit</code> changes only the active domain, and does not alter the domain\nitself. <code>Enter</code> and <code>exit</code> can be called an arbitrary number of times on a\nsingle domain.\n\n</p>\n<p>If the domain on which <code>exit</code> is called has been disposed, <code>exit</code> will return\nwithout exiting the domain.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "domain.dispose()",
              "type": "method",
              "name": "dispose",
              "desc": "<p>The dispose method destroys a domain, and makes a best effort attempt to\nclean up any and all IO that is associated with the domain.  Streams are\naborted, ended, closed, and/or destroyed.  Timers are cleared.\nExplicitly bound callbacks are no longer called.  Any error events that\nare raised as a result of this are ignored.\n\n</p>\n<p>The intention of calling <code>dispose</code> is generally to prevent cascading\nerrors when a critical part of the Domain context is found to be in an\nerror state.\n\n</p>\n<p>Once the domain is disposed the <code>dispose</code> event will emit.\n\n</p>\n<p>Note that IO might still be performed.  However, to the highest degree\npossible, once a domain is disposed, further errors from the emitters in\nthat set will be ignored.  So, even if some remaining actions are still\nin flight, Node.js will not communicate further about them.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ],
          "properties": [
            {
              "textRaw": "`members` {Array} ",
              "name": "members",
              "desc": "<p>An array of timers and event emitters that have been explicitly added\nto the domain.\n\n</p>\n"
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "Domain"
    },
    {
      "textRaw": "Buffer",
      "name": "buffer",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>Pure JavaScript is Unicode friendly but not nice to binary data.  When\ndealing with TCP streams or the file system, it&#39;s necessary to handle octet\nstreams. Node has several strategies for manipulating, creating, and\nconsuming octet streams.\n\n</p>\n<p>Raw data is stored in instances of the <code>Buffer</code> class. A <code>Buffer</code> is similar\nto an array of integers but corresponds to a raw memory allocation outside\nthe V8 heap. A <code>Buffer</code> cannot be resized.\n\n</p>\n<p>The <code>Buffer</code> class is a global, making it very rare that one would need\nto ever <code>require(&#39;buffer&#39;)</code>.\n\n</p>\n<p>Converting between Buffers and JavaScript string objects requires an explicit\nencoding method.  Here are the different string encodings.\n\n</p>\n<ul>\n<li><p><code>&#39;ascii&#39;</code> - for 7 bit ASCII data only.  This encoding method is very fast, and\nwill strip the high bit if set.</p>\n<p>Note that when converting from string to buffer, this encoding converts a null\ncharacter (<code>&#39;\\0&#39;</code> or <code>&#39;\\u0000&#39;</code>) into <code>0x20</code> (character code of a space). If\nyou want to convert a null character into <code>0x00</code>, you should use <code>&#39;utf8&#39;</code>.</p>\n</li>\n<li><p><code>&#39;utf8&#39;</code> - Multibyte encoded Unicode characters. Many web pages and other\ndocument formats use UTF-8.</p>\n</li>\n<li><p><code>&#39;utf16le&#39;</code> - 2 or 4 bytes, little endian encoded Unicode characters.\nSurrogate pairs (U+10000 to U+10FFFF) are supported.</p>\n</li>\n<li><p><code>&#39;ucs2&#39;</code> - Alias of <code>&#39;utf16le&#39;</code>.</p>\n</li>\n<li><p><code>&#39;base64&#39;</code> - Base64 string encoding.</p>\n</li>\n<li><p><code>&#39;binary&#39;</code> - A way of encoding raw binary data into strings by using only\nthe first 8 bits of each character. This encoding method is deprecated and\nshould be avoided in favor of <code>Buffer</code> objects where possible. This encoding\nwill be removed in future versions of Node.</p>\n</li>\n<li><p><code>&#39;hex&#39;</code> - Encode each byte as two hexadecimal characters.</p>\n</li>\n</ul>\n<p>Creating a typed array from a <code>Buffer</code> works with the following caveats:\n\n</p>\n<ol>\n<li><p>The buffer&#39;s memory is copied, not shared.</p>\n</li>\n<li><p>The buffer&#39;s memory is interpreted as an array, not a byte array.  That is,\n<code>new Uint32Array(new Buffer([1,2,3,4]))</code> creates a 4-element <code>Uint32Array</code>\nwith elements <code>[1,2,3,4]</code>, not an <code>Uint32Array</code> with a single element\n<code>[0x1020304]</code> or <code>[0x4030201]</code>.</p>\n</li>\n</ol>\n<p>NOTE: Node.js v0.8 simply retained a reference to the buffer in <code>array.buffer</code>\ninstead of cloning it.\n\n</p>\n<p>While more efficient, it introduces subtle incompatibilities with the typed\narrays specification.  <code>ArrayBuffer#slice()</code> makes a copy of the slice while\n<code>Buffer#slice()</code> creates a view.\n\n</p>\n",
      "classes": [
        {
          "textRaw": "Class: Buffer",
          "type": "class",
          "name": "Buffer",
          "desc": "<p>The Buffer class is a global type for dealing with binary data directly.\nIt can be constructed in a variety of ways.\n\n</p>\n",
          "classMethods": [
            {
              "textRaw": "Class Method: Buffer.isEncoding(encoding)",
              "type": "classMethod",
              "name": "isEncoding",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`encoding` {String} The encoding string to test ",
                      "name": "encoding",
                      "type": "String",
                      "desc": "The encoding string to test"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "encoding"
                    }
                  ]
                }
              ],
              "desc": "<p>Returns true if the <code>encoding</code> is a valid encoding argument, or false\notherwise.\n\n</p>\n"
            },
            {
              "textRaw": "Class Method: Buffer.isBuffer(obj)",
              "type": "classMethod",
              "name": "isBuffer",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Boolean ",
                    "name": "return",
                    "desc": "Boolean"
                  },
                  "params": [
                    {
                      "textRaw": "`obj` Object ",
                      "name": "obj",
                      "desc": "Object"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "obj"
                    }
                  ]
                }
              ],
              "desc": "<p>Tests if <code>obj</code> is a <code>Buffer</code>.\n\n</p>\n"
            },
            {
              "textRaw": "Class Method: Buffer.byteLength(string, [encoding])",
              "type": "classMethod",
              "name": "byteLength",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`string` String ",
                      "name": "string",
                      "desc": "String"
                    },
                    {
                      "textRaw": "`encoding` String, Optional, Default: 'utf8' ",
                      "name": "encoding",
                      "desc": "String, Optional, Default: 'utf8'",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "string"
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Gives the actual byte length of a string. <code>encoding</code> defaults to <code>&#39;utf8&#39;</code>.\nThis is not the same as <code>String.prototype.length</code> since that returns the\nnumber of <em>characters</em> in a string.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>str = &#39;\\u00bd + \\u00bc = \\u00be&#39;;\n\nconsole.log(str + &quot;: &quot; + str.length + &quot; characters, &quot; +\n  Buffer.byteLength(str, &#39;utf8&#39;) + &quot; bytes&quot;);\n\n// Â½ + Â¼ = Â¾: 9 characters, 12 bytes</code></pre>\n"
            },
            {
              "textRaw": "Class Method: Buffer.concat(list, [totalLength])",
              "type": "classMethod",
              "name": "concat",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`list` {Array} List of Buffer objects to concat ",
                      "name": "list",
                      "type": "Array",
                      "desc": "List of Buffer objects to concat"
                    },
                    {
                      "textRaw": "`totalLength` {Number} Total length of the buffers when concatenated ",
                      "name": "totalLength",
                      "type": "Number",
                      "desc": "Total length of the buffers when concatenated",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "list"
                    },
                    {
                      "name": "totalLength",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Returns a buffer which is the result of concatenating all the buffers in\nthe list together.\n\n</p>\n<p>If the list has no items, or if the totalLength is 0, then it returns a\nzero-length buffer.\n\n</p>\n<p>If the list has exactly one item, then the first item of the list is\nreturned.\n\n</p>\n<p>If the list has more than one item, then a new Buffer is created.\n\n</p>\n<p>If totalLength is not provided, it is read from the buffers in the list.\nHowever, this adds an additional loop to the function, so it is faster\nto provide the length explicitly.\n\n</p>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "buf.write(string, [offset], [length], [encoding])",
              "type": "method",
              "name": "write",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`string` String - data to be written to buffer ",
                      "name": "string",
                      "desc": "String - data to be written to buffer"
                    },
                    {
                      "textRaw": "`offset` Number, Optional, Default: 0 ",
                      "name": "offset",
                      "desc": "Number, Optional, Default: 0",
                      "optional": true
                    },
                    {
                      "textRaw": "`length` Number, Optional, Default: `buffer.length - offset` ",
                      "name": "length",
                      "desc": "Number, Optional, Default: `buffer.length - offset`",
                      "optional": true
                    },
                    {
                      "textRaw": "`encoding` String, Optional, Default: 'utf8' ",
                      "name": "encoding",
                      "desc": "String, Optional, Default: 'utf8'",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "string"
                    },
                    {
                      "name": "offset",
                      "optional": true
                    },
                    {
                      "name": "length",
                      "optional": true
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>string</code> to the buffer at <code>offset</code> using the given encoding.\n<code>offset</code> defaults to <code>0</code>, <code>encoding</code> defaults to <code>&#39;utf8&#39;</code>. <code>length</code> is\nthe number of bytes to write. Returns number of octets written. If <code>buffer</code> did\nnot contain enough space to fit the entire string, it will write a partial\namount of the string. <code>length</code> defaults to <code>buffer.length - offset</code>.\nThe method will not write partial characters.\n\n</p>\n<pre><code>buf = new Buffer(256);\nlen = buf.write(&#39;\\u00bd + \\u00bc = \\u00be&#39;, 0);\nconsole.log(len + &quot; bytes: &quot; + buf.toString(&#39;utf8&#39;, 0, len));</code></pre>\n<p>The number of characters written (which may be different than the number of\nbytes written) is set in <code>Buffer._charsWritten</code> and will be overwritten the\nnext time <code>buf.write()</code> is called.\n\n\n</p>\n"
            },
            {
              "textRaw": "buf.toString([encoding], [start], [end])",
              "type": "method",
              "name": "toString",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`encoding` String, Optional, Default: 'utf8' ",
                      "name": "encoding",
                      "desc": "String, Optional, Default: 'utf8'",
                      "optional": true
                    },
                    {
                      "textRaw": "`start` Number, Optional, Default: 0 ",
                      "name": "start",
                      "desc": "Number, Optional, Default: 0",
                      "optional": true
                    },
                    {
                      "textRaw": "`end` Number, Optional, Default: `buffer.length` ",
                      "name": "end",
                      "desc": "Number, Optional, Default: `buffer.length`",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    },
                    {
                      "name": "start",
                      "optional": true
                    },
                    {
                      "name": "end",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Decodes and returns a string from buffer data encoded with <code>encoding</code>\n(defaults to <code>&#39;utf8&#39;</code>) beginning at <code>start</code> (defaults to <code>0</code>) and ending at\n<code>end</code> (defaults to <code>buffer.length</code>).\n\n</p>\n<p>See <code>buffer.write()</code> example, above.\n\n\n</p>\n"
            },
            {
              "textRaw": "buf.toJSON()",
              "type": "method",
              "name": "toJSON",
              "desc": "<p>Returns a JSON-representation of the Buffer instance, which is identical to the\noutput for JSON Arrays. <code>JSON.stringify</code> implicitly calls this function when\nstringifying a Buffer instance.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(&#39;test&#39;);\nvar json = JSON.stringify(buf);\n\nconsole.log(json);\n// &#39;[116,101,115,116]&#39;\n\nvar copy = new Buffer(JSON.parse(json));\n\nconsole.log(copy);\n// &lt;Buffer 74 65 73 74&gt;</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])",
              "type": "method",
              "name": "copy",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`targetBuffer` Buffer object - Buffer to copy into ",
                      "name": "targetBuffer",
                      "desc": "Buffer object - Buffer to copy into"
                    },
                    {
                      "textRaw": "`targetStart` Number, Optional, Default: 0 ",
                      "name": "targetStart",
                      "desc": "Number, Optional, Default: 0",
                      "optional": true
                    },
                    {
                      "textRaw": "`sourceStart` Number, Optional, Default: 0 ",
                      "name": "sourceStart",
                      "desc": "Number, Optional, Default: 0",
                      "optional": true
                    },
                    {
                      "textRaw": "`sourceEnd` Number, Optional, Default: `buffer.length` ",
                      "name": "sourceEnd",
                      "desc": "Number, Optional, Default: `buffer.length`",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "targetBuffer"
                    },
                    {
                      "name": "targetStart",
                      "optional": true
                    },
                    {
                      "name": "sourceStart",
                      "optional": true
                    },
                    {
                      "name": "sourceEnd",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Does copy between buffers. The source and target regions can be overlapped.\n<code>targetStart</code> and <code>sourceStart</code> default to <code>0</code>.\n<code>sourceEnd</code> defaults to <code>buffer.length</code>.\n\n</p>\n<p>All values passed that are <code>undefined</code>/<code>NaN</code> or are out of bounds are set equal\nto their respective defaults.\n\n</p>\n<p>Example: build two Buffers, then copy <code>buf1</code> from byte 16 through byte 19\ninto <code>buf2</code>, starting at the 8th byte in <code>buf2</code>.\n\n</p>\n<pre><code>buf1 = new Buffer(26);\nbuf2 = new Buffer(26);\n\nfor (var i = 0 ; i &lt; 26 ; i++) {\n  buf1[i] = i + 97; // 97 is ASCII a\n  buf2[i] = 33; // ASCII !\n}\n\nbuf1.copy(buf2, 8, 16, 20);\nconsole.log(buf2.toString(&#39;ascii&#39;, 0, 25));\n\n// !!!!!!!!qrst!!!!!!!!!!!!!</code></pre>\n"
            },
            {
              "textRaw": "buf.slice([start], [end])",
              "type": "method",
              "name": "slice",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`start` Number, Optional, Default: 0 ",
                      "name": "start",
                      "desc": "Number, Optional, Default: 0",
                      "optional": true
                    },
                    {
                      "textRaw": "`end` Number, Optional, Default: `buffer.length` ",
                      "name": "end",
                      "desc": "Number, Optional, Default: `buffer.length`",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "start",
                      "optional": true
                    },
                    {
                      "name": "end",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Returns a new buffer which references the same memory as the old, but offset\nand cropped by the <code>start</code> (defaults to <code>0</code>) and <code>end</code> (defaults to\n<code>buffer.length</code>) indexes.  Negative indexes start from the end of the buffer.\n\n</p>\n<p><strong>Modifying the new buffer slice will modify memory in the original buffer!</strong>\n\n</p>\n<p>Example: build a Buffer with the ASCII alphabet, take a slice, then modify one\nbyte from the original Buffer.\n\n</p>\n<pre><code>var buf1 = new Buffer(26);\n\nfor (var i = 0 ; i &lt; 26 ; i++) {\n  buf1[i] = i + 97; // 97 is ASCII a\n}\n\nvar buf2 = buf1.slice(0, 3);\nconsole.log(buf2.toString(&#39;ascii&#39;, 0, buf2.length));\nbuf1[0] = 33;\nconsole.log(buf2.toString(&#39;ascii&#39;, 0, buf2.length));\n\n// abc\n// !bc</code></pre>\n"
            },
            {
              "textRaw": "buf.readUInt8(offset, [noAssert])",
              "type": "method",
              "name": "readUInt8",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads an unsigned 8 bit integer from the buffer at the specified offset.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nfor (ii = 0; ii &lt; buf.length; ii++) {\n  console.log(buf.readUInt8(ii));\n}\n\n// 0x3\n// 0x4\n// 0x23\n// 0x42</code></pre>\n"
            },
            {
              "textRaw": "buf.readUInt16LE(offset, [noAssert])",
              "type": "method",
              "name": "readUInt16LE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads an unsigned 16 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nconsole.log(buf.readUInt16BE(0));\nconsole.log(buf.readUInt16LE(0));\nconsole.log(buf.readUInt16BE(1));\nconsole.log(buf.readUInt16LE(1));\nconsole.log(buf.readUInt16BE(2));\nconsole.log(buf.readUInt16LE(2));\n\n// 0x0304\n// 0x0403\n// 0x0423\n// 0x2304\n// 0x2342\n// 0x4223</code></pre>\n"
            },
            {
              "textRaw": "buf.readUInt16BE(offset, [noAssert])",
              "type": "method",
              "name": "readUInt16BE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads an unsigned 16 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nconsole.log(buf.readUInt16BE(0));\nconsole.log(buf.readUInt16LE(0));\nconsole.log(buf.readUInt16BE(1));\nconsole.log(buf.readUInt16LE(1));\nconsole.log(buf.readUInt16BE(2));\nconsole.log(buf.readUInt16LE(2));\n\n// 0x0304\n// 0x0403\n// 0x0423\n// 0x2304\n// 0x2342\n// 0x4223</code></pre>\n"
            },
            {
              "textRaw": "buf.readUInt32LE(offset, [noAssert])",
              "type": "method",
              "name": "readUInt32LE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads an unsigned 32 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nconsole.log(buf.readUInt32BE(0));\nconsole.log(buf.readUInt32LE(0));\n\n// 0x03042342\n// 0x42230403</code></pre>\n"
            },
            {
              "textRaw": "buf.readUInt32BE(offset, [noAssert])",
              "type": "method",
              "name": "readUInt32BE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads an unsigned 32 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\n\nbuf[0] = 0x3;\nbuf[1] = 0x4;\nbuf[2] = 0x23;\nbuf[3] = 0x42;\n\nconsole.log(buf.readUInt32BE(0));\nconsole.log(buf.readUInt32LE(0));\n\n// 0x03042342\n// 0x42230403</code></pre>\n"
            },
            {
              "textRaw": "buf.readInt8(offset, [noAssert])",
              "type": "method",
              "name": "readInt8",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a signed 8 bit integer from the buffer at the specified offset.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt8</code>, except buffer contents are treated as two&#39;s\ncomplement signed values.\n\n</p>\n"
            },
            {
              "textRaw": "buf.readInt16LE(offset, [noAssert])",
              "type": "method",
              "name": "readInt16LE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a signed 16 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt16*</code>, except buffer contents are treated as two&#39;s\ncomplement signed values.\n\n</p>\n"
            },
            {
              "textRaw": "buf.readInt16BE(offset, [noAssert])",
              "type": "method",
              "name": "readInt16BE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a signed 16 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt16*</code>, except buffer contents are treated as two&#39;s\ncomplement signed values.\n\n</p>\n"
            },
            {
              "textRaw": "buf.readInt32LE(offset, [noAssert])",
              "type": "method",
              "name": "readInt32LE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a signed 32 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt32*</code>, except buffer contents are treated as two&#39;s\ncomplement signed values.\n\n</p>\n"
            },
            {
              "textRaw": "buf.readInt32BE(offset, [noAssert])",
              "type": "method",
              "name": "readInt32BE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a signed 32 bit integer from the buffer at the specified offset with\nspecified endian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.readUInt32*</code>, except buffer contents are treated as two&#39;s\ncomplement signed values.\n\n</p>\n"
            },
            {
              "textRaw": "buf.readFloatLE(offset, [noAssert])",
              "type": "method",
              "name": "readFloatLE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a 32 bit float from the buffer at the specified offset with specified\nendian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\n\nbuf[0] = 0x00;\nbuf[1] = 0x00;\nbuf[2] = 0x80;\nbuf[3] = 0x3f;\n\nconsole.log(buf.readFloatLE(0));\n\n// 0x01</code></pre>\n"
            },
            {
              "textRaw": "buf.readFloatBE(offset, [noAssert])",
              "type": "method",
              "name": "readFloatBE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a 32 bit float from the buffer at the specified offset with specified\nendian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\n\nbuf[0] = 0x00;\nbuf[1] = 0x00;\nbuf[2] = 0x80;\nbuf[3] = 0x3f;\n\nconsole.log(buf.readFloatLE(0));\n\n// 0x01</code></pre>\n"
            },
            {
              "textRaw": "buf.readDoubleLE(offset, [noAssert])",
              "type": "method",
              "name": "readDoubleLE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a 64 bit double from the buffer at the specified offset with specified\nendian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(8);\n\nbuf[0] = 0x55;\nbuf[1] = 0x55;\nbuf[2] = 0x55;\nbuf[3] = 0x55;\nbuf[4] = 0x55;\nbuf[5] = 0x55;\nbuf[6] = 0xd5;\nbuf[7] = 0x3f;\n\nconsole.log(buf.readDoubleLE(0));\n\n// 0.3333333333333333</code></pre>\n"
            },
            {
              "textRaw": "buf.readDoubleBE(offset, [noAssert])",
              "type": "method",
              "name": "readDoubleBE",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return: Number ",
                    "name": "return",
                    "desc": "Number"
                  },
                  "params": [
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Reads a 64 bit double from the buffer at the specified offset with specified\nendian format.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>offset</code>. This means that <code>offset</code>\nmay be beyond the end of the buffer. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(8);\n\nbuf[0] = 0x55;\nbuf[1] = 0x55;\nbuf[2] = 0x55;\nbuf[3] = 0x55;\nbuf[4] = 0x55;\nbuf[5] = 0x55;\nbuf[6] = 0xd5;\nbuf[7] = 0x3f;\n\nconsole.log(buf.readDoubleLE(0));\n\n// 0.3333333333333333</code></pre>\n"
            },
            {
              "textRaw": "buf.writeUInt8(value, offset, [noAssert])",
              "type": "method",
              "name": "writeUInt8",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset. Note, <code>value</code> must be a\nvalid unsigned 8 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\nbuf.writeUInt8(0x3, 0);\nbuf.writeUInt8(0x4, 1);\nbuf.writeUInt8(0x23, 2);\nbuf.writeUInt8(0x42, 3);\n\nconsole.log(buf);\n\n// &lt;Buffer 03 04 23 42&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.writeUInt16LE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeUInt16LE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid unsigned 16 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\nbuf.writeUInt16BE(0xdead, 0);\nbuf.writeUInt16BE(0xbeef, 2);\n\nconsole.log(buf);\n\nbuf.writeUInt16LE(0xdead, 0);\nbuf.writeUInt16LE(0xbeef, 2);\n\nconsole.log(buf);\n\n// &lt;Buffer de ad be ef&gt;\n// &lt;Buffer ad de ef be&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.writeUInt16BE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeUInt16BE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid unsigned 16 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\nbuf.writeUInt16BE(0xdead, 0);\nbuf.writeUInt16BE(0xbeef, 2);\n\nconsole.log(buf);\n\nbuf.writeUInt16LE(0xdead, 0);\nbuf.writeUInt16LE(0xbeef, 2);\n\nconsole.log(buf);\n\n// &lt;Buffer de ad be ef&gt;\n// &lt;Buffer ad de ef be&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.writeUInt32LE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeUInt32LE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid unsigned 32 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\nbuf.writeUInt32BE(0xfeedface, 0);\n\nconsole.log(buf);\n\nbuf.writeUInt32LE(0xfeedface, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer fe ed fa ce&gt;\n// &lt;Buffer ce fa ed fe&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.writeUInt32BE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeUInt32BE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid unsigned 32 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\nbuf.writeUInt32BE(0xfeedface, 0);\n\nconsole.log(buf);\n\nbuf.writeUInt32LE(0xfeedface, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer fe ed fa ce&gt;\n// &lt;Buffer ce fa ed fe&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.writeInt8(value, offset, [noAssert])",
              "type": "method",
              "name": "writeInt8",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset. Note, <code>value</code> must be a\nvalid signed 8 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt8</code>, except value is written out as a two&#39;s complement\nsigned integer into <code>buffer</code>.\n\n</p>\n"
            },
            {
              "textRaw": "buf.writeInt16LE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeInt16LE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid signed 16 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt16*</code>, except value is written out as a two&#39;s\ncomplement signed integer into <code>buffer</code>.\n\n</p>\n"
            },
            {
              "textRaw": "buf.writeInt16BE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeInt16BE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid signed 16 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt16*</code>, except value is written out as a two&#39;s\ncomplement signed integer into <code>buffer</code>.\n\n</p>\n"
            },
            {
              "textRaw": "buf.writeInt32LE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeInt32LE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid signed 32 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt32*</code>, except value is written out as a two&#39;s\ncomplement signed integer into <code>buffer</code>.\n\n</p>\n"
            },
            {
              "textRaw": "buf.writeInt32BE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeInt32BE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid signed 32 bit integer.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Works as <code>buffer.writeUInt32*</code>, except value is written out as a two&#39;s\ncomplement signed integer into <code>buffer</code>.\n\n</p>\n"
            },
            {
              "textRaw": "buf.writeFloatLE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeFloatLE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, behavior is unspecified if <code>value</code> is not a 32 bit float.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\nbuf.writeFloatBE(0xcafebabe, 0);\n\nconsole.log(buf);\n\nbuf.writeFloatLE(0xcafebabe, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer 4f 4a fe bb&gt;\n// &lt;Buffer bb fe 4a 4f&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.writeFloatBE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeFloatBE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, behavior is unspecified if <code>value</code> is not a 32 bit float.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(4);\nbuf.writeFloatBE(0xcafebabe, 0);\n\nconsole.log(buf);\n\nbuf.writeFloatLE(0xcafebabe, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer 4f 4a fe bb&gt;\n// &lt;Buffer bb fe 4a 4f&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.writeDoubleLE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeDoubleLE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid 64 bit double.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(8);\nbuf.writeDoubleBE(0xdeadbeefcafebabe, 0);\n\nconsole.log(buf);\n\nbuf.writeDoubleLE(0xdeadbeefcafebabe, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer 43 eb d5 b7 dd f9 5f d7&gt;\n// &lt;Buffer d7 5f f9 dd b7 d5 eb 43&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.writeDoubleBE(value, offset, [noAssert])",
              "type": "method",
              "name": "writeDoubleBE",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` Number ",
                      "name": "value",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`offset` Number ",
                      "name": "offset",
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`noAssert` Boolean, Optional, Default: false ",
                      "name": "noAssert",
                      "desc": "Boolean, Optional, Default: false",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "noAssert",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Writes <code>value</code> to the buffer at the specified offset with specified endian\nformat. Note, <code>value</code> must be a valid 64 bit double.\n\n</p>\n<p>Set <code>noAssert</code> to true to skip validation of <code>value</code> and <code>offset</code>. This means\nthat <code>value</code> may be too large for the specific function and <code>offset</code> may be\nbeyond the end of the buffer leading to the values being silently dropped. This\nshould not be used unless you are certain of correctness. Defaults to <code>false</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var buf = new Buffer(8);\nbuf.writeDoubleBE(0xdeadbeefcafebabe, 0);\n\nconsole.log(buf);\n\nbuf.writeDoubleLE(0xdeadbeefcafebabe, 0);\n\nconsole.log(buf);\n\n// &lt;Buffer 43 eb d5 b7 dd f9 5f d7&gt;\n// &lt;Buffer d7 5f f9 dd b7 d5 eb 43&gt;</code></pre>\n"
            },
            {
              "textRaw": "buf.fill(value, [offset], [end])",
              "type": "method",
              "name": "fill",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`value` ",
                      "name": "value"
                    },
                    {
                      "textRaw": "`offset` Number, Optional ",
                      "name": "offset",
                      "optional": true,
                      "desc": "Number"
                    },
                    {
                      "textRaw": "`end` Number, Optional ",
                      "name": "end",
                      "optional": true,
                      "desc": "Number"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "value"
                    },
                    {
                      "name": "offset",
                      "optional": true
                    },
                    {
                      "name": "end",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Fills the buffer with the specified value. If the <code>offset</code> (defaults to <code>0</code>)\nand <code>end</code> (defaults to <code>buffer.length</code>) are not given it will fill the entire\nbuffer.\n\n</p>\n<pre><code>var b = new Buffer(50);\nb.fill(&quot;h&quot;);</code></pre>\n"
            }
          ],
          "properties": [
            {
              "textRaw": "buf[index]",
              "name": "[index]",
              "desc": "<p>Get and set the octet at <code>index</code>. The values refer to individual bytes,\nso the legal range is between <code>0x00</code> and <code>0xFF</code> hex or <code>0</code> and <code>255</code>.\n\n</p>\n<p>Example: copy an ASCII string into a buffer, one byte at a time:\n\n</p>\n<pre><code>str = &quot;node.js&quot;;\nbuf = new Buffer(str.length);\n\nfor (var i = 0; i &lt; str.length ; i++) {\n  buf[i] = str.charCodeAt(i);\n}\n\nconsole.log(buf);\n\n// node.js</code></pre>\n"
            },
            {
              "textRaw": "`length` Number ",
              "name": "length",
              "desc": "<p>The size of the buffer in bytes.  Note that this is not necessarily the size\nof the contents. <code>length</code> refers to the amount of memory allocated for the\nbuffer object.  It does not change when the contents of the buffer are changed.\n\n</p>\n<pre><code>buf = new Buffer(1234);\n\nconsole.log(buf.length);\nbuf.write(&quot;some string&quot;, 0, &quot;ascii&quot;);\nconsole.log(buf.length);\n\n// 1234\n// 1234</code></pre>\n",
              "shortDesc": "Number"
            }
          ],
          "signatures": [
            {
              "params": [
                {
                  "textRaw": "`size` Number ",
                  "name": "size",
                  "desc": "Number"
                }
              ],
              "desc": "<p>Allocates a new buffer of <code>size</code> octets.\n\n</p>\n"
            },
            {
              "params": [
                {
                  "name": "size"
                }
              ],
              "desc": "<p>Allocates a new buffer of <code>size</code> octets.\n\n</p>\n"
            },
            {
              "params": [
                {
                  "textRaw": "`array` Array ",
                  "name": "array",
                  "desc": "Array"
                }
              ],
              "desc": "<p>Allocates a new buffer using an <code>array</code> of octets.\n\n</p>\n"
            },
            {
              "params": [
                {
                  "name": "array"
                }
              ],
              "desc": "<p>Allocates a new buffer using an <code>array</code> of octets.\n\n</p>\n"
            },
            {
              "params": [
                {
                  "textRaw": "`str` String - string to encode. ",
                  "name": "str",
                  "desc": "String - string to encode."
                },
                {
                  "textRaw": "`encoding` String - encoding to use, Optional. ",
                  "name": "encoding",
                  "desc": "String - encoding to use, Optional.",
                  "optional": true
                }
              ],
              "desc": "<p>Allocates a new buffer containing the given <code>str</code>.\n<code>encoding</code> defaults to <code>&#39;utf8&#39;</code>.\n\n</p>\n"
            },
            {
              "params": [
                {
                  "name": "str"
                },
                {
                  "name": "encoding",
                  "optional": true
                }
              ],
              "desc": "<p>Allocates a new buffer containing the given <code>str</code>.\n<code>encoding</code> defaults to <code>&#39;utf8&#39;</code>.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: SlowBuffer",
          "type": "class",
          "name": "SlowBuffer",
          "desc": "<p>This class is primarily for internal use.  JavaScript programs should\nuse Buffer instead of using SlowBuffer.\n\n</p>\n<p>In order to avoid the overhead of allocating many C++ Buffer objects for\nsmall blocks of memory in the lifetime of a server, Node allocates memory\nin 8Kb (8192 byte) chunks.  If a buffer is smaller than this size, then it\nwill be backed by a parent SlowBuffer object.  If it is larger than this,\nthen Node will allocate a SlowBuffer slab for it directly.\n\n</p>\n"
        }
      ],
      "properties": [
        {
          "textRaw": "`INSPECT_MAX_BYTES` Number, Default: 50 ",
          "name": "INSPECT_MAX_BYTES",
          "desc": "<p>How many bytes will be returned when <code>buffer.inspect()</code> is called. This can\nbe overridden by user modules.\n\n</p>\n<p>Note that this is a property on the buffer module returned by\n<code>require(&#39;buffer&#39;)</code>, not on the Buffer global, or a buffer instance.\n\n</p>\n",
          "shortDesc": "Number, Default: 50"
        }
      ],
      "type": "module",
      "displayName": "Buffer"
    },
    {
      "textRaw": "Stream",
      "name": "stream",
      "stability": 2,
      "stabilityText": "Unstable",
      "desc": "<p>A stream is an abstract interface implemented by various objects in\nNode.  For example a <a href=\"http.html#http_http_incomingmessage\">request to an HTTP\nserver</a> is a stream, as is\n[stdout][]. Streams are readable, writable, or both. All streams are\ninstances of [EventEmitter][]\n\n</p>\n<p>You can load the Stream base classes by doing <code>require(&#39;stream&#39;)</code>.\nThere are base classes provided for [Readable][] streams, [Writable][]\nstreams, [Duplex][] streams, and [Transform][] streams.\n\n</p>\n<p>This document is split up into 3 sections.  The first explains the\nparts of the API that you need to be aware of to use streams in your\nprograms.  If you never implement a streaming API yourself, you can\nstop there.\n\n</p>\n<p>The second section explains the parts of the API that you need to use\nif you implement your own custom streams yourself.  The API is\ndesigned to make this easy for you to do.\n\n</p>\n<p>The third section goes into more depth about how streams work,\nincluding some of the internal mechanisms and functions that you\nshould probably not modify unless you definitely know what you are\ndoing.\n\n\n</p>\n",
      "classes": [
        {
          "textRaw": "Class: stream.Readable",
          "type": "class",
          "name": "stream.Readable",
          "desc": "<p>The Readable stream interface is the abstraction for a <em>source</em> of\ndata that you are reading from.  In other words, data comes <em>out</em> of a\nReadable stream.\n\n</p>\n<p>A Readable stream will not start emitting data until you indicate that\nyou are ready to receive it.\n\n</p>\n<p>Readable streams have two &quot;modes&quot;: a <strong>flowing mode</strong> and a <strong>non-flowing\nmode</strong>.  When in flowing mode, data is read from the underlying system\nand provided to your program as fast as possible.  In non-flowing\nmode, you must explicitly call <code>stream.read()</code> to get chunks of data\nout.\n\n</p>\n<p>Examples of readable streams include:\n\n</p>\n<ul>\n<li><a href=\"http.html#http_http_incomingmessage\">http responses, on the client</a></li>\n<li><a href=\"http.html#http_http_incomingmessage\">http requests, on the server</a></li>\n<li><a href=\"fs.html#fs_class_fs_readstream\">fs read streams</a></li>\n<li>[zlib streams][]</li>\n<li>[crypto streams][]</li>\n<li>[tcp sockets][]</li>\n<li>[child process stdout and stderr][]</li>\n<li>[process.stdin][]</li>\n</ul>\n",
          "events": [
            {
              "textRaw": "Event: 'readable'",
              "type": "event",
              "name": "readable",
              "desc": "<p>When a chunk of data can be read from the stream, it will emit a\n<code>&#39;readable&#39;</code> event.\n\n</p>\n<p>In some cases, listening for a <code>&#39;readable&#39;</code> event will cause some data\nto be read into the internal buffer from the underlying system, if it\nhadn&#39;t already.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;readable&#39;, function() {\n  // there is some data to read now\n})</code></pre>\n<p>Once the internal buffer is drained, a <code>readable</code> event will fire\nagain when more data is available.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'data'",
              "type": "event",
              "name": "data",
              "params": [],
              "desc": "<p>If you attach a <code>data</code> event listener, then it will switch the stream\ninto flowing mode, and data will be passed to your handler as soon as\nit is available.\n\n</p>\n<p>If you just want to get all the data out of the stream as fast as\npossible, this is the best way to do so.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;data&#39;, function(chunk) {\n  console.log(&#39;got %d bytes of data&#39;, chunk.length);\n})</code></pre>\n"
            },
            {
              "textRaw": "Event: 'end'",
              "type": "event",
              "name": "end",
              "desc": "<p>This event fires when there will be no more data to read.\n\n</p>\n<p>Note that the <code>end</code> event <strong>will not fire</strong> unless the data is\ncompletely consumed.  This can be done by switching into flowing mode,\nor by calling <code>read()</code> repeatedly until you get to the end.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;data&#39;, function(chunk) {\n  console.log(&#39;got %d bytes of data&#39;, chunk.length);\n})\nreadable.on(&#39;end&#39;, function() {\n  console.log(&#39;there will be no more data.&#39;);\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "desc": "<p>Emitted when the underlying resource (for example, the backing file\ndescriptor) has been closed. Not all streams will emit this.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "params": [],
              "desc": "<p>Emitted if there was an error receiving data.\n\n</p>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "readable.read([size])",
              "type": "method",
              "name": "read",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Return {String | Buffer | null} ",
                    "name": "return",
                    "type": "String | Buffer | null"
                  },
                  "params": [
                    {
                      "textRaw": "`size` {Number} Optional argument to specify how much data to read. ",
                      "name": "size",
                      "type": "Number",
                      "desc": "Optional argument to specify how much data to read.",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "size",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>The <code>read()</code> method pulls some data out of the internal buffer and\nreturns it.  If there is no data available, then it will return\n<code>null</code>.\n\n</p>\n<p>If you pass in a <code>size</code> argument, then it will return that many\nbytes.  If <code>size</code> bytes are not available, then it will return <code>null</code>.\n\n</p>\n<p>If you do not specify a <code>size</code> argument, then it will return all the\ndata in the internal buffer.\n\n</p>\n<p>This method should only be called in non-flowing mode.  In\nflowing-mode, this method is called automatically until the internal\nbuffer is drained.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;readable&#39;, function() {\n  var chunk;\n  while (null !== (chunk = readable.read())) {\n    console.log(&#39;got %d bytes of data&#39;, chunk.length);\n  }\n});</code></pre>\n"
            },
            {
              "textRaw": "readable.setEncoding(encoding)",
              "type": "method",
              "name": "setEncoding",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`encoding` {String} The encoding to use. ",
                      "name": "encoding",
                      "type": "String",
                      "desc": "The encoding to use."
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "encoding"
                    }
                  ]
                }
              ],
              "desc": "<p>Call this function to cause the stream to return strings of the\nspecified encoding instead of Buffer objects.  For example, if you do\n<code>readable.setEncoding(&#39;utf8&#39;)</code>, then the output data will be\ninterpreted as UTF-8 data, and returned as strings.  If you do\n<code>readable.setEncoding(&#39;hex&#39;)</code>, then the data will be encoded in\nhexadecimal string format.\n\n</p>\n<p>This properly handles multi-byte characters that would otherwise be\npotentially mangled if you simply pulled the Buffers directly and\ncalled <code>buf.toString(encoding)</code> on them.  If you want to read the data\nas strings, always use this method.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.setEncoding(&#39;utf8&#39;);\nreadable.on(&#39;data&#39;, function(chunk) {\n  assert.equal(typeof chunk, &#39;string&#39;);\n  console.log(&#39;got %d characters of string data&#39;, chunk.length);\n})</code></pre>\n"
            },
            {
              "textRaw": "readable.resume()",
              "type": "method",
              "name": "resume",
              "desc": "<p>This method will cause the readable stream to resume emitting <code>data</code>\nevents.\n\n</p>\n<p>This method will switch the stream into flowing-mode.  If you do <em>not</em>\nwant to consume the data from a stream, but you <em>do</em> want to get to\nits <code>end</code> event, you can call <code>readable.resume()</code> to open the flow of\ndata.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.resume();\nreadable.on(&#39;end&#39;, function(chunk) {\n  console.log(&#39;got to the end, but did not read anything&#39;);\n})</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "readable.pause()",
              "type": "method",
              "name": "pause",
              "desc": "<p>This method will cause a stream in flowing-mode to stop emitting\n<code>data</code> events.  Any data that becomes available will remain in the\ninternal buffer.\n\n</p>\n<p>This method is only relevant in flowing mode.  When called on a\nnon-flowing stream, it will switch into flowing mode, but remain\npaused.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;data&#39;, function(chunk) {\n  console.log(&#39;got %d bytes of data&#39;, chunk.length);\n  readable.pause();\n  console.log(&#39;there will be no more data for 1 second&#39;);\n  setTimeout(function() {\n    console.log(&#39;now data will start flowing again&#39;);\n    readable.resume();\n  }, 1000);\n})</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "readable.pipe(destination, [options])",
              "type": "method",
              "name": "pipe",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`destination` {[Writable][] Stream} The destination for writing data ",
                      "name": "destination",
                      "type": "[Writable][] Stream",
                      "desc": "The destination for writing data"
                    },
                    {
                      "textRaw": "`options` {Object} Pipe options ",
                      "options": [
                        {
                          "textRaw": "`end` {Boolean} End the writer when the reader ends. Default = `true` ",
                          "name": "end",
                          "type": "Boolean",
                          "desc": "End the writer when the reader ends. Default = `true`"
                        }
                      ],
                      "name": "options",
                      "type": "Object",
                      "desc": "Pipe options",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "destination"
                    },
                    {
                      "name": "options",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>This method pulls all the data out of a readable stream, and writes it\nto the supplied destination, automatically managing the flow so that\nthe destination is not overwhelmed by a fast readable stream.\n\n</p>\n<p>Multiple destinations can be piped to safely.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nvar writable = fs.createWriteStream(&#39;file.txt&#39;);\n// All the data from readable goes into &#39;file.txt&#39;\nreadable.pipe(writable);</code></pre>\n<p>This function returns the destination stream, so you can set up pipe\nchains like so:\n\n</p>\n<pre><code class=\"javascript\">var r = fs.createReadStream(&#39;file.txt&#39;);\nvar z = zlib.createGzip();\nvar w = fs.createWriteStream(&#39;file.txt.gz&#39;);\nr.pipe(z).pipe(w);</code></pre>\n<p>For example, emulating the Unix <code>cat</code> command:\n\n</p>\n<pre><code class=\"javascript\">process.stdin.pipe(process.stdout);</code></pre>\n<p>By default [<code>end()</code>][] is called on the destination when the source stream\nemits <code>end</code>, so that <code>destination</code> is no longer writable. Pass <code>{ end:\nfalse }</code> as <code>options</code> to keep the destination stream open.\n\n</p>\n<p>This keeps <code>writer</code> open so that &quot;Goodbye&quot; can be written at the\nend.\n\n</p>\n<pre><code class=\"javascript\">reader.pipe(writer, { end: false });\nreader.on(&#39;end&#39;, function() {\n  writer.end(&#39;Goodbye\\n&#39;);\n});</code></pre>\n<p>Note that <code>process.stderr</code> and <code>process.stdout</code> are never closed until\nthe process exits, regardless of the specified options.\n\n</p>\n"
            },
            {
              "textRaw": "readable.unpipe([destination])",
              "type": "method",
              "name": "unpipe",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`destination` {[Writable][] Stream} Optional specific stream to unpipe ",
                      "name": "destination",
                      "type": "[Writable][] Stream",
                      "desc": "Optional specific stream to unpipe",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "destination",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>This method will remove the hooks set up for a previous <code>pipe()</code> call.\n\n</p>\n<p>If the destination is not specified, then all pipes are removed.\n\n</p>\n<p>If the destination is specified, but no pipe is set up for it, then\nthis is a no-op.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nvar writable = fs.createWriteStream(&#39;file.txt&#39;);\n// All the data from readable goes into &#39;file.txt&#39;,\n// but only for the first second\nreadable.pipe(writable);\nsetTimeout(function() {\n  console.log(&#39;stop writing to file.txt&#39;);\n  readable.unpipe(writable);\n  console.log(&#39;manually close the file stream&#39;);\n  writable.end();\n}, 1000);</code></pre>\n"
            },
            {
              "textRaw": "readable.unshift(chunk)",
              "type": "method",
              "name": "unshift",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`chunk` {Buffer | String} Chunk of data to unshift onto the read queue ",
                      "name": "chunk",
                      "type": "Buffer | String",
                      "desc": "Chunk of data to unshift onto the read queue"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "chunk"
                    }
                  ]
                }
              ],
              "desc": "<p>This is useful in certain cases where a stream is being consumed by a\nparser, which needs to &quot;un-consume&quot; some data that it has\noptimistically pulled out of the source, so that the stream can be\npassed on to some other party.\n\n</p>\n<p>If you find that you must often call <code>stream.unshift(chunk)</code> in your\nprograms, consider implementing a [Transform][] stream instead.  (See API\nfor Stream Implementors, below.)\n\n</p>\n<pre><code class=\"javascript\">// Pull off a header delimited by \\n\\n\n// use unshift() if we get too much\n// Call the callback with (error, header, stream)\nvar StringDecoder = require(&#39;string_decoder&#39;).StringDecoder;\nfunction parseHeader(stream, callback) {\n  stream.on(&#39;error&#39;, callback);\n  stream.on(&#39;readable&#39;, onReadable);\n  var decoder = new StringDecoder(&#39;utf8&#39;);\n  var header = &#39;&#39;;\n  function onReadable() {\n    var chunk;\n    while (null !== (chunk = stream.read())) {\n      var str = decoder.write(chunk);\n      if (str.match(/\\n\\n/)) {\n        // found the header boundary\n        var split = str.split(/\\n\\n/);\n        header += split.shift();\n        var remaining = split.join(&#39;\\n\\n&#39;);\n        var buf = new Buffer(remaining, &#39;utf8&#39;);\n        if (buf.length)\n          stream.unshift(buf);\n        stream.removeListener(&#39;error&#39;, callback);\n        stream.removeListener(&#39;readable&#39;, onReadable);\n        // now the body of the message can be read from the stream.\n        callback(null, header, stream);\n      } else {\n        // still reading the header.\n        header += str;\n      }\n    }\n  }\n}</code></pre>\n"
            },
            {
              "textRaw": "readable.wrap(stream)",
              "type": "method",
              "name": "wrap",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`stream` {Stream} An \"old style\" readable stream ",
                      "name": "stream",
                      "type": "Stream",
                      "desc": "An \"old style\" readable stream"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "stream"
                    }
                  ]
                }
              ],
              "desc": "<p>Versions of Node prior to v0.10 had streams that did not implement the\nentire Streams API as it is today.  (See &quot;Compatibility&quot; below for\nmore information.)\n\n</p>\n<p>If you are using an older Node library that emits <code>&#39;data&#39;</code> events and\nhas a <code>pause()</code> method that is advisory only, then you can use the\n<code>wrap()</code> method to create a [Readable][] stream that uses the old stream\nas its data source.\n\n</p>\n<p>You will very rarely ever need to call this function, but it exists\nas a convenience for interacting with old Node programs and libraries.\n\n</p>\n<p>For example:\n\n</p>\n<pre><code class=\"javascript\">var OldReader = require(&#39;./old-api-module.js&#39;).OldReader;\nvar oreader = new OldReader;\nvar Readable = require(&#39;stream&#39;).Readable;\nvar myReader = new Readable().wrap(oreader);\n\nmyReader.on(&#39;readable&#39;, function() {\n  myReader.read(); // etc.\n});</code></pre>\n"
            }
          ]
        },
        {
          "textRaw": "Class: stream.Writable",
          "type": "class",
          "name": "stream.Writable",
          "desc": "<p>The Writable stream interface is an abstraction for a <em>destination</em>\nthat you are writing data <em>to</em>.\n\n</p>\n<p>Examples of writable streams include:\n\n</p>\n<ul>\n<li><a href=\"http.html#http_class_http_clientrequest\">http requests, on the client</a></li>\n<li><a href=\"http.html#http_class_http_serverresponse\">http responses, on the server</a></li>\n<li><a href=\"fs.html#fs_class_fs_writestream\">fs write streams</a></li>\n<li>[zlib streams][]</li>\n<li>[crypto streams][]</li>\n<li>[tcp sockets][]</li>\n<li><a href=\"child_process.html#child_process_child_stdin\">child process stdin</a></li>\n<li>[process.stdout][], [process.stderr][]</li>\n</ul>\n",
          "methods": [
            {
              "textRaw": "writable.write(chunk, [encoding], [callback])",
              "type": "method",
              "name": "write",
              "signatures": [
                {
                  "return": {
                    "textRaw": "Returns: {Boolean} True if the data was handled completely. ",
                    "name": "return",
                    "type": "Boolean",
                    "desc": "True if the data was handled completely."
                  },
                  "params": [
                    {
                      "textRaw": "`chunk` {String | Buffer} The data to write ",
                      "name": "chunk",
                      "type": "String | Buffer",
                      "desc": "The data to write"
                    },
                    {
                      "textRaw": "`encoding` {String} The encoding, if `chunk` is a String ",
                      "name": "encoding",
                      "type": "String",
                      "desc": "The encoding, if `chunk` is a String",
                      "optional": true
                    },
                    {
                      "textRaw": "`callback` {Function} Callback for when this chunk of data is flushed ",
                      "name": "callback",
                      "type": "Function",
                      "desc": "Callback for when this chunk of data is flushed",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "chunk"
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>This method writes some data to the underlying system, and calls the\nsupplied callback once the data has been fully handled.\n\n</p>\n<p>The return value indicates if you should continue writing right now.\nIf the data had to be buffered internally, then it will return\n<code>false</code>.  Otherwise, it will return <code>true</code>.\n\n</p>\n<p>This return value is strictly advisory.  You MAY continue to write,\neven if it returns <code>false</code>.  However, writes will be buffered in\nmemory, so it is best not to do this excessively.  Instead, wait for\nthe <code>drain</code> event before writing more data.\n\n</p>\n"
            },
            {
              "textRaw": "writable.end([chunk], [encoding], [callback])",
              "type": "method",
              "name": "end",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`chunk` {String | Buffer} Optional data to write ",
                      "name": "chunk",
                      "type": "String | Buffer",
                      "desc": "Optional data to write",
                      "optional": true
                    },
                    {
                      "textRaw": "`encoding` {String} The encoding, if `chunk` is a String ",
                      "name": "encoding",
                      "type": "String",
                      "desc": "The encoding, if `chunk` is a String",
                      "optional": true
                    },
                    {
                      "textRaw": "`callback` {Function} Optional callback for when the stream is finished ",
                      "name": "callback",
                      "type": "Function",
                      "desc": "Optional callback for when the stream is finished",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "chunk",
                      "optional": true
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Call this method when no more data will be written to the stream.  If\nsupplied, the callback is attached as a listener on the <code>finish</code> event.\n\n</p>\n<p>Calling [<code>write()</code>][] after calling [<code>end()</code>][] will raise an error.\n\n</p>\n<pre><code class=\"javascript\">// write &#39;hello, &#39; and then end with &#39;world!&#39;\nhttp.createServer(function (req, res) {\n  res.write(&#39;hello, &#39;);\n  res.end(&#39;world!&#39;);\n  // writing more now is not allowed!\n});</code></pre>\n"
            }
          ],
          "events": [
            {
              "textRaw": "Event: 'drain'",
              "type": "event",
              "name": "drain",
              "desc": "<p>If a [<code>writable.write(chunk)</code>][] call returns false, then the <code>drain</code>\nevent will indicate when it is appropriate to begin writing more data\nto the stream.\n\n</p>\n<pre><code class=\"javascript\">// Write the data to the supplied writable stream 1MM times.\n// Be attentive to back-pressure.\nfunction writeOneMillionTimes(writer, data, encoding, callback) {\n  var i = 1000000;\n  write();\n  function write() {\n    var ok = true;\n    do {\n      i -= 1;\n      if (i === 0) {\n        // last time!\n        writer.write(data, encoding, callback);\n      } else {\n        // see if we should continue, or wait\n        // don&#39;t pass the callback, because we&#39;re not done yet.\n        ok = writer.write(data, encoding);\n      }\n    } while (i &gt; 0 &amp;&amp; ok);\n    if (i &gt; 0) {\n      // had to stop early!\n      // write some more once it drains\n      writer.once(&#39;drain&#39;, write);\n    }\n  }\n}</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'finish'",
              "type": "event",
              "name": "finish",
              "desc": "<p>When the [<code>end()</code>][] method has been called, and all data has been flushed\nto the underlying system, this event is emitted.\n\n</p>\n<pre><code class=\"javascript\">var writer = getWritableStreamSomehow();\nfor (var i = 0; i &lt; 100; i ++) {\n  writer.write(&#39;hello, #&#39; + i + &#39;!\\n&#39;);\n}\nwriter.end(&#39;this is the end\\n&#39;);\nwriter.on(&#39;finish&#39;, function() {\n  console.error(&#39;all writes are now complete.&#39;);\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'pipe'",
              "type": "event",
              "name": "pipe",
              "params": [],
              "desc": "<p>This is emitted whenever the <code>pipe()</code> method is called on a readable\nstream, adding this writable to its set of destinations.\n\n</p>\n<pre><code class=\"javascript\">var writer = getWritableStreamSomehow();\nvar reader = getReadableStreamSomehow();\nwriter.on(&#39;pipe&#39;, function(src) {\n  console.error(&#39;something is piping into the writer&#39;);\n  assert.equal(src, reader);\n});\nreader.pipe(writer);</code></pre>\n"
            },
            {
              "textRaw": "Event: 'unpipe'",
              "type": "event",
              "name": "unpipe",
              "params": [],
              "desc": "<p>This is emitted whenever the [<code>unpipe()</code>][] method is called on a\nreadable stream, removing this writable from its set of destinations.\n\n</p>\n<pre><code class=\"javascript\">var writer = getWritableStreamSomehow();\nvar reader = getReadableStreamSomehow();\nwriter.on(&#39;unpipe&#39;, function(src) {\n  console.error(&#39;something has stopped piping into the writer&#39;);\n  assert.equal(src, reader);\n});\nreader.pipe(writer);\nreader.unpipe(writer);</code></pre>\n"
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "params": [],
              "desc": "<p>Emitted if there was an error when writing or piping data.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: stream.Duplex",
          "type": "class",
          "name": "stream.Duplex",
          "desc": "<p>Duplex streams are streams that implement both the [Readable][] and\n[Writable][] interfaces.  See above for usage.\n\n</p>\n<p>Examples of Duplex streams include:\n\n</p>\n<ul>\n<li>[tcp sockets][]</li>\n<li>[zlib streams][]</li>\n<li>[crypto streams][]</li>\n</ul>\n"
        },
        {
          "textRaw": "Class: stream.Transform",
          "type": "class",
          "name": "stream.Transform",
          "desc": "<p>Transform streams are [Duplex][] streams where the output is in some way\ncomputed from the input.  They implement both the [Readable][] and\n[Writable][] interfaces.  See above for usage.\n\n</p>\n<p>Examples of Transform streams include:\n\n</p>\n<ul>\n<li>[zlib streams][]</li>\n<li>[crypto streams][]</li>\n</ul>\n"
        }
      ],
      "miscs": [
        {
          "textRaw": "API for Stream Consumers",
          "name": "API for Stream Consumers",
          "type": "misc",
          "desc": "<p>Streams can be either [Readable][], [Writable][], or both ([Duplex][]).\n\n</p>\n<p>All streams are EventEmitters, but they also have other custom methods\nand properties depending on whether they are Readable, Writable, or\nDuplex.\n\n</p>\n<p>If a stream is both Readable and Writable, then it implements all of\nthe methods and events below.  So, a [Duplex][] or [Transform][] stream is\nfully described by this API, though their implementation may be\nsomewhat different.\n\n</p>\n<p>It is not necessary to implement Stream interfaces in order to consume\nstreams in your programs.  If you <strong>are</strong> implementing streaming\ninterfaces in your own program, please also refer to\n[API for Stream Implementors][] below.\n\n</p>\n<p>Almost all Node programs, no matter how simple, use Streams in some\nway.  Here is an example of using Streams in a Node program:\n\n</p>\n<pre><code class=\"javascript\">var http = require(&#39;http&#39;);\n\nvar server = http.createServer(function (req, res) {\n  // req is an http.IncomingMessage, which is a Readable Stream\n  // res is an http.ServerResponse, which is a Writable Stream\n\n  var body = &#39;&#39;;\n  // we want to get the data as utf8 strings\n  // If you don&#39;t set an encoding, then you&#39;ll get Buffer objects\n  req.setEncoding(&#39;utf8&#39;);\n\n  // Readable streams emit &#39;data&#39; events once a listener is added\n  req.on(&#39;data&#39;, function (chunk) {\n    body += chunk;\n  })\n\n  // the end event tells you that you have entire body\n  req.on(&#39;end&#39;, function () {\n    try {\n      var data = JSON.parse(body);\n    } catch (er) {\n      // uh oh!  bad json!\n      res.statusCode = 400;\n      return res.end(&#39;error: &#39; + er.message);\n    }\n\n    // write back something interesting to the user:\n    res.write(typeof data);\n    res.end();\n  })\n})\n\nserver.listen(1337);\n\n// $ curl localhost:1337 -d &#39;{}&#39;\n// object\n// $ curl localhost:1337 -d &#39;&quot;foo&quot;&#39;\n// string\n// $ curl localhost:1337 -d &#39;not json&#39;\n// error: Unexpected token o</code></pre>\n",
          "classes": [
            {
              "textRaw": "Class: stream.Readable",
              "type": "class",
              "name": "stream.Readable",
              "desc": "<p>The Readable stream interface is the abstraction for a <em>source</em> of\ndata that you are reading from.  In other words, data comes <em>out</em> of a\nReadable stream.\n\n</p>\n<p>A Readable stream will not start emitting data until you indicate that\nyou are ready to receive it.\n\n</p>\n<p>Readable streams have two &quot;modes&quot;: a <strong>flowing mode</strong> and a <strong>non-flowing\nmode</strong>.  When in flowing mode, data is read from the underlying system\nand provided to your program as fast as possible.  In non-flowing\nmode, you must explicitly call <code>stream.read()</code> to get chunks of data\nout.\n\n</p>\n<p>Examples of readable streams include:\n\n</p>\n<ul>\n<li><a href=\"http.html#http_http_incomingmessage\">http responses, on the client</a></li>\n<li><a href=\"http.html#http_http_incomingmessage\">http requests, on the server</a></li>\n<li><a href=\"fs.html#fs_class_fs_readstream\">fs read streams</a></li>\n<li>[zlib streams][]</li>\n<li>[crypto streams][]</li>\n<li>[tcp sockets][]</li>\n<li>[child process stdout and stderr][]</li>\n<li>[process.stdin][]</li>\n</ul>\n",
              "events": [
                {
                  "textRaw": "Event: 'readable'",
                  "type": "event",
                  "name": "readable",
                  "desc": "<p>When a chunk of data can be read from the stream, it will emit a\n<code>&#39;readable&#39;</code> event.\n\n</p>\n<p>In some cases, listening for a <code>&#39;readable&#39;</code> event will cause some data\nto be read into the internal buffer from the underlying system, if it\nhadn&#39;t already.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;readable&#39;, function() {\n  // there is some data to read now\n})</code></pre>\n<p>Once the internal buffer is drained, a <code>readable</code> event will fire\nagain when more data is available.\n\n</p>\n",
                  "params": []
                },
                {
                  "textRaw": "Event: 'data'",
                  "type": "event",
                  "name": "data",
                  "params": [],
                  "desc": "<p>If you attach a <code>data</code> event listener, then it will switch the stream\ninto flowing mode, and data will be passed to your handler as soon as\nit is available.\n\n</p>\n<p>If you just want to get all the data out of the stream as fast as\npossible, this is the best way to do so.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;data&#39;, function(chunk) {\n  console.log(&#39;got %d bytes of data&#39;, chunk.length);\n})</code></pre>\n"
                },
                {
                  "textRaw": "Event: 'end'",
                  "type": "event",
                  "name": "end",
                  "desc": "<p>This event fires when there will be no more data to read.\n\n</p>\n<p>Note that the <code>end</code> event <strong>will not fire</strong> unless the data is\ncompletely consumed.  This can be done by switching into flowing mode,\nor by calling <code>read()</code> repeatedly until you get to the end.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;data&#39;, function(chunk) {\n  console.log(&#39;got %d bytes of data&#39;, chunk.length);\n})\nreadable.on(&#39;end&#39;, function() {\n  console.log(&#39;there will be no more data.&#39;);\n});</code></pre>\n",
                  "params": []
                },
                {
                  "textRaw": "Event: 'close'",
                  "type": "event",
                  "name": "close",
                  "desc": "<p>Emitted when the underlying resource (for example, the backing file\ndescriptor) has been closed. Not all streams will emit this.\n\n</p>\n",
                  "params": []
                },
                {
                  "textRaw": "Event: 'error'",
                  "type": "event",
                  "name": "error",
                  "params": [],
                  "desc": "<p>Emitted if there was an error receiving data.\n\n</p>\n"
                }
              ],
              "methods": [
                {
                  "textRaw": "readable.read([size])",
                  "type": "method",
                  "name": "read",
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Return {String | Buffer | null} ",
                        "name": "return",
                        "type": "String | Buffer | null"
                      },
                      "params": [
                        {
                          "textRaw": "`size` {Number} Optional argument to specify how much data to read. ",
                          "name": "size",
                          "type": "Number",
                          "desc": "Optional argument to specify how much data to read.",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "size",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>The <code>read()</code> method pulls some data out of the internal buffer and\nreturns it.  If there is no data available, then it will return\n<code>null</code>.\n\n</p>\n<p>If you pass in a <code>size</code> argument, then it will return that many\nbytes.  If <code>size</code> bytes are not available, then it will return <code>null</code>.\n\n</p>\n<p>If you do not specify a <code>size</code> argument, then it will return all the\ndata in the internal buffer.\n\n</p>\n<p>This method should only be called in non-flowing mode.  In\nflowing-mode, this method is called automatically until the internal\nbuffer is drained.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;readable&#39;, function() {\n  var chunk;\n  while (null !== (chunk = readable.read())) {\n    console.log(&#39;got %d bytes of data&#39;, chunk.length);\n  }\n});</code></pre>\n"
                },
                {
                  "textRaw": "readable.setEncoding(encoding)",
                  "type": "method",
                  "name": "setEncoding",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`encoding` {String} The encoding to use. ",
                          "name": "encoding",
                          "type": "String",
                          "desc": "The encoding to use."
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "encoding"
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Call this function to cause the stream to return strings of the\nspecified encoding instead of Buffer objects.  For example, if you do\n<code>readable.setEncoding(&#39;utf8&#39;)</code>, then the output data will be\ninterpreted as UTF-8 data, and returned as strings.  If you do\n<code>readable.setEncoding(&#39;hex&#39;)</code>, then the data will be encoded in\nhexadecimal string format.\n\n</p>\n<p>This properly handles multi-byte characters that would otherwise be\npotentially mangled if you simply pulled the Buffers directly and\ncalled <code>buf.toString(encoding)</code> on them.  If you want to read the data\nas strings, always use this method.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.setEncoding(&#39;utf8&#39;);\nreadable.on(&#39;data&#39;, function(chunk) {\n  assert.equal(typeof chunk, &#39;string&#39;);\n  console.log(&#39;got %d characters of string data&#39;, chunk.length);\n})</code></pre>\n"
                },
                {
                  "textRaw": "readable.resume()",
                  "type": "method",
                  "name": "resume",
                  "desc": "<p>This method will cause the readable stream to resume emitting <code>data</code>\nevents.\n\n</p>\n<p>This method will switch the stream into flowing-mode.  If you do <em>not</em>\nwant to consume the data from a stream, but you <em>do</em> want to get to\nits <code>end</code> event, you can call <code>readable.resume()</code> to open the flow of\ndata.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.resume();\nreadable.on(&#39;end&#39;, function(chunk) {\n  console.log(&#39;got to the end, but did not read anything&#39;);\n})</code></pre>\n",
                  "signatures": [
                    {
                      "params": []
                    }
                  ]
                },
                {
                  "textRaw": "readable.pause()",
                  "type": "method",
                  "name": "pause",
                  "desc": "<p>This method will cause a stream in flowing-mode to stop emitting\n<code>data</code> events.  Any data that becomes available will remain in the\ninternal buffer.\n\n</p>\n<p>This method is only relevant in flowing mode.  When called on a\nnon-flowing stream, it will switch into flowing mode, but remain\npaused.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nreadable.on(&#39;data&#39;, function(chunk) {\n  console.log(&#39;got %d bytes of data&#39;, chunk.length);\n  readable.pause();\n  console.log(&#39;there will be no more data for 1 second&#39;);\n  setTimeout(function() {\n    console.log(&#39;now data will start flowing again&#39;);\n    readable.resume();\n  }, 1000);\n})</code></pre>\n",
                  "signatures": [
                    {
                      "params": []
                    }
                  ]
                },
                {
                  "textRaw": "readable.pipe(destination, [options])",
                  "type": "method",
                  "name": "pipe",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`destination` {[Writable][] Stream} The destination for writing data ",
                          "name": "destination",
                          "type": "[Writable][] Stream",
                          "desc": "The destination for writing data"
                        },
                        {
                          "textRaw": "`options` {Object} Pipe options ",
                          "options": [
                            {
                              "textRaw": "`end` {Boolean} End the writer when the reader ends. Default = `true` ",
                              "name": "end",
                              "type": "Boolean",
                              "desc": "End the writer when the reader ends. Default = `true`"
                            }
                          ],
                          "name": "options",
                          "type": "Object",
                          "desc": "Pipe options",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "destination"
                        },
                        {
                          "name": "options",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>This method pulls all the data out of a readable stream, and writes it\nto the supplied destination, automatically managing the flow so that\nthe destination is not overwhelmed by a fast readable stream.\n\n</p>\n<p>Multiple destinations can be piped to safely.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nvar writable = fs.createWriteStream(&#39;file.txt&#39;);\n// All the data from readable goes into &#39;file.txt&#39;\nreadable.pipe(writable);</code></pre>\n<p>This function returns the destination stream, so you can set up pipe\nchains like so:\n\n</p>\n<pre><code class=\"javascript\">var r = fs.createReadStream(&#39;file.txt&#39;);\nvar z = zlib.createGzip();\nvar w = fs.createWriteStream(&#39;file.txt.gz&#39;);\nr.pipe(z).pipe(w);</code></pre>\n<p>For example, emulating the Unix <code>cat</code> command:\n\n</p>\n<pre><code class=\"javascript\">process.stdin.pipe(process.stdout);</code></pre>\n<p>By default [<code>end()</code>][] is called on the destination when the source stream\nemits <code>end</code>, so that <code>destination</code> is no longer writable. Pass <code>{ end:\nfalse }</code> as <code>options</code> to keep the destination stream open.\n\n</p>\n<p>This keeps <code>writer</code> open so that &quot;Goodbye&quot; can be written at the\nend.\n\n</p>\n<pre><code class=\"javascript\">reader.pipe(writer, { end: false });\nreader.on(&#39;end&#39;, function() {\n  writer.end(&#39;Goodbye\\n&#39;);\n});</code></pre>\n<p>Note that <code>process.stderr</code> and <code>process.stdout</code> are never closed until\nthe process exits, regardless of the specified options.\n\n</p>\n"
                },
                {
                  "textRaw": "readable.unpipe([destination])",
                  "type": "method",
                  "name": "unpipe",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`destination` {[Writable][] Stream} Optional specific stream to unpipe ",
                          "name": "destination",
                          "type": "[Writable][] Stream",
                          "desc": "Optional specific stream to unpipe",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "destination",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>This method will remove the hooks set up for a previous <code>pipe()</code> call.\n\n</p>\n<p>If the destination is not specified, then all pipes are removed.\n\n</p>\n<p>If the destination is specified, but no pipe is set up for it, then\nthis is a no-op.\n\n</p>\n<pre><code class=\"javascript\">var readable = getReadableStreamSomehow();\nvar writable = fs.createWriteStream(&#39;file.txt&#39;);\n// All the data from readable goes into &#39;file.txt&#39;,\n// but only for the first second\nreadable.pipe(writable);\nsetTimeout(function() {\n  console.log(&#39;stop writing to file.txt&#39;);\n  readable.unpipe(writable);\n  console.log(&#39;manually close the file stream&#39;);\n  writable.end();\n}, 1000);</code></pre>\n"
                },
                {
                  "textRaw": "readable.unshift(chunk)",
                  "type": "method",
                  "name": "unshift",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`chunk` {Buffer | String} Chunk of data to unshift onto the read queue ",
                          "name": "chunk",
                          "type": "Buffer | String",
                          "desc": "Chunk of data to unshift onto the read queue"
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "chunk"
                        }
                      ]
                    }
                  ],
                  "desc": "<p>This is useful in certain cases where a stream is being consumed by a\nparser, which needs to &quot;un-consume&quot; some data that it has\noptimistically pulled out of the source, so that the stream can be\npassed on to some other party.\n\n</p>\n<p>If you find that you must often call <code>stream.unshift(chunk)</code> in your\nprograms, consider implementing a [Transform][] stream instead.  (See API\nfor Stream Implementors, below.)\n\n</p>\n<pre><code class=\"javascript\">// Pull off a header delimited by \\n\\n\n// use unshift() if we get too much\n// Call the callback with (error, header, stream)\nvar StringDecoder = require(&#39;string_decoder&#39;).StringDecoder;\nfunction parseHeader(stream, callback) {\n  stream.on(&#39;error&#39;, callback);\n  stream.on(&#39;readable&#39;, onReadable);\n  var decoder = new StringDecoder(&#39;utf8&#39;);\n  var header = &#39;&#39;;\n  function onReadable() {\n    var chunk;\n    while (null !== (chunk = stream.read())) {\n      var str = decoder.write(chunk);\n      if (str.match(/\\n\\n/)) {\n        // found the header boundary\n        var split = str.split(/\\n\\n/);\n        header += split.shift();\n        var remaining = split.join(&#39;\\n\\n&#39;);\n        var buf = new Buffer(remaining, &#39;utf8&#39;);\n        if (buf.length)\n          stream.unshift(buf);\n        stream.removeListener(&#39;error&#39;, callback);\n        stream.removeListener(&#39;readable&#39;, onReadable);\n        // now the body of the message can be read from the stream.\n        callback(null, header, stream);\n      } else {\n        // still reading the header.\n        header += str;\n      }\n    }\n  }\n}</code></pre>\n"
                },
                {
                  "textRaw": "readable.wrap(stream)",
                  "type": "method",
                  "name": "wrap",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`stream` {Stream} An \"old style\" readable stream ",
                          "name": "stream",
                          "type": "Stream",
                          "desc": "An \"old style\" readable stream"
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "stream"
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Versions of Node prior to v0.10 had streams that did not implement the\nentire Streams API as it is today.  (See &quot;Compatibility&quot; below for\nmore information.)\n\n</p>\n<p>If you are using an older Node library that emits <code>&#39;data&#39;</code> events and\nhas a <code>pause()</code> method that is advisory only, then you can use the\n<code>wrap()</code> method to create a [Readable][] stream that uses the old stream\nas its data source.\n\n</p>\n<p>You will very rarely ever need to call this function, but it exists\nas a convenience for interacting with old Node programs and libraries.\n\n</p>\n<p>For example:\n\n</p>\n<pre><code class=\"javascript\">var OldReader = require(&#39;./old-api-module.js&#39;).OldReader;\nvar oreader = new OldReader;\nvar Readable = require(&#39;stream&#39;).Readable;\nvar myReader = new Readable().wrap(oreader);\n\nmyReader.on(&#39;readable&#39;, function() {\n  myReader.read(); // etc.\n});</code></pre>\n"
                }
              ]
            },
            {
              "textRaw": "Class: stream.Writable",
              "type": "class",
              "name": "stream.Writable",
              "desc": "<p>The Writable stream interface is an abstraction for a <em>destination</em>\nthat you are writing data <em>to</em>.\n\n</p>\n<p>Examples of writable streams include:\n\n</p>\n<ul>\n<li><a href=\"http.html#http_class_http_clientrequest\">http requests, on the client</a></li>\n<li><a href=\"http.html#http_class_http_serverresponse\">http responses, on the server</a></li>\n<li><a href=\"fs.html#fs_class_fs_writestream\">fs write streams</a></li>\n<li>[zlib streams][]</li>\n<li>[crypto streams][]</li>\n<li>[tcp sockets][]</li>\n<li><a href=\"child_process.html#child_process_child_stdin\">child process stdin</a></li>\n<li>[process.stdout][], [process.stderr][]</li>\n</ul>\n",
              "methods": [
                {
                  "textRaw": "writable.write(chunk, [encoding], [callback])",
                  "type": "method",
                  "name": "write",
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "Returns: {Boolean} True if the data was handled completely. ",
                        "name": "return",
                        "type": "Boolean",
                        "desc": "True if the data was handled completely."
                      },
                      "params": [
                        {
                          "textRaw": "`chunk` {String | Buffer} The data to write ",
                          "name": "chunk",
                          "type": "String | Buffer",
                          "desc": "The data to write"
                        },
                        {
                          "textRaw": "`encoding` {String} The encoding, if `chunk` is a String ",
                          "name": "encoding",
                          "type": "String",
                          "desc": "The encoding, if `chunk` is a String",
                          "optional": true
                        },
                        {
                          "textRaw": "`callback` {Function} Callback for when this chunk of data is flushed ",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Callback for when this chunk of data is flushed",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "chunk"
                        },
                        {
                          "name": "encoding",
                          "optional": true
                        },
                        {
                          "name": "callback",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>This method writes some data to the underlying system, and calls the\nsupplied callback once the data has been fully handled.\n\n</p>\n<p>The return value indicates if you should continue writing right now.\nIf the data had to be buffered internally, then it will return\n<code>false</code>.  Otherwise, it will return <code>true</code>.\n\n</p>\n<p>This return value is strictly advisory.  You MAY continue to write,\neven if it returns <code>false</code>.  However, writes will be buffered in\nmemory, so it is best not to do this excessively.  Instead, wait for\nthe <code>drain</code> event before writing more data.\n\n</p>\n"
                },
                {
                  "textRaw": "writable.end([chunk], [encoding], [callback])",
                  "type": "method",
                  "name": "end",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`chunk` {String | Buffer} Optional data to write ",
                          "name": "chunk",
                          "type": "String | Buffer",
                          "desc": "Optional data to write",
                          "optional": true
                        },
                        {
                          "textRaw": "`encoding` {String} The encoding, if `chunk` is a String ",
                          "name": "encoding",
                          "type": "String",
                          "desc": "The encoding, if `chunk` is a String",
                          "optional": true
                        },
                        {
                          "textRaw": "`callback` {Function} Optional callback for when the stream is finished ",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Optional callback for when the stream is finished",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "chunk",
                          "optional": true
                        },
                        {
                          "name": "encoding",
                          "optional": true
                        },
                        {
                          "name": "callback",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Call this method when no more data will be written to the stream.  If\nsupplied, the callback is attached as a listener on the <code>finish</code> event.\n\n</p>\n<p>Calling [<code>write()</code>][] after calling [<code>end()</code>][] will raise an error.\n\n</p>\n<pre><code class=\"javascript\">// write &#39;hello, &#39; and then end with &#39;world!&#39;\nhttp.createServer(function (req, res) {\n  res.write(&#39;hello, &#39;);\n  res.end(&#39;world!&#39;);\n  // writing more now is not allowed!\n});</code></pre>\n"
                }
              ],
              "events": [
                {
                  "textRaw": "Event: 'drain'",
                  "type": "event",
                  "name": "drain",
                  "desc": "<p>If a [<code>writable.write(chunk)</code>][] call returns false, then the <code>drain</code>\nevent will indicate when it is appropriate to begin writing more data\nto the stream.\n\n</p>\n<pre><code class=\"javascript\">// Write the data to the supplied writable stream 1MM times.\n// Be attentive to back-pressure.\nfunction writeOneMillionTimes(writer, data, encoding, callback) {\n  var i = 1000000;\n  write();\n  function write() {\n    var ok = true;\n    do {\n      i -= 1;\n      if (i === 0) {\n        // last time!\n        writer.write(data, encoding, callback);\n      } else {\n        // see if we should continue, or wait\n        // don&#39;t pass the callback, because we&#39;re not done yet.\n        ok = writer.write(data, encoding);\n      }\n    } while (i &gt; 0 &amp;&amp; ok);\n    if (i &gt; 0) {\n      // had to stop early!\n      // write some more once it drains\n      writer.once(&#39;drain&#39;, write);\n    }\n  }\n}</code></pre>\n",
                  "params": []
                },
                {
                  "textRaw": "Event: 'finish'",
                  "type": "event",
                  "name": "finish",
                  "desc": "<p>When the [<code>end()</code>][] method has been called, and all data has been flushed\nto the underlying system, this event is emitted.\n\n</p>\n<pre><code class=\"javascript\">var writer = getWritableStreamSomehow();\nfor (var i = 0; i &lt; 100; i ++) {\n  writer.write(&#39;hello, #&#39; + i + &#39;!\\n&#39;);\n}\nwriter.end(&#39;this is the end\\n&#39;);\nwriter.on(&#39;finish&#39;, function() {\n  console.error(&#39;all writes are now complete.&#39;);\n});</code></pre>\n",
                  "params": []
                },
                {
                  "textRaw": "Event: 'pipe'",
                  "type": "event",
                  "name": "pipe",
                  "params": [],
                  "desc": "<p>This is emitted whenever the <code>pipe()</code> method is called on a readable\nstream, adding this writable to its set of destinations.\n\n</p>\n<pre><code class=\"javascript\">var writer = getWritableStreamSomehow();\nvar reader = getReadableStreamSomehow();\nwriter.on(&#39;pipe&#39;, function(src) {\n  console.error(&#39;something is piping into the writer&#39;);\n  assert.equal(src, reader);\n});\nreader.pipe(writer);</code></pre>\n"
                },
                {
                  "textRaw": "Event: 'unpipe'",
                  "type": "event",
                  "name": "unpipe",
                  "params": [],
                  "desc": "<p>This is emitted whenever the [<code>unpipe()</code>][] method is called on a\nreadable stream, removing this writable from its set of destinations.\n\n</p>\n<pre><code class=\"javascript\">var writer = getWritableStreamSomehow();\nvar reader = getReadableStreamSomehow();\nwriter.on(&#39;unpipe&#39;, function(src) {\n  console.error(&#39;something has stopped piping into the writer&#39;);\n  assert.equal(src, reader);\n});\nreader.pipe(writer);\nreader.unpipe(writer);</code></pre>\n"
                },
                {
                  "textRaw": "Event: 'error'",
                  "type": "event",
                  "name": "error",
                  "params": [],
                  "desc": "<p>Emitted if there was an error when writing or piping data.\n\n</p>\n"
                }
              ]
            },
            {
              "textRaw": "Class: stream.Duplex",
              "type": "class",
              "name": "stream.Duplex",
              "desc": "<p>Duplex streams are streams that implement both the [Readable][] and\n[Writable][] interfaces.  See above for usage.\n\n</p>\n<p>Examples of Duplex streams include:\n\n</p>\n<ul>\n<li>[tcp sockets][]</li>\n<li>[zlib streams][]</li>\n<li>[crypto streams][]</li>\n</ul>\n"
            },
            {
              "textRaw": "Class: stream.Transform",
              "type": "class",
              "name": "stream.Transform",
              "desc": "<p>Transform streams are [Duplex][] streams where the output is in some way\ncomputed from the input.  They implement both the [Readable][] and\n[Writable][] interfaces.  See above for usage.\n\n</p>\n<p>Examples of Transform streams include:\n\n</p>\n<ul>\n<li>[zlib streams][]</li>\n<li>[crypto streams][]</li>\n</ul>\n"
            }
          ]
        },
        {
          "textRaw": "API for Stream Implementors",
          "name": "API for Stream Implementors",
          "type": "misc",
          "desc": "<p>To implement any sort of stream, the pattern is the same:\n\n</p>\n<ol>\n<li>Extend the appropriate parent class in your own subclass.  (The\n[<code>util.inherits</code>][] method is particularly helpful for this.)</li>\n<li>Call the appropriate parent class constructor in your constructor,\nto be sure that the internal mechanisms are set up properly.</li>\n<li>Implement one or more specific methods, as detailed below.</li>\n</ol>\n<p>The class to extend and the method(s) to implement depend on the sort\nof stream class you are writing:\n\n</p>\n<table>\n  <thead>\n    <tr>\n      <th>\n        <p>Use-case</p>\n      </th>\n      <th>\n        <p>Class</p>\n      </th>\n      <th>\n        <p>Method(s) to implement</p>\n      </th>\n    </tr>\n  </thead>\n  <tr>\n    <td>\n      <p>Reading only</p>\n    </td>\n    <td>\n      <p><a href=\"#stream_class_stream_readable_1\">Readable</a></p>\n    </td>\n    <td>\n      <p><code>[_read][]</code></p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <p>Writing only</p>\n    </td>\n    <td>\n      <p><a href=\"#stream_class_stream_writable_1\">Writable</a></p>\n    </td>\n    <td>\n      <p><code>[_write][]</code></p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <p>Reading and writing</p>\n    </td>\n    <td>\n      <p><a href=\"#stream_class_stream_duplex_1\">Duplex</a></p>\n    </td>\n    <td>\n      <p><code>[_read][]</code>, <code>[_write][]</code></p>\n    </td>\n  </tr>\n  <tr>\n    <td>\n      <p>Operate on written data, then read the result</p>\n    </td>\n    <td>\n      <p><a href=\"#stream_class_stream_transform_1\">Transform</a></p>\n    </td>\n    <td>\n      <p><code>_transform</code>, <code>_flush</code></p>\n    </td>\n  </tr>\n</table>\n\n<p>In your implementation code, it is very important to never call the\nmethods described in [API for Stream Consumers][] above.  Otherwise, you\ncan potentially cause adverse side effects in programs that consume\nyour streaming interfaces.\n\n</p>\n",
          "examples": [
            {
              "textRaw": "Class: stream.Readable",
              "type": "example",
              "name": "stream.Readable",
              "desc": "<p><code>stream.Readable</code> is an abstract class designed to be extended with an\nunderlying implementation of the [<code>_read(size)</code>][] method.\n\n</p>\n<p>Please see above under [API for Stream Consumers][] for how to consume\nstreams in your programs.  What follows is an explanation of how to\nimplement Readable streams in your programs.\n\n</p>\n<h4>Example: A Counting Stream</h4>\n<p>This is a basic example of a Readable stream.  It emits the numerals\nfrom 1 to 1,000,000 in ascending order, and then ends.\n\n</p>\n<pre><code class=\"javascript\">var Readable = require(&#39;stream&#39;).Readable;\nvar util = require(&#39;util&#39;);\nutil.inherits(Counter, Readable);\n\nfunction Counter(opt) {\n  Readable.call(this, opt);\n  this._max = 1000000;\n  this._index = 1;\n}\n\nCounter.prototype._read = function() {\n  var i = this._index++;\n  if (i &gt; this._max)\n    this.push(null);\n  else {\n    var str = &#39;&#39; + i;\n    var buf = new Buffer(str, &#39;ascii&#39;);\n    this.push(buf);\n  }\n};</code></pre>\n<h4>Example: SimpleProtocol v1 (Sub-optimal)</h4>\n<p>This is similar to the <code>parseHeader</code> function described above, but\nimplemented as a custom stream.  Also, note that this implementation\ndoes not convert the incoming data to a string.\n\n</p>\n<p>However, this would be better implemented as a [Transform][] stream.  See\nbelow for a better implementation.\n\n</p>\n<pre><code class=\"javascript\">// A parser for a simple data protocol.\n// The &quot;header&quot; is a JSON object, followed by 2 \\n characters, and\n// then a message body.\n//\n// NOTE: This can be done more simply as a Transform stream!\n// Using Readable directly for this is sub-optimal.  See the\n// alternative example below under the Transform section.\n\nvar Readable = require(&#39;stream&#39;).Readable;\nvar util = require(&#39;util&#39;);\n\nutil.inherits(SimpleProtocol, Readable);\n\nfunction SimpleProtocol(source, options) {\n  if (!(this instanceof SimpleProtocol))\n    return new SimpleProtocol(source, options);\n\n  Readable.call(this, options);\n  this._inBody = false;\n  this._sawFirstCr = false;\n\n  // source is a readable stream, such as a socket or file\n  this._source = source;\n\n  var self = this;\n  source.on(&#39;end&#39;, function() {\n    self.push(null);\n  });\n\n  // give it a kick whenever the source is readable\n  // read(0) will not consume any bytes\n  source.on(&#39;readable&#39;, function() {\n    self.read(0);\n  });\n\n  this._rawHeader = [];\n  this.header = null;\n}\n\nSimpleProtocol.prototype._read = function(n) {\n  if (!this._inBody) {\n    var chunk = this._source.read();\n\n    // if the source doesn&#39;t have data, we don&#39;t have data yet.\n    if (chunk === null)\n      return this.push(&#39;&#39;);\n\n    // check if the chunk has a \\n\\n\n    var split = -1;\n    for (var i = 0; i &lt; chunk.length; i++) {\n      if (chunk[i] === 10) { // &#39;\\n&#39;\n        if (this._sawFirstCr) {\n          split = i;\n          break;\n        } else {\n          this._sawFirstCr = true;\n        }\n      } else {\n        this._sawFirstCr = false;\n      }\n    }\n\n    if (split === -1) {\n      // still waiting for the \\n\\n\n      // stash the chunk, and try again.\n      this._rawHeader.push(chunk);\n      this.push(&#39;&#39;);\n    } else {\n      this._inBody = true;\n      var h = chunk.slice(0, split);\n      this._rawHeader.push(h);\n      var header = Buffer.concat(this._rawHeader).toString();\n      try {\n        this.header = JSON.parse(header);\n      } catch (er) {\n        this.emit(&#39;error&#39;, new Error(&#39;invalid simple protocol data&#39;));\n        return;\n      }\n      // now, because we got some extra data, unshift the rest\n      // back into the read queue so that our consumer will see it.\n      var b = chunk.slice(split);\n      this.unshift(b);\n\n      // and let them know that we are done parsing the header.\n      this.emit(&#39;header&#39;, this.header);\n    }\n  } else {\n    // from there on, just provide the data to our consumer.\n    // careful not to push(null), since that would indicate EOF.\n    var chunk = this._source.read();\n    if (chunk) this.push(chunk);\n  }\n};\n\n// Usage:\n// var parser = new SimpleProtocol(source);\n// Now parser is a readable stream that will emit &#39;header&#39;\n// with the parsed header data.</code></pre>\n",
              "methods": [
                {
                  "textRaw": "new stream.Readable([options])",
                  "type": "method",
                  "name": "Readable",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`options` {Object} ",
                          "options": [
                            {
                              "textRaw": "`highWaterMark` {Number} The maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource.  Default=16kb ",
                              "name": "highWaterMark",
                              "type": "Number",
                              "desc": "The maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource.  Default=16kb"
                            },
                            {
                              "textRaw": "`encoding` {String} If specified, then buffers will be decoded to strings using the specified encoding.  Default=null ",
                              "name": "encoding",
                              "type": "String",
                              "desc": "If specified, then buffers will be decoded to strings using the specified encoding.  Default=null"
                            },
                            {
                              "textRaw": "`objectMode` {Boolean} Whether this stream should behave as a stream of objects. Meaning that stream.read(n) returns a single value instead of a Buffer of size n.  Default=false ",
                              "name": "objectMode",
                              "type": "Boolean",
                              "desc": "Whether this stream should behave as a stream of objects. Meaning that stream.read(n) returns a single value instead of a Buffer of size n.  Default=false"
                            }
                          ],
                          "name": "options",
                          "type": "Object",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "options",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>In classes that extend the Readable class, make sure to call the\nReadable constructor so that the buffering settings can be properly\ninitialized.\n\n</p>\n"
                },
                {
                  "textRaw": "readable.\\_read(size)",
                  "type": "method",
                  "name": "\\_read",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`size` {Number} Number of bytes to read asynchronously ",
                          "name": "size",
                          "type": "Number",
                          "desc": "Number of bytes to read asynchronously"
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "size"
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Note: <strong>Implement this function, but do NOT call it directly.</strong>\n\n</p>\n<p>This function should NOT be called directly.  It should be implemented\nby child classes, and only called by the internal Readable class\nmethods.\n\n</p>\n<p>All Readable stream implementations must provide a <code>_read</code> method to\nfetch data from the underlying resource.\n\n</p>\n<p>This method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you <strong>are</strong> expected to override this method in\nyour own extension classes.\n\n</p>\n<p>When data is available, put it into the read queue by calling\n<code>readable.push(chunk)</code>.  If <code>push</code> returns false, then you should stop\nreading.  When <code>_read</code> is called again, you should start pushing more\ndata.\n\n</p>\n<p>The <code>size</code> argument is advisory.  Implementations where a &quot;read&quot; is a\nsingle call that returns data can use this to know how much data to\nfetch.  Implementations where that is not relevant, such as TCP or\nTLS, may ignore this argument, and simply provide data whenever it\nbecomes available.  There is no need, for example to &quot;wait&quot; until\n<code>size</code> bytes are available before calling [<code>stream.push(chunk)</code>][].\n\n</p>\n"
                },
                {
                  "textRaw": "readable.push(chunk, [encoding])",
                  "type": "method",
                  "name": "push",
                  "signatures": [
                    {
                      "return": {
                        "textRaw": "return {Boolean} Whether or not more pushes should be performed ",
                        "name": "return",
                        "type": "Boolean",
                        "desc": "Whether or not more pushes should be performed"
                      },
                      "params": [
                        {
                          "textRaw": "`chunk` {Buffer | null | String} Chunk of data to push into the read queue ",
                          "name": "chunk",
                          "type": "Buffer | null | String",
                          "desc": "Chunk of data to push into the read queue"
                        },
                        {
                          "textRaw": "`encoding` {String} Encoding of String chunks.  Must be a valid Buffer encoding, such as `'utf8'` or `'ascii'` ",
                          "name": "encoding",
                          "type": "String",
                          "desc": "Encoding of String chunks.  Must be a valid Buffer encoding, such as `'utf8'` or `'ascii'`",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "chunk"
                        },
                        {
                          "name": "encoding",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Note: <strong>This function should be called by Readable implementors, NOT\nby consumers of Readable streams.</strong>\n\n</p>\n<p>The <code>_read()</code> function will not be called again until at least one\n<code>push(chunk)</code> call is made.\n\n</p>\n<p>The <code>Readable</code> class works by putting data into a read queue to be\npulled out later by calling the <code>read()</code> method when the <code>&#39;readable&#39;</code>\nevent fires.\n\n</p>\n<p>The <code>push()</code> method will explicitly insert some data into the read\nqueue.  If it is called with <code>null</code> then it will signal the end of the\ndata (EOF).\n\n</p>\n<p>This API is designed to be as flexible as possible.  For example,\nyou may be wrapping a lower-level source which has some sort of\npause/resume mechanism, and a data callback.  In those cases, you\ncould wrap the low-level source object by doing something like this:\n\n</p>\n<pre><code class=\"javascript\">// source is an object with readStop() and readStart() methods,\n// and an `ondata` member that gets called when it has data, and\n// an `onend` member that gets called when the data is over.\n\nutil.inherits(SourceWrapper, Readable);\n\nfunction SourceWrapper(options) {\n  Readable.call(this, options);\n\n  this._source = getLowlevelSourceObject();\n  var self = this;\n\n  // Every time there&#39;s data, we push it into the internal buffer.\n  this._source.ondata = function(chunk) {\n    // if push() returns false, then we need to stop reading from source\n    if (!self.push(chunk))\n      self._source.readStop();\n  };\n\n  // When the source ends, we push the EOF-signalling `null` chunk\n  this._source.onend = function() {\n    self.push(null);\n  };\n}\n\n// _read will be called when the stream wants to pull more data in\n// the advisory size argument is ignored in this case.\nSourceWrapper.prototype._read = function(size) {\n  this._source.readStart();\n};</code></pre>\n"
                }
              ]
            }
          ],
          "classes": [
            {
              "textRaw": "Class: stream.Writable",
              "type": "class",
              "name": "stream.Writable",
              "desc": "<p><code>stream.Writable</code> is an abstract class designed to be extended with an\nunderlying implementation of the [<code>_write(chunk, encoding, callback)</code>][] method.\n\n</p>\n<p>Please see above under [API for Stream Consumers][] for how to consume\nwritable streams in your programs.  What follows is an explanation of\nhow to implement Writable streams in your programs.\n\n</p>\n",
              "methods": [
                {
                  "textRaw": "new stream.Writable([options])",
                  "type": "method",
                  "name": "Writable",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`options` {Object} ",
                          "options": [
                            {
                              "textRaw": "`highWaterMark` {Number} Buffer level when [`write()`][] starts returning false. Default=16kb ",
                              "name": "highWaterMark",
                              "type": "Number",
                              "desc": "Buffer level when [`write()`][] starts returning false. Default=16kb"
                            },
                            {
                              "textRaw": "`decodeStrings` {Boolean} Whether or not to decode strings into Buffers before passing them to [`_write()`][].  Default=true ",
                              "name": "decodeStrings",
                              "type": "Boolean",
                              "desc": "Whether or not to decode strings into Buffers before passing them to [`_write()`][].  Default=true"
                            },
                            {
                              "textRaw": "`objectMode` {Boolean} Whether or not the `write(anyObj)` is a valid operation. If set you can write arbitrary data instead of only `Buffer` / `String` data.  Default=false ",
                              "name": "objectMode",
                              "type": "Boolean",
                              "desc": "Whether or not the `write(anyObj)` is a valid operation. If set you can write arbitrary data instead of only `Buffer` / `String` data.  Default=false"
                            }
                          ],
                          "name": "options",
                          "type": "Object",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "options",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>In classes that extend the Writable class, make sure to call the\nconstructor so that the buffering settings can be properly\ninitialized.\n\n</p>\n"
                },
                {
                  "textRaw": "writable.\\_write(chunk, encoding, callback)",
                  "type": "method",
                  "name": "\\_write",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`chunk` {Buffer | String} The chunk to be written.  Will always be a buffer unless the `decodeStrings` option was set to `false`. ",
                          "name": "chunk",
                          "type": "Buffer | String",
                          "desc": "The chunk to be written.  Will always be a buffer unless the `decodeStrings` option was set to `false`."
                        },
                        {
                          "textRaw": "`encoding` {String} If the chunk is a string, then this is the encoding type.  Ignore chunk is a buffer.  Note that chunk will **always** be a buffer unless the `decodeStrings` option is explicitly set to `false`. ",
                          "name": "encoding",
                          "type": "String",
                          "desc": "If the chunk is a string, then this is the encoding type.  Ignore chunk is a buffer.  Note that chunk will **always** be a buffer unless the `decodeStrings` option is explicitly set to `false`."
                        },
                        {
                          "textRaw": "`callback` {Function} Call this function (optionally with an error argument) when you are done processing the supplied chunk. ",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Call this function (optionally with an error argument) when you are done processing the supplied chunk."
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "chunk"
                        },
                        {
                          "name": "encoding"
                        },
                        {
                          "name": "callback"
                        }
                      ]
                    }
                  ],
                  "desc": "<p>All Writable stream implementations must provide a [<code>_write()</code>][]\nmethod to send data to the underlying resource.\n\n</p>\n<p>Note: <strong>This function MUST NOT be called directly.</strong>  It should be\nimplemented by child classes, and called by the internal Writable\nclass methods only.\n\n</p>\n<p>Call the callback using the standard <code>callback(error)</code> pattern to\nsignal that the write completed successfully or with an error.\n\n</p>\n<p>If the <code>decodeStrings</code> flag is set in the constructor options, then\n<code>chunk</code> may be a string rather than a Buffer, and <code>encoding</code> will\nindicate the sort of string that it is.  This is to support\nimplementations that have an optimized handling for certain string\ndata encodings.  If you do not explicitly set the <code>decodeStrings</code>\noption to <code>false</code>, then you can safely ignore the <code>encoding</code> argument,\nand assume that <code>chunk</code> will always be a Buffer.\n\n</p>\n<p>This method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you <strong>are</strong> expected to override this method in\nyour own extension classes.\n\n\n</p>\n"
                }
              ]
            },
            {
              "textRaw": "Class: stream.Duplex",
              "type": "class",
              "name": "stream.Duplex",
              "desc": "<p>A &quot;duplex&quot; stream is one that is both Readable and Writable, such as a\nTCP socket connection.\n\n</p>\n<p>Note that <code>stream.Duplex</code> is an abstract class designed to be extended\nwith an underlying implementation of the <code>_read(size)</code> and\n[<code>_write(chunk, encoding, callback)</code>][] methods as you would with a\nReadable or Writable stream class.\n\n</p>\n<p>Since JavaScript doesn&#39;t have multiple prototypal inheritance, this\nclass prototypally inherits from Readable, and then parasitically from\nWritable.  It is thus up to the user to implement both the lowlevel\n<code>_read(n)</code> method as well as the lowlevel\n[<code>_write(chunk, encoding, callback)</code>][] method on extension duplex classes.\n\n</p>\n",
              "methods": [
                {
                  "textRaw": "new stream.Duplex(options)",
                  "type": "method",
                  "name": "Duplex",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`options` {Object} Passed to both Writable and Readable constructors. Also has the following fields: ",
                          "options": [
                            {
                              "textRaw": "`allowHalfOpen` {Boolean} Default=true.  If set to `false`, then the stream will automatically end the readable side when the writable side ends and vice versa. ",
                              "name": "allowHalfOpen",
                              "type": "Boolean",
                              "desc": "Default=true.  If set to `false`, then the stream will automatically end the readable side when the writable side ends and vice versa."
                            }
                          ],
                          "name": "options",
                          "type": "Object",
                          "desc": "Passed to both Writable and Readable constructors. Also has the following fields:"
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "options"
                        }
                      ]
                    }
                  ],
                  "desc": "<p>In classes that extend the Duplex class, make sure to call the\nconstructor so that the buffering settings can be properly\ninitialized.\n\n\n</p>\n"
                }
              ]
            },
            {
              "textRaw": "Class: stream.Transform",
              "type": "class",
              "name": "stream.Transform",
              "desc": "<p>A &quot;transform&quot; stream is a duplex stream where the output is causally\nconnected in some way to the input, such as a [zlib][] stream or a\n[crypto][] stream.\n\n</p>\n<p>There is no requirement that the output be the same size as the input,\nthe same number of chunks, or arrive at the same time.  For example, a\nHash stream will only ever have a single chunk of output which is\nprovided when the input is ended.  A zlib stream will produce output\nthat is either much smaller or much larger than its input.\n\n</p>\n<p>Rather than implement the [<code>_read()</code>][] and [<code>_write()</code>][] methods, Transform\nclasses must implement the <code>_transform()</code> method, and may optionally\nalso implement the <code>_flush()</code> method.  (See below.)\n\n</p>\n",
              "methods": [
                {
                  "textRaw": "new stream.Transform([options])",
                  "type": "method",
                  "name": "Transform",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`options` {Object} Passed to both Writable and Readable constructors. ",
                          "name": "options",
                          "type": "Object",
                          "desc": "Passed to both Writable and Readable constructors.",
                          "optional": true
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "options",
                          "optional": true
                        }
                      ]
                    }
                  ],
                  "desc": "<p>In classes that extend the Transform class, make sure to call the\nconstructor so that the buffering settings can be properly\ninitialized.\n\n</p>\n"
                },
                {
                  "textRaw": "transform.\\_transform(chunk, encoding, callback)",
                  "type": "method",
                  "name": "\\_transform",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`chunk` {Buffer | String} The chunk to be transformed.  Will always be a buffer unless the `decodeStrings` option was set to `false`. ",
                          "name": "chunk",
                          "type": "Buffer | String",
                          "desc": "The chunk to be transformed.  Will always be a buffer unless the `decodeStrings` option was set to `false`."
                        },
                        {
                          "textRaw": "`encoding` {String} If the chunk is a string, then this is the encoding type.  (Ignore if `decodeStrings` chunk is a buffer.) ",
                          "name": "encoding",
                          "type": "String",
                          "desc": "If the chunk is a string, then this is the encoding type.  (Ignore if `decodeStrings` chunk is a buffer.)"
                        },
                        {
                          "textRaw": "`callback` {Function} Call this function (optionally with an error argument and data) when you are done processing the supplied chunk. ",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Call this function (optionally with an error argument and data) when you are done processing the supplied chunk."
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "chunk"
                        },
                        {
                          "name": "encoding"
                        },
                        {
                          "name": "callback"
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Note: <strong>This function MUST NOT be called directly.</strong>  It should be\nimplemented by child classes, and called by the internal Transform\nclass methods only.\n\n</p>\n<p>All Transform stream implementations must provide a <code>_transform</code>\nmethod to accept input and produce output.\n\n</p>\n<p><code>_transform</code> should do whatever has to be done in this specific\nTransform class, to handle the bytes being written, and pass them off\nto the readable portion of the interface.  Do asynchronous I/O,\nprocess things, and so on.\n\n</p>\n<p>Call <code>transform.push(outputChunk)</code> 0 or more times to generate output\nfrom this input chunk, depending on how much data you want to output\nas a result of this chunk.\n\n</p>\n<p>Call the callback function only when the current chunk is completely\nconsumed.  Note that there may or may not be output as a result of any\nparticular input chunk. If you supply as the second argument to the\nit will be passed to push method, in other words the following are\nequivalent:\n\n</p>\n<pre><code class=\"javascript\">transform.prototype._transform = function (data, encoding, callback) {\n  this.push(data);\n  callback();\n}\n\ntransform.prototype._transform = function (data, encoding, callback) {\n  callback(null, data);\n}</code></pre>\n<p>This method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you <strong>are</strong> expected to override this method in\nyour own extension classes.\n\n</p>\n"
                },
                {
                  "textRaw": "transform.\\_flush(callback)",
                  "type": "method",
                  "name": "\\_flush",
                  "signatures": [
                    {
                      "params": [
                        {
                          "textRaw": "`callback` {Function} Call this function (optionally with an error argument) when you are done flushing any remaining data. ",
                          "name": "callback",
                          "type": "Function",
                          "desc": "Call this function (optionally with an error argument) when you are done flushing any remaining data."
                        }
                      ]
                    },
                    {
                      "params": [
                        {
                          "name": "callback"
                        }
                      ]
                    }
                  ],
                  "desc": "<p>Note: <strong>This function MUST NOT be called directly.</strong>  It MAY be implemented\nby child classes, and if so, will be called by the internal Transform\nclass methods only.\n\n</p>\n<p>In some cases, your transform operation may need to emit a bit more\ndata at the end of the stream.  For example, a <code>Zlib</code> compression\nstream will store up some internal state so that it can optimally\ncompress the output.  At the end, however, it needs to do the best it\ncan with what is left, so that the data will be complete.\n\n</p>\n<p>In those cases, you can implement a <code>_flush</code> method, which will be\ncalled at the very end, after all the written data is consumed, but\nbefore emitting <code>end</code> to signal the end of the readable side.  Just\nlike with <code>_transform</code>, call <code>transform.push(chunk)</code> zero or more\ntimes, as appropriate, and call <code>callback</code> when the flush operation is\ncomplete.\n\n</p>\n<p>This method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you <strong>are</strong> expected to override this method in\nyour own extension classes.\n\n</p>\n"
                }
              ],
              "modules": [
                {
                  "textRaw": "Events: 'finish' and 'end'",
                  "name": "events:_'finish'_and_'end'",
                  "desc": "<p>The [<code>finish</code>][] and [<code>end</code>][] events are from the parent Writable\nand Readable classes respectively. The <code>finish</code> event is fired after\n<code>.end()</code> is called and all chunks have been processed by <code>_transform</code>,\n<code>end</code> is fired after all data has been output which is after the callback\nin <code>_flush</code> has been called.\n\n</p>\n<h4>Example: <code>SimpleProtocol</code> parser v2</h4>\n<p>The example above of a simple protocol parser can be implemented\nsimply by using the higher level [Transform][] stream class, similar to\nthe <code>parseHeader</code> and <code>SimpleProtocol v1</code> examples above.\n\n</p>\n<p>In this example, rather than providing the input as an argument, it\nwould be piped into the parser, which is a more idiomatic Node stream\napproach.\n\n</p>\n<pre><code class=\"javascript\">var util = require(&#39;util&#39;);\nvar Transform = require(&#39;stream&#39;).Transform;\nutil.inherits(SimpleProtocol, Transform);\n\nfunction SimpleProtocol(options) {\n  if (!(this instanceof SimpleProtocol))\n    return new SimpleProtocol(options);\n\n  Transform.call(this, options);\n  this._inBody = false;\n  this._sawFirstCr = false;\n  this._rawHeader = [];\n  this.header = null;\n}\n\nSimpleProtocol.prototype._transform = function(chunk, encoding, done) {\n  if (!this._inBody) {\n    // check if the chunk has a \\n\\n\n    var split = -1;\n    for (var i = 0; i &lt; chunk.length; i++) {\n      if (chunk[i] === 10) { // &#39;\\n&#39;\n        if (this._sawFirstCr) {\n          split = i;\n          break;\n        } else {\n          this._sawFirstCr = true;\n        }\n      } else {\n        this._sawFirstCr = false;\n      }\n    }\n\n    if (split === -1) {\n      // still waiting for the \\n\\n\n      // stash the chunk, and try again.\n      this._rawHeader.push(chunk);\n    } else {\n      this._inBody = true;\n      var h = chunk.slice(0, split);\n      this._rawHeader.push(h);\n      var header = Buffer.concat(this._rawHeader).toString();\n      try {\n        this.header = JSON.parse(header);\n      } catch (er) {\n        this.emit(&#39;error&#39;, new Error(&#39;invalid simple protocol data&#39;));\n        return;\n      }\n      // and let them know that we are done parsing the header.\n      this.emit(&#39;header&#39;, this.header);\n\n      // now, because we got some extra data, emit this first.\n      this.push(chunk.slice(split));\n    }\n  } else {\n    // from there on, just provide the data to our consumer as-is.\n    this.push(chunk);\n  }\n  done();\n};\n\n// Usage:\n// var parser = new SimpleProtocol();\n// source.pipe(parser)\n// Now parser is a readable stream that will emit &#39;header&#39;\n// with the parsed header data.</code></pre>\n",
                  "type": "module",
                  "displayName": "Events: 'finish' and 'end'"
                }
              ]
            },
            {
              "textRaw": "Class: stream.PassThrough",
              "type": "class",
              "name": "stream.PassThrough",
              "desc": "<p>This is a trivial implementation of a [Transform][] stream that simply\npasses the input bytes across to the output.  Its purpose is mainly\nfor examples and testing, but there are occasionally use cases where\nit can come in handy as a building block for novel sorts of streams.\n\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Streams: Under the Hood",
          "name": "Streams: Under the Hood",
          "type": "misc",
          "miscs": [
            {
              "textRaw": "Buffering",
              "name": "Buffering",
              "type": "misc",
              "desc": "<p>Both Writable and Readable streams will buffer data on an internal\nobject called <code>_writableState.buffer</code> or <code>_readableState.buffer</code>,\nrespectively.\n\n</p>\n<p>The amount of data that will potentially be buffered depends on the\n<code>highWaterMark</code> option which is passed into the constructor.\n\n</p>\n<p>Buffering in Readable streams happens when the implementation calls\n[<code>stream.push(chunk)</code>][].  If the consumer of the Stream does not call\n<code>stream.read()</code>, then the data will sit in the internal queue until it\nis consumed.\n\n</p>\n<p>Buffering in Writable streams happens when the user calls\n[<code>stream.write(chunk)</code>][] repeatedly, even when <code>write()</code> returns <code>false</code>.\n\n</p>\n<p>The purpose of streams, especially with the <code>pipe()</code> method, is to\nlimit the buffering of data to acceptable levels, so that sources and\ndestinations of varying speed will not overwhelm the available memory.\n\n</p>\n"
            },
            {
              "textRaw": "`stream.read(0)`",
              "name": "`stream.read(0)`",
              "desc": "<p>There are some cases where you want to trigger a refresh of the\nunderlying readable stream mechanisms, without actually consuming any\ndata.  In that case, you can call <code>stream.read(0)</code>, which will always\nreturn null.\n\n</p>\n<p>If the internal read buffer is below the <code>highWaterMark</code>, and the\nstream is not currently reading, then calling <code>read(0)</code> will trigger\na low-level <code>_read</code> call.\n\n</p>\n<p>There is almost never a need to do this.  However, you will see some\ncases in Node&#39;s internals where this is done, particularly in the\nReadable stream class internals.\n\n</p>\n",
              "type": "misc",
              "displayName": "`stream.read(0)`"
            },
            {
              "textRaw": "`stream.push('')`",
              "name": "`stream.push('')`",
              "desc": "<p>Pushing a zero-byte string or Buffer (when not in [Object mode][]) has an\ninteresting side effect.  Because it <em>is</em> a call to\n[<code>stream.push()</code>][], it will end the <code>reading</code> process.  However, it\ndoes <em>not</em> add any data to the readable buffer, so there&#39;s nothing for\na user to consume.\n\n</p>\n<p>Very rarely, there are cases where you have no data to provide now,\nbut the consumer of your stream (or, perhaps, another bit of your own\ncode) will know when to check again, by calling <code>stream.read(0)</code>.  In\nthose cases, you <em>may</em> call <code>stream.push(&#39;&#39;)</code>.\n\n</p>\n<p>So far, the only use case for this functionality is in the\n[tls.CryptoStream][] class, which is deprecated in Node v0.12.  If you\nfind that you have to use <code>stream.push(&#39;&#39;)</code>, please consider another\napproach, because it almost certainly indicates that something is\nhorribly wrong.\n\n</p>\n",
              "type": "misc",
              "displayName": "`stream.push('')`"
            },
            {
              "textRaw": "Compatibility with Older Node Versions",
              "name": "Compatibility with Older Node Versions",
              "type": "misc",
              "desc": "<p>In versions of Node prior to v0.10, the Readable stream interface was\nsimpler, but also less powerful and less useful.\n\n</p>\n<ul>\n<li>Rather than waiting for you to call the <code>read()</code> method, <code>&#39;data&#39;</code>\nevents would start emitting immediately.  If you needed to do some\nI/O to decide how to handle data, then you had to store the chunks\nin some kind of buffer so that they would not be lost.</li>\n<li>The <code>pause()</code> method was advisory, rather than guaranteed.  This\nmeant that you still had to be prepared to receive <code>&#39;data&#39;</code> events\neven when the stream was in a paused state.</li>\n</ul>\n<p>In Node v0.10, the Readable class described below was added.  For\nbackwards compatibility with older Node programs, Readable streams\nswitch into &quot;flowing mode&quot; when a <code>&#39;data&#39;</code> event handler is added, or\nwhen the <code>pause()</code> or <code>resume()</code> methods are called.  The effect is\nthat, even if you are not using the new <code>read()</code> method and\n<code>&#39;readable&#39;</code> event, you no longer have to worry about losing <code>&#39;data&#39;</code>\nchunks.\n\n</p>\n<p>Most programs will continue to function normally.  However, this\nintroduces an edge case in the following conditions:\n\n</p>\n<ul>\n<li>No <code>&#39;data&#39;</code> event handler is added.</li>\n<li>The <code>pause()</code> and <code>resume()</code> methods are never called.</li>\n</ul>\n<p>For example, consider the following code:\n\n</p>\n<pre><code class=\"javascript\">// WARNING!  BROKEN!\nnet.createServer(function(socket) {\n\n  // we add an &#39;end&#39; method, but never consume the data\n  socket.on(&#39;end&#39;, function() {\n    // It will never get here.\n    socket.end(&#39;I got your message (but didnt read it)\\n&#39;);\n  });\n\n}).listen(1337);</code></pre>\n<p>In versions of node prior to v0.10, the incoming message data would be\nsimply discarded.  However, in Node v0.10 and beyond, the socket will\nremain paused forever.\n\n</p>\n<p>The workaround in this situation is to call the <code>resume()</code> method to\ntrigger &quot;old mode&quot; behavior:\n\n</p>\n<pre><code class=\"javascript\">// Workaround\nnet.createServer(function(socket) {\n\n  socket.on(&#39;end&#39;, function() {\n    socket.end(&#39;I got your message (but didnt read it)\\n&#39;);\n  });\n\n  // start the flow of data, discarding it.\n  socket.resume();\n\n}).listen(1337);</code></pre>\n<p>In addition to new Readable streams switching into flowing-mode, pre-v0.10\nstyle streams can be wrapped in a Readable class using the <code>wrap()</code>\nmethod.\n\n\n</p>\n"
            },
            {
              "textRaw": "Object Mode",
              "name": "Object Mode",
              "type": "misc",
              "desc": "<p>Normally, Streams operate on Strings and Buffers exclusively.\n\n</p>\n<p>Streams that are in <strong>object mode</strong> can emit generic JavaScript values\nother than Buffers and Strings.\n\n</p>\n<p>A Readable stream in object mode will always return a single item from\na call to <code>stream.read(size)</code>, regardless of what the size argument\nis.\n\n</p>\n<p>A Writable stream in object mode will always ignore the <code>encoding</code>\nargument to <code>stream.write(data, encoding)</code>.\n\n</p>\n<p>The special value <code>null</code> still retains its special value for object\nmode streams.  That is, for object mode readable streams, <code>null</code> as a\nreturn value from <code>stream.read()</code> indicates that there is no more\ndata, and [<code>stream.push(null)</code>][] will signal the end of stream data\n(<code>EOF</code>).\n\n</p>\n<p>No streams in Node core are object mode streams.  This pattern is only\nused by userland streaming libraries.\n\n</p>\n<p>You should set <code>objectMode</code> in your stream child class constructor on\nthe options object.  Setting <code>objectMode</code> mid-stream is not safe.\n\n</p>\n"
            },
            {
              "textRaw": "State Objects",
              "name": "state_objects",
              "desc": "<p>[Readable][] streams have a member object called <code>_readableState</code>.\n[Writable][] streams have a member object called <code>_writableState</code>.\n[Duplex][] streams have both.\n\n</p>\n<p><strong>These objects should generally not be modified in child classes.</strong>\nHowever, if you have a Duplex or Transform stream that should be in\n<code>objectMode</code> on the readable side, and not in <code>objectMode</code> on the\nwritable side, then you may do this in the constructor by setting the\nflag explicitly on the appropriate state object.\n\n</p>\n<pre><code class=\"javascript\">var util = require(&#39;util&#39;);\nvar StringDecoder = require(&#39;string_decoder&#39;).StringDecoder;\nvar Transform = require(&#39;stream&#39;).Transform;\nutil.inherits(JSONParseStream, Transform);\n\n// Gets \\n-delimited JSON string data, and emits the parsed objects\nfunction JSONParseStream(options) {\n  if (!(this instanceof JSONParseStream))\n    return new JSONParseStream(options);\n\n  Transform.call(this, options);\n  this._writableState.objectMode = false;\n  this._readableState.objectMode = true;\n  this._buffer = &#39;&#39;;\n  this._decoder = new StringDecoder(&#39;utf8&#39;);\n}\n\nJSONParseStream.prototype._transform = function(chunk, encoding, cb) {\n  this._buffer += this._decoder.write(chunk);\n  // split on newlines\n  var lines = this._buffer.split(/\\r?\\n/);\n  // keep the last partial line buffered\n  this._buffer = lines.pop();\n  for (var l = 0; l &lt; lines.length; l++) {\n    var line = lines[l];\n    try {\n      var obj = JSON.parse(line);\n    } catch (er) {\n      this.emit(&#39;error&#39;, er);\n      return;\n    }\n    // push the parsed object out to the readable consumer\n    this.push(obj);\n  }\n  cb();\n};\n\nJSONParseStream.prototype._flush = function(cb) {\n  // Just handle any leftover\n  var rem = this._buffer.trim();\n  if (rem) {\n    try {\n      var obj = JSON.parse(rem);\n    } catch (er) {\n      this.emit(&#39;error&#39;, er);\n      return;\n    }\n    // push the parsed object out to the readable consumer\n    this.push(obj);\n  }\n  cb();\n};</code></pre>\n<p>The state objects contain other useful information for debugging the\nstate of streams in your programs.  It is safe to look at them, but\nbeyond setting option flags in the constructor, it is <strong>not</strong> safe to\nmodify them.\n\n\n</p>\n",
              "type": "misc",
              "displayName": "State Objects"
            }
          ]
        }
      ],
      "examples": [
        {
          "textRaw": "Class: stream.Readable",
          "type": "example",
          "name": "stream.Readable",
          "desc": "<p><code>stream.Readable</code> is an abstract class designed to be extended with an\nunderlying implementation of the [<code>_read(size)</code>][] method.\n\n</p>\n<p>Please see above under [API for Stream Consumers][] for how to consume\nstreams in your programs.  What follows is an explanation of how to\nimplement Readable streams in your programs.\n\n</p>\n<h4>Example: A Counting Stream</h4>\n<p>This is a basic example of a Readable stream.  It emits the numerals\nfrom 1 to 1,000,000 in ascending order, and then ends.\n\n</p>\n<pre><code class=\"javascript\">var Readable = require(&#39;stream&#39;).Readable;\nvar util = require(&#39;util&#39;);\nutil.inherits(Counter, Readable);\n\nfunction Counter(opt) {\n  Readable.call(this, opt);\n  this._max = 1000000;\n  this._index = 1;\n}\n\nCounter.prototype._read = function() {\n  var i = this._index++;\n  if (i &gt; this._max)\n    this.push(null);\n  else {\n    var str = &#39;&#39; + i;\n    var buf = new Buffer(str, &#39;ascii&#39;);\n    this.push(buf);\n  }\n};</code></pre>\n<h4>Example: SimpleProtocol v1 (Sub-optimal)</h4>\n<p>This is similar to the <code>parseHeader</code> function described above, but\nimplemented as a custom stream.  Also, note that this implementation\ndoes not convert the incoming data to a string.\n\n</p>\n<p>However, this would be better implemented as a [Transform][] stream.  See\nbelow for a better implementation.\n\n</p>\n<pre><code class=\"javascript\">// A parser for a simple data protocol.\n// The &quot;header&quot; is a JSON object, followed by 2 \\n characters, and\n// then a message body.\n//\n// NOTE: This can be done more simply as a Transform stream!\n// Using Readable directly for this is sub-optimal.  See the\n// alternative example below under the Transform section.\n\nvar Readable = require(&#39;stream&#39;).Readable;\nvar util = require(&#39;util&#39;);\n\nutil.inherits(SimpleProtocol, Readable);\n\nfunction SimpleProtocol(source, options) {\n  if (!(this instanceof SimpleProtocol))\n    return new SimpleProtocol(source, options);\n\n  Readable.call(this, options);\n  this._inBody = false;\n  this._sawFirstCr = false;\n\n  // source is a readable stream, such as a socket or file\n  this._source = source;\n\n  var self = this;\n  source.on(&#39;end&#39;, function() {\n    self.push(null);\n  });\n\n  // give it a kick whenever the source is readable\n  // read(0) will not consume any bytes\n  source.on(&#39;readable&#39;, function() {\n    self.read(0);\n  });\n\n  this._rawHeader = [];\n  this.header = null;\n}\n\nSimpleProtocol.prototype._read = function(n) {\n  if (!this._inBody) {\n    var chunk = this._source.read();\n\n    // if the source doesn&#39;t have data, we don&#39;t have data yet.\n    if (chunk === null)\n      return this.push(&#39;&#39;);\n\n    // check if the chunk has a \\n\\n\n    var split = -1;\n    for (var i = 0; i &lt; chunk.length; i++) {\n      if (chunk[i] === 10) { // &#39;\\n&#39;\n        if (this._sawFirstCr) {\n          split = i;\n          break;\n        } else {\n          this._sawFirstCr = true;\n        }\n      } else {\n        this._sawFirstCr = false;\n      }\n    }\n\n    if (split === -1) {\n      // still waiting for the \\n\\n\n      // stash the chunk, and try again.\n      this._rawHeader.push(chunk);\n      this.push(&#39;&#39;);\n    } else {\n      this._inBody = true;\n      var h = chunk.slice(0, split);\n      this._rawHeader.push(h);\n      var header = Buffer.concat(this._rawHeader).toString();\n      try {\n        this.header = JSON.parse(header);\n      } catch (er) {\n        this.emit(&#39;error&#39;, new Error(&#39;invalid simple protocol data&#39;));\n        return;\n      }\n      // now, because we got some extra data, unshift the rest\n      // back into the read queue so that our consumer will see it.\n      var b = chunk.slice(split);\n      this.unshift(b);\n\n      // and let them know that we are done parsing the header.\n      this.emit(&#39;header&#39;, this.header);\n    }\n  } else {\n    // from there on, just provide the data to our consumer.\n    // careful not to push(null), since that would indicate EOF.\n    var chunk = this._source.read();\n    if (chunk) this.push(chunk);\n  }\n};\n\n// Usage:\n// var parser = new SimpleProtocol(source);\n// Now parser is a readable stream that will emit &#39;header&#39;\n// with the parsed header data.</code></pre>\n",
          "methods": [
            {
              "textRaw": "new stream.Readable([options])",
              "type": "method",
              "name": "Readable",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`options` {Object} ",
                      "options": [
                        {
                          "textRaw": "`highWaterMark` {Number} The maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource.  Default=16kb ",
                          "name": "highWaterMark",
                          "type": "Number",
                          "desc": "The maximum number of bytes to store in the internal buffer before ceasing to read from the underlying resource.  Default=16kb"
                        },
                        {
                          "textRaw": "`encoding` {String} If specified, then buffers will be decoded to strings using the specified encoding.  Default=null ",
                          "name": "encoding",
                          "type": "String",
                          "desc": "If specified, then buffers will be decoded to strings using the specified encoding.  Default=null"
                        },
                        {
                          "textRaw": "`objectMode` {Boolean} Whether this stream should behave as a stream of objects. Meaning that stream.read(n) returns a single value instead of a Buffer of size n.  Default=false ",
                          "name": "objectMode",
                          "type": "Boolean",
                          "desc": "Whether this stream should behave as a stream of objects. Meaning that stream.read(n) returns a single value instead of a Buffer of size n.  Default=false"
                        }
                      ],
                      "name": "options",
                      "type": "Object",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "options",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>In classes that extend the Readable class, make sure to call the\nReadable constructor so that the buffering settings can be properly\ninitialized.\n\n</p>\n"
            },
            {
              "textRaw": "readable.\\_read(size)",
              "type": "method",
              "name": "\\_read",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`size` {Number} Number of bytes to read asynchronously ",
                      "name": "size",
                      "type": "Number",
                      "desc": "Number of bytes to read asynchronously"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "size"
                    }
                  ]
                }
              ],
              "desc": "<p>Note: <strong>Implement this function, but do NOT call it directly.</strong>\n\n</p>\n<p>This function should NOT be called directly.  It should be implemented\nby child classes, and only called by the internal Readable class\nmethods.\n\n</p>\n<p>All Readable stream implementations must provide a <code>_read</code> method to\nfetch data from the underlying resource.\n\n</p>\n<p>This method is prefixed with an underscore because it is internal to\nthe class that defines it, and should not be called directly by user\nprograms.  However, you <strong>are</strong> expected to override this method in\nyour own extension classes.\n\n</p>\n<p>When data is available, put it into the read queue by calling\n<code>readable.push(chunk)</code>.  If <code>push</code> returns false, then you should stop\nreading.  When <code>_read</code> is called again, you should start pushing more\ndata.\n\n</p>\n<p>The <code>size</code> argument is advisory.  Implementations where a &quot;read&quot; is a\nsingle call that returns data can use this to know how much data to\nfetch.  Implementations where that is not relevant, such as TCP or\nTLS, may ignore this argument, and simply provide data whenever it\nbecomes available.  There is no need, for example to &quot;wait&quot; until\n<code>size</code> bytes are available before calling [<code>stream.push(chunk)</code>][].\n\n</p>\n"
            },
            {
              "textRaw": "readable.push(chunk, [encoding])",
              "type": "method",
              "name": "push",
              "signatures": [
                {
                  "return": {
                    "textRaw": "return {Boolean} Whether or not more pushes should be performed ",
                    "name": "return",
                    "type": "Boolean",
                    "desc": "Whether or not more pushes should be performed"
                  },
                  "params": [
                    {
                      "textRaw": "`chunk` {Buffer | null | String} Chunk of data to push into the read queue ",
                      "name": "chunk",
                      "type": "Buffer | null | String",
                      "desc": "Chunk of data to push into the read queue"
                    },
                    {
                      "textRaw": "`encoding` {String} Encoding of String chunks.  Must be a valid Buffer encoding, such as `'utf8'` or `'ascii'` ",
                      "name": "encoding",
                      "type": "String",
                      "desc": "Encoding of String chunks.  Must be a valid Buffer encoding, such as `'utf8'` or `'ascii'`",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "chunk"
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Note: <strong>This function should be called by Readable implementors, NOT\nby consumers of Readable streams.</strong>\n\n</p>\n<p>The <code>_read()</code> function will not be called again until at least one\n<code>push(chunk)</code> call is made.\n\n</p>\n<p>The <code>Readable</code> class works by putting data into a read queue to be\npulled out later by calling the <code>read()</code> method when the <code>&#39;readable&#39;</code>\nevent fires.\n\n</p>\n<p>The <code>push()</code> method will explicitly insert some data into the read\nqueue.  If it is called with <code>null</code> then it will signal the end of the\ndata (EOF).\n\n</p>\n<p>This API is designed to be as flexible as possible.  For example,\nyou may be wrapping a lower-level source which has some sort of\npause/resume mechanism, and a data callback.  In those cases, you\ncould wrap the low-level source object by doing something like this:\n\n</p>\n<pre><code class=\"javascript\">// source is an object with readStop() and readStart() methods,\n// and an `ondata` member that gets called when it has data, and\n// an `onend` member that gets called when the data is over.\n\nutil.inherits(SourceWrapper, Readable);\n\nfunction SourceWrapper(options) {\n  Readable.call(this, options);\n\n  this._source = getLowlevelSourceObject();\n  var self = this;\n\n  // Every time there&#39;s data, we push it into the internal buffer.\n  this._source.ondata = function(chunk) {\n    // if push() returns false, then we need to stop reading from source\n    if (!self.push(chunk))\n      self._source.readStop();\n  };\n\n  // When the source ends, we push the EOF-signalling `null` chunk\n  this._source.onend = function() {\n    self.push(null);\n  };\n}\n\n// _read will be called when the stream wants to pull more data in\n// the advisory size argument is ignored in this case.\nSourceWrapper.prototype._read = function(size) {\n  this._source.readStart();\n};</code></pre>\n"
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "Stream"
    },
    {
      "textRaw": "Crypto",
      "name": "crypto",
      "desc": "<pre><code>Stability: 2 - Unstable; API changes are being discussed for\nfuture versions.  Breaking changes will be minimized.  See below.</code></pre>\n<p>Use <code>require(&#39;crypto&#39;)</code> to access this module.\n\n</p>\n<p>The crypto module offers a way of encapsulating secure credentials to be\nused as part of a secure HTTPS net or http connection.\n\n</p>\n<p>It also offers a set of wrappers for OpenSSL&#39;s hash, hmac, cipher,\ndecipher, sign and verify methods.\n\n\n</p>\n",
      "methods": [
        {
          "textRaw": "crypto.getCiphers()",
          "type": "method",
          "name": "getCiphers",
          "desc": "<p>Returns an array with the names of the supported ciphers.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var ciphers = crypto.getCiphers();\nconsole.log(ciphers); // [&#39;AES-128-CBC&#39;, &#39;AES-128-CBC-HMAC-SHA1&#39;, ...]</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "crypto.getHashes()",
          "type": "method",
          "name": "getHashes",
          "desc": "<p>Returns an array with the names of the supported hash algorithms.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var hashes = crypto.getHashes();\nconsole.log(hashes); // [&#39;sha&#39;, &#39;sha1&#39;, &#39;sha1WithRSAEncryption&#39;, ...]</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "crypto.createCredentials(details)",
          "type": "method",
          "name": "createCredentials",
          "desc": "<p>Creates a credentials object, with the optional details being a\ndictionary with keys:\n\n</p>\n<ul>\n<li><code>pfx</code> : A string or buffer holding the PFX or PKCS12 encoded private\nkey, certificate and CA certificates</li>\n<li><code>key</code> : A string holding the PEM encoded private key</li>\n<li><code>passphrase</code> : A string of passphrase for the private key or pfx</li>\n<li><code>cert</code> : A string holding the PEM encoded certificate</li>\n<li><code>ca</code> : Either a string or list of strings of PEM encoded CA\ncertificates to trust.</li>\n<li><code>crl</code> : Either a string or list of strings of PEM encoded CRLs\n(Certificate Revocation List)</li>\n<li><code>ciphers</code>: A string describing the ciphers to use or exclude.\nConsult\n<a href=\"http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT\">http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT</a>\nfor details on the format.</li>\n</ul>\n<p>If no &#39;ca&#39; details are given, then node.js will use the default\npublicly trusted list of CAs as given in\n</p>\n<p><a href=\"http://mxr.mozilla.org/mozilla/source/security/nss/lib/ckfw/builtins/certdata.txt\">http://mxr.mozilla.org/mozilla/source/security/nss/lib/ckfw/builtins/certdata.txt</a>.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "details"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createHash(algorithm)",
          "type": "method",
          "name": "createHash",
          "desc": "<p>Creates and returns a hash object, a cryptographic hash with the given\nalgorithm which can be used to generate hash digests.\n\n</p>\n<p><code>algorithm</code> is dependent on the available algorithms supported by the\nversion of OpenSSL on the platform. Examples are <code>&#39;sha1&#39;</code>, <code>&#39;md5&#39;</code>,\n<code>&#39;sha256&#39;</code>, <code>&#39;sha512&#39;</code>, etc.  On recent releases, <code>openssl\nlist-message-digest-algorithms</code> will display the available digest\nalgorithms.\n\n</p>\n<p>Example: this program that takes the sha1 sum of a file\n\n</p>\n<pre><code>var filename = process.argv[2];\nvar crypto = require(&#39;crypto&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar shasum = crypto.createHash(&#39;sha1&#39;);\n\nvar s = fs.ReadStream(filename);\ns.on(&#39;data&#39;, function(d) {\n  shasum.update(d);\n});\n\ns.on(&#39;end&#39;, function() {\n  var d = shasum.digest(&#39;hex&#39;);\n  console.log(d + &#39;  &#39; + filename);\n});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "algorithm"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createHmac(algorithm, key)",
          "type": "method",
          "name": "createHmac",
          "desc": "<p>Creates and returns a hmac object, a cryptographic hmac with the given\nalgorithm and key.\n\n</p>\n<p>It is a <a href=\"stream.html\">stream</a> that is both readable and writable.  The\nwritten data is used to compute the hmac.  Once the writable side of\nthe stream is ended, use the <code>read()</code> method to get the computed\ndigest.  The legacy <code>update</code> and <code>digest</code> methods are also supported.\n\n</p>\n<p><code>algorithm</code> is dependent on the available algorithms supported by\nOpenSSL - see createHash above.  <code>key</code> is the hmac key to be used.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "algorithm"
                },
                {
                  "name": "key"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createCipher(algorithm, password)",
          "type": "method",
          "name": "createCipher",
          "desc": "<p>Creates and returns a cipher object, with the given algorithm and\npassword.\n\n</p>\n<p><code>algorithm</code> is dependent on OpenSSL, examples are <code>&#39;aes192&#39;</code>, etc.  On\nrecent releases, <code>openssl list-cipher-algorithms</code> will display the\navailable cipher algorithms.  <code>password</code> is used to derive key and IV,\nwhich must be a <code>&#39;binary&#39;</code> encoded string or a <a href=\"buffer.html\">buffer</a>.\n\n</p>\n<p>It is a <a href=\"stream.html\">stream</a> that is both readable and writable.  The\nwritten data is used to compute the hash.  Once the writable side of\nthe stream is ended, use the <code>read()</code> method to get the enciphered\ncontents.  The legacy <code>update</code> and <code>final</code> methods are also supported.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "algorithm"
                },
                {
                  "name": "password"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createCipheriv(algorithm, key, iv)",
          "type": "method",
          "name": "createCipheriv",
          "desc": "<p>Creates and returns a cipher object, with the given algorithm, key and\niv.\n\n</p>\n<p><code>algorithm</code> is the same as the argument to <code>createCipher()</code>.  <code>key</code> is\nthe raw key used by the algorithm.  <code>iv</code> is an <a href=\"http://en.wikipedia.org/wiki/Initialization_vector\">initialization\nvector</a>.\n\n</p>\n<p><code>key</code> and <code>iv</code> must be <code>&#39;binary&#39;</code> encoded strings or\n<a href=\"buffer.html\">buffers</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "algorithm"
                },
                {
                  "name": "key"
                },
                {
                  "name": "iv"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createDecipher(algorithm, password)",
          "type": "method",
          "name": "createDecipher",
          "desc": "<p>Creates and returns a decipher object, with the given algorithm and\nkey.  This is the mirror of the [createCipher()][] above.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "algorithm"
                },
                {
                  "name": "password"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createDecipheriv(algorithm, key, iv)",
          "type": "method",
          "name": "createDecipheriv",
          "desc": "<p>Creates and returns a decipher object, with the given algorithm, key\nand iv.  This is the mirror of the [createCipheriv()][] above.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "algorithm"
                },
                {
                  "name": "key"
                },
                {
                  "name": "iv"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createSign(algorithm)",
          "type": "method",
          "name": "createSign",
          "desc": "<p>Creates and returns a signing object, with the given algorithm.  On\nrecent OpenSSL releases, <code>openssl list-public-key-algorithms</code> will\ndisplay the available signing algorithms. Examples are <code>&#39;RSA-SHA256&#39;</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "algorithm"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createVerify(algorithm)",
          "type": "method",
          "name": "createVerify",
          "desc": "<p>Creates and returns a verification object, with the given algorithm.\nThis is the mirror of the signing object above.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "algorithm"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createDiffieHellman(prime_length)",
          "type": "method",
          "name": "createDiffieHellman",
          "desc": "<p>Creates a Diffie-Hellman key exchange object and generates a prime of\nthe given bit length. The generator used is <code>2</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "prime_length"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.createDiffieHellman(prime, [encoding])",
          "type": "method",
          "name": "createDiffieHellman",
          "desc": "<p>Creates a Diffie-Hellman key exchange object using the supplied prime.\nThe generator used is <code>2</code>. Encoding can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or\n<code>&#39;base64&#39;</code>.  If no encoding is specified, then a buffer is expected.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "prime"
                },
                {
                  "name": "encoding",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.getDiffieHellman(group_name)",
          "type": "method",
          "name": "getDiffieHellman",
          "desc": "<p>Creates a predefined Diffie-Hellman key exchange object.  The\nsupported groups are: <code>&#39;modp1&#39;</code>, <code>&#39;modp2&#39;</code>, <code>&#39;modp5&#39;</code> (defined in [RFC\n2412][]) and <code>&#39;modp14&#39;</code>, <code>&#39;modp15&#39;</code>, <code>&#39;modp16&#39;</code>, <code>&#39;modp17&#39;</code>,\n<code>&#39;modp18&#39;</code> (defined in [RFC 3526][]).  The returned object mimics the\ninterface of objects created by [crypto.createDiffieHellman()][]\nabove, but will not allow to change the keys (with\n[diffieHellman.setPublicKey()][] for example).  The advantage of using\nthis routine is that the parties don&#39;t have to generate nor exchange\ngroup modulus beforehand, saving both processor and communication\ntime.\n\n</p>\n<p>Example (obtaining a shared secret):\n\n</p>\n<pre><code>var crypto = require(&#39;crypto&#39;);\nvar alice = crypto.getDiffieHellman(&#39;modp5&#39;);\nvar bob = crypto.getDiffieHellman(&#39;modp5&#39;);\n\nalice.generateKeys();\nbob.generateKeys();\n\nvar alice_secret = alice.computeSecret(bob.getPublicKey(), null, &#39;hex&#39;);\nvar bob_secret = bob.computeSecret(alice.getPublicKey(), null, &#39;hex&#39;);\n\n/* alice_secret and bob_secret should be the same */\nconsole.log(alice_secret == bob_secret);</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "group_name"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.pbkdf2(password, salt, iterations, keylen, callback)",
          "type": "method",
          "name": "pbkdf2",
          "desc": "<p>Asynchronous PBKDF2 applies pseudorandom function HMAC-SHA1 to derive\na key of given length from the given password, salt and iterations.\nThe callback gets two arguments <code>(err, derivedKey)</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "password"
                },
                {
                  "name": "salt"
                },
                {
                  "name": "iterations"
                },
                {
                  "name": "keylen"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.pbkdf2Sync(password, salt, iterations, keylen)",
          "type": "method",
          "name": "pbkdf2Sync",
          "desc": "<p>Synchronous PBKDF2 function.  Returns derivedKey or throws error.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "password"
                },
                {
                  "name": "salt"
                },
                {
                  "name": "iterations"
                },
                {
                  "name": "keylen"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.randomBytes(size, [callback])",
          "type": "method",
          "name": "randomBytes",
          "desc": "<p>Generates cryptographically strong pseudo-random data. Usage:\n\n</p>\n<pre><code>// async\ncrypto.randomBytes(256, function(ex, buf) {\n  if (ex) throw ex;\n  console.log(&#39;Have %d bytes of random data: %s&#39;, buf.length, buf);\n});\n\n// sync\ntry {\n  var buf = crypto.randomBytes(256);\n  console.log(&#39;Have %d bytes of random data: %s&#39;, buf.length, buf);\n} catch (ex) {\n  // handle error\n  // most likely, entropy sources are drained\n}</code></pre>\n<p>NOTE: Will throw error or invoke callback with error, if there is not enough\naccumulated entropy to generate cryptographically strong data. In other words,\n<code>crypto.randomBytes</code> without callback will not block even if all entropy sources\nare drained.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "size"
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "crypto.pseudoRandomBytes(size, [callback])",
          "type": "method",
          "name": "pseudoRandomBytes",
          "desc": "<p>Generates <em>non</em>-cryptographically strong pseudo-random data. The data\nreturned will be unique if it is sufficiently long, but is not\nnecessarily unpredictable. For this reason, the output of this\nfunction should never be used where unpredictability is important,\nsuch as in the generation of encryption keys.\n\n</p>\n<p>Usage is otherwise identical to <code>crypto.randomBytes</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "size"
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ]
        }
      ],
      "classes": [
        {
          "textRaw": "Class: Hash",
          "type": "class",
          "name": "Hash",
          "desc": "<p>The class for creating hash digests of data.\n\n</p>\n<p>It is a <a href=\"stream.html\">stream</a> that is both readable and writable.  The\nwritten data is used to compute the hash.  Once the writable side of\nthe stream is ended, use the <code>read()</code> method to get the computed hash\ndigest.  The legacy <code>update</code> and <code>digest</code> methods are also supported.\n\n</p>\n<p>Returned by <code>crypto.createHash</code>.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "hash.update(data, [input_encoding])",
              "type": "method",
              "name": "update",
              "desc": "<p>Updates the hash content with the given <code>data</code>, the encoding of which\nis given in <code>input_encoding</code> and can be <code>&#39;utf8&#39;</code>, <code>&#39;ascii&#39;</code> or\n<code>&#39;binary&#39;</code>.  If no encoding is provided and the input is a string an\nencoding of <code>&#39;binary&#39;</code> is enforced. If <code>data</code> is a <code>Buffer</code> then\n<code>input_encoding</code> is ignored.\n\n</p>\n<p>This can be called many times with new data as it is streamed.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data"
                    },
                    {
                      "name": "input_encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "hash.digest([encoding])",
              "type": "method",
              "name": "digest",
              "desc": "<p>Calculates the digest of all of the passed data to be hashed.  The\n<code>encoding</code> can be <code>&#39;hex&#39;</code>, <code>&#39;binary&#39;</code> or <code>&#39;base64&#39;</code>.  If no encoding\nis provided, then a buffer is returned.\n\n</p>\n<p>Note: <code>hash</code> object can not be used after <code>digest()</code> method has been\ncalled.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: Hmac",
          "type": "class",
          "name": "Hmac",
          "desc": "<p>Class for creating cryptographic hmac content.\n\n</p>\n<p>Returned by <code>crypto.createHmac</code>.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "hmac.update(data)",
              "type": "method",
              "name": "update",
              "desc": "<p>Update the hmac content with the given <code>data</code>.  This can be called\nmany times with new data as it is streamed.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "hmac.digest([encoding])",
              "type": "method",
              "name": "digest",
              "desc": "<p>Calculates the digest of all of the passed data to the hmac.  The\n<code>encoding</code> can be <code>&#39;hex&#39;</code>, <code>&#39;binary&#39;</code> or <code>&#39;base64&#39;</code>.  If no encoding\nis provided, then a buffer is returned.\n\n</p>\n<p>Note: <code>hmac</code> object can not be used after <code>digest()</code> method has been\ncalled.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: Cipher",
          "type": "class",
          "name": "Cipher",
          "desc": "<p>Class for encrypting data.\n\n</p>\n<p>Returned by <code>crypto.createCipher</code> and <code>crypto.createCipheriv</code>.\n\n</p>\n<p>Cipher objects are <a href=\"stream.html\">streams</a> that are both readable and\nwritable.  The written plain text data is used to produce the\nencrypted data on the readable side.  The legacy <code>update</code> and <code>final</code>\nmethods are also supported.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "cipher.update(data, [input_encoding], [output_encoding])",
              "type": "method",
              "name": "update",
              "desc": "<p>Updates the cipher with <code>data</code>, the encoding of which is given in\n<code>input_encoding</code> and can be <code>&#39;utf8&#39;</code>, <code>&#39;ascii&#39;</code> or <code>&#39;binary&#39;</code>.  If no\nencoding is provided, then a buffer is expected.\nIf <code>data</code> is a <code>Buffer</code> then <code>input_encoding</code> is ignored.\n\n</p>\n<p>The <code>output_encoding</code> specifies the output format of the enciphered\ndata, and can be <code>&#39;binary&#39;</code>, <code>&#39;base64&#39;</code> or <code>&#39;hex&#39;</code>.  If no encoding is\nprovided, then a buffer is returned.\n\n</p>\n<p>Returns the enciphered contents, and can be called many times with new\ndata as it is streamed.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data"
                    },
                    {
                      "name": "input_encoding",
                      "optional": true
                    },
                    {
                      "name": "output_encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "cipher.final([output_encoding])",
              "type": "method",
              "name": "final",
              "desc": "<p>Returns any remaining enciphered contents, with <code>output_encoding</code>\nbeing one of: <code>&#39;binary&#39;</code>, <code>&#39;base64&#39;</code> or <code>&#39;hex&#39;</code>.  If no encoding is\nprovided, then a buffer is returned.\n\n</p>\n<p>Note: <code>cipher</code> object can not be used after <code>final()</code> method has been\ncalled.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "output_encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "cipher.setAutoPadding(auto_padding=true)",
              "type": "method",
              "name": "setAutoPadding",
              "desc": "<p>You can disable automatic padding of the input data to block size. If\n<code>auto_padding</code> is false, the length of the entire input data must be a\nmultiple of the cipher&#39;s block size or <code>final</code> will fail.  Useful for\nnon-standard padding, e.g. using <code>0x0</code> instead of PKCS padding. You\nmust call this before <code>cipher.final</code>.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "auto_padding",
                      "default": "true"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: Decipher",
          "type": "class",
          "name": "Decipher",
          "desc": "<p>Class for decrypting data.\n\n</p>\n<p>Returned by <code>crypto.createDecipher</code> and <code>crypto.createDecipheriv</code>.\n\n</p>\n<p>Decipher objects are <a href=\"stream.html\">streams</a> that are both readable and\nwritable.  The written enciphered data is used to produce the\nplain-text data on the the readable side.  The legacy <code>update</code> and\n<code>final</code> methods are also supported.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "decipher.update(data, [input_encoding], [output_encoding])",
              "type": "method",
              "name": "update",
              "desc": "<p>Updates the decipher with <code>data</code>, which is encoded in <code>&#39;binary&#39;</code>,\n<code>&#39;base64&#39;</code> or <code>&#39;hex&#39;</code>.  If no encoding is provided, then a buffer is\nexpected.\nIf <code>data</code> is a <code>Buffer</code> then <code>input_encoding</code> is ignored.\n\n</p>\n<p>The <code>output_decoding</code> specifies in what format to return the\ndeciphered plaintext: <code>&#39;binary&#39;</code>, <code>&#39;ascii&#39;</code> or <code>&#39;utf8&#39;</code>.  If no\nencoding is provided, then a buffer is returned.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data"
                    },
                    {
                      "name": "input_encoding",
                      "optional": true
                    },
                    {
                      "name": "output_encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "decipher.final([output_encoding])",
              "type": "method",
              "name": "final",
              "desc": "<p>Returns any remaining plaintext which is deciphered, with\n<code>output_encoding</code> being one of: <code>&#39;binary&#39;</code>, <code>&#39;ascii&#39;</code> or <code>&#39;utf8&#39;</code>.  If\nno encoding is provided, then a buffer is returned.\n\n</p>\n<p>Note: <code>decipher</code> object can not be used after <code>final()</code> method has been\ncalled.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "output_encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "decipher.setAutoPadding(auto_padding=true)",
              "type": "method",
              "name": "setAutoPadding",
              "desc": "<p>You can disable auto padding if the data has been encrypted without\nstandard block padding to prevent <code>decipher.final</code> from checking and\nremoving it. Can only work if the input data&#39;s length is a multiple of\nthe ciphers block size. You must call this before streaming data to\n<code>decipher.update</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "auto_padding",
                      "default": "true"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: Sign",
          "type": "class",
          "name": "Sign",
          "desc": "<p>Class for generating signatures.\n\n</p>\n<p>Returned by <code>crypto.createSign</code>.\n\n</p>\n<p>Sign objects are writable <a href=\"stream.html\">streams</a>.  The written data is\nused to generate the signature.  Once all of the data has been\nwritten, the <code>sign</code> method will return the signature.  The legacy\n<code>update</code> method is also supported.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "sign.update(data)",
              "type": "method",
              "name": "update",
              "desc": "<p>Updates the sign object with data.  This can be called many times\nwith new data as it is streamed.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "sign.sign(private_key, [output_format])",
              "type": "method",
              "name": "sign",
              "desc": "<p>Calculates the signature on all the updated data passed through the\nsign.  <code>private_key</code> is a string containing the PEM encoded private\nkey for signing.\n\n</p>\n<p>Returns the signature in <code>output_format</code> which can be <code>&#39;binary&#39;</code>,\n<code>&#39;hex&#39;</code> or <code>&#39;base64&#39;</code>. If no encoding is provided, then a buffer is\nreturned.\n\n</p>\n<p>Note: <code>sign</code> object can not be used after <code>sign()</code> method has been\ncalled.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "private_key"
                    },
                    {
                      "name": "output_format",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: Verify",
          "type": "class",
          "name": "Verify",
          "desc": "<p>Class for verifying signatures.\n\n</p>\n<p>Returned by <code>crypto.createVerify</code>.\n\n</p>\n<p>Verify objects are writable <a href=\"stream.html\">streams</a>.  The written data\nis used to validate against the supplied signature.  Once all of the\ndata has been written, the <code>verify</code> method will return true if the\nsupplied signature is valid.  The legacy <code>update</code> method is also\nsupported.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "verifier.update(data)",
              "type": "method",
              "name": "update",
              "desc": "<p>Updates the verifier object with data.  This can be called many times\nwith new data as it is streamed.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "verifier.verify(object, signature, [signature_format])",
              "type": "method",
              "name": "verify",
              "desc": "<p>Verifies the signed data by using the <code>object</code> and <code>signature</code>.\n<code>object</code> is  a string containing a PEM encoded object, which can be\none of RSA public key, DSA public key, or X.509 certificate.\n<code>signature</code> is the previously calculated signature for the data, in\nthe <code>signature_format</code> which can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code> or <code>&#39;base64&#39;</code>.\nIf no encoding is specified, then a buffer is expected.\n\n</p>\n<p>Returns true or false depending on the validity of the signature for\nthe data and public key.\n\n</p>\n<p>Note: <code>verifier</code> object can not be used after <code>verify()</code> method has been\ncalled.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "object"
                    },
                    {
                      "name": "signature"
                    },
                    {
                      "name": "signature_format",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: DiffieHellman",
          "type": "class",
          "name": "DiffieHellman",
          "desc": "<p>The class for creating Diffie-Hellman key exchanges.\n\n</p>\n<p>Returned by <code>crypto.createDiffieHellman</code>.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "diffieHellman.generateKeys([encoding])",
              "type": "method",
              "name": "generateKeys",
              "desc": "<p>Generates private and public Diffie-Hellman key values, and returns\nthe public key in the specified encoding. This key should be\ntransferred to the other party. Encoding can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>,\nor <code>&#39;base64&#39;</code>.  If no encoding is provided, then a buffer is returned.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "diffieHellman.computeSecret(other_public_key, [input_encoding], [output_encoding])",
              "type": "method",
              "name": "computeSecret",
              "desc": "<p>Computes the shared secret using <code>other_public_key</code> as the other\nparty&#39;s public key and returns the computed shared secret. Supplied\nkey is interpreted using specified <code>input_encoding</code>, and secret is\nencoded using specified <code>output_encoding</code>. Encodings can be\n<code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If the input encoding is not\nprovided, then a buffer is expected.\n\n</p>\n<p>If no output encoding is given, then a buffer is returned.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "other_public_key"
                    },
                    {
                      "name": "input_encoding",
                      "optional": true
                    },
                    {
                      "name": "output_encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "diffieHellman.getPrime([encoding])",
              "type": "method",
              "name": "getPrime",
              "desc": "<p>Returns the Diffie-Hellman prime in the specified encoding, which can\nbe <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If no encoding is provided,\nthen a buffer is returned.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "diffieHellman.getGenerator([encoding])",
              "type": "method",
              "name": "getGenerator",
              "desc": "<p>Returns the Diffie-Hellman generator in the specified encoding, which can\nbe <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If no encoding is provided,\nthen a buffer is returned.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "diffieHellman.getPublicKey([encoding])",
              "type": "method",
              "name": "getPublicKey",
              "desc": "<p>Returns the Diffie-Hellman public key in the specified encoding, which\ncan be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If no encoding is provided,\nthen a buffer is returned.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "diffieHellman.getPrivateKey([encoding])",
              "type": "method",
              "name": "getPrivateKey",
              "desc": "<p>Returns the Diffie-Hellman private key in the specified encoding,\nwhich can be <code>&#39;binary&#39;</code>, <code>&#39;hex&#39;</code>, or <code>&#39;base64&#39;</code>. If no encoding is\nprovided, then a buffer is returned.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "diffieHellman.setPublicKey(public_key, [encoding])",
              "type": "method",
              "name": "setPublicKey",
              "desc": "<p>Sets the Diffie-Hellman public key. Key encoding can be <code>&#39;binary&#39;</code>,\n<code>&#39;hex&#39;</code> or <code>&#39;base64&#39;</code>. If no encoding is provided, then a buffer is\nexpected.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "public_key"
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "diffieHellman.setPrivateKey(private_key, [encoding])",
              "type": "method",
              "name": "setPrivateKey",
              "desc": "<p>Sets the Diffie-Hellman private key. Key encoding can be <code>&#39;binary&#39;</code>,\n<code>&#39;hex&#39;</code> or <code>&#39;base64&#39;</code>. If no encoding is provided, then a buffer is\nexpected.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "private_key"
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "properties": [
        {
          "textRaw": "crypto.DEFAULT_ENCODING",
          "name": "DEFAULT_ENCODING",
          "desc": "<p>The default encoding to use for functions that can take either strings\nor buffers.  The default value is <code>&#39;buffer&#39;</code>, which makes it default\nto using Buffer objects.  This is here to make the crypto module more\neasily compatible with legacy programs that expected <code>&#39;binary&#39;</code> to be\nthe default encoding.\n\n</p>\n<p>Note that new programs will probably expect buffers, so only use this\nas a temporary measure.\n\n</p>\n"
        }
      ],
      "modules": [
        {
          "textRaw": "Recent API Changes",
          "name": "recent_api_changes",
          "desc": "<p>The Crypto module was added to Node before there was the concept of a\nunified Stream API, and before there were Buffer objects for handling\nbinary data.\n\n</p>\n<p>As such, the streaming classes don&#39;t have the typical methods found on\nother Node classes, and many methods accepted and returned\nBinary-encoded strings by default rather than Buffers.  This was\nchanged to use Buffers by default instead.\n\n</p>\n<p>This is a breaking change for some use cases, but not all.\n\n</p>\n<p>For example, if you currently use the default arguments to the Sign\nclass, and then pass the results to the Verify class, without ever\ninspecting the data, then it will continue to work as before.  Where\nyou once got a binary string and then presented the binary string to\nthe Verify object, you&#39;ll now get a Buffer, and present the Buffer to\nthe Verify object.\n\n</p>\n<p>However, if you were doing things with the string data that will not\nwork properly on Buffers (such as, concatenating them, storing in\ndatabases, etc.), or you are passing binary strings to the crypto\nfunctions without an encoding argument, then you will need to start\nproviding encoding arguments to specify which encoding you&#39;d like to\nuse.  To switch to the previous style of using binary strings by\ndefault, set the <code>crypto.DEFAULT_ENCODING</code> field to &#39;binary&#39;.  Note\nthat new programs will probably expect buffers, so only use this as a\ntemporary measure.\n\n\n</p>\n",
          "type": "module",
          "displayName": "Recent API Changes"
        }
      ],
      "type": "module",
      "displayName": "Crypto"
    },
    {
      "textRaw": "TLS (SSL)",
      "name": "tls_(ssl)",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>Use <code>require(&#39;tls&#39;)</code> to access this module.\n\n</p>\n<p>The <code>tls</code> module uses OpenSSL to provide Transport Layer Security and/or\nSecure Socket Layer: encrypted stream communication.\n\n</p>\n<p>TLS/SSL is a public/private key infrastructure. Each client and each\nserver must have a private key. A private key is created like this:\n\n</p>\n<pre><code>openssl genrsa -out ryans-key.pem 1024</code></pre>\n<p>All servers and some clients need to have a certificate. Certificates are public\nkeys signed by a Certificate Authority or self-signed. The first step to\ngetting a certificate is to create a &quot;Certificate Signing Request&quot; (CSR)\nfile. This is done with:\n\n</p>\n<pre><code>openssl req -new -key ryans-key.pem -out ryans-csr.pem</code></pre>\n<p>To create a self-signed certificate with the CSR, do this:\n\n</p>\n<pre><code>openssl x509 -req -in ryans-csr.pem -signkey ryans-key.pem -out ryans-cert.pem</code></pre>\n<p>Alternatively you can send the CSR to a Certificate Authority for signing.\n\n</p>\n<p>(TODO: docs on creating a CA, for now interested users should just look at\n<code>test/fixtures/keys/Makefile</code> in the Node source code)\n\n</p>\n<p>To create .pfx or .p12, do this:\n\n</p>\n<pre><code>openssl pkcs12 -export -in agent5-cert.pem -inkey agent5-key.pem \\\n    -certfile ca-cert.pem -out agent5.pfx</code></pre>\n<ul>\n<li><code>in</code>:  certificate</li>\n<li><code>inkey</code>: private key</li>\n<li><code>certfile</code>: all CA certs concatenated in one file like\n<code>cat ca1-cert.pem ca2-cert.pem &gt; ca-cert.pem</code></li>\n</ul>\n",
      "modules": [
        {
          "textRaw": "Protocol support",
          "name": "protocol_support",
          "desc": "<p>Node.js is compiled with SSLv2 and SSLv3 protocol support by default, but these\nprotocols are <strong>disabled</strong>. They are considered insecure and could be easily\ncompromised as was shown by [CVE-2014-3566][]. However, in some situations, it\nmay cause problems with legacy clients/servers (such as Internet Explorer 6).\nIf you wish to enable SSLv2 or SSLv3, run node with the <code>--enable-ssl2</code> or\n<code>--enable-ssl3</code> flag respectively.  In future versions of Node.js SSLv2 and\nSSLv3 will not be compiled in by default.\n\n</p>\n<p>There is a way to force node into using SSLv3 or SSLv2 only mode by explicitly\nspecifying <code>secureProtocol</code> to <code>&#39;SSLv3_method&#39;</code> or <code>&#39;SSLv2_method&#39;</code>.\n\n</p>\n<p>The default protocol method Node.js uses is <code>SSLv23_method</code> which would be more\naccurately named <code>AutoNegotiate_method</code>. This method will try and negotiate\nfrom the highest level down to whatever the client supports.  To provide a\nsecure default, Node.js (since v0.10.33) explicitly disables the use of SSLv3\nand SSLv2 by setting the <code>secureOptions</code> to be\n<code>SSL_OP_NO_SSLv3|SSL_OP_NO_SSLv2</code> (again, unless you have passed\n<code>--enable-ssl3</code>, or <code>--enable-ssl2</code>, or <code>SSLv3_method</code> as <code>secureProtocol</code>).\n\n</p>\n<p>If you have set <code>securityOptions</code> to anything, we will not override your\noptions.\n\n</p>\n<p>The ramifications of this behavior change:\n\n</p>\n<ul>\n<li>If your application is behaving as a secure server, clients who are <code>SSLv3</code>\nonly will now not be able to appropriately negotiate a connection and will be\nrefused. In this case your server will emit a <code>clientError</code> event. The error\nmessage will include <code>&#39;wrong version number&#39;</code>.</li>\n<li>If your application is behaving as a secure client and communicating with a\nserver that doesn&#39;t support methods more secure than SSLv3 then your connection\nwon&#39;t be able to negotiate and will fail. In this case your client will emit a\nan <code>error</code> event. The error message will include <code>&#39;wrong version number&#39;</code>.</li>\n</ul>\n",
          "type": "module",
          "displayName": "Protocol support"
        }
      ],
      "miscs": [
        {
          "textRaw": "Client-initiated renegotiation attack mitigation",
          "name": "Client-initiated renegotiation attack mitigation",
          "type": "misc",
          "desc": "<p>The TLS protocol lets the client renegotiate certain aspects of the TLS session.\nUnfortunately, session renegotiation requires a disproportional amount of\nserver-side resources, which makes it a potential vector for denial-of-service\nattacks.\n\n</p>\n<p>To mitigate this, renegotiations are limited to three times every 10 minutes. An\nerror is emitted on the [CleartextStream][] instance when the threshold is\nexceeded. The limits are configurable:\n\n</p>\n<ul>\n<li><p><code>tls.CLIENT_RENEG_LIMIT</code>: renegotiation limit, default is 3.</p>\n</li>\n<li><p><code>tls.CLIENT_RENEG_WINDOW</code>: renegotiation window in seconds, default is\n10 minutes.</p>\n</li>\n</ul>\n<p>Don&#39;t change the defaults unless you know what you are doing.\n\n</p>\n<p>To test your server, connect to it with <code>openssl s_client -connect address:port</code>\nand tap <code>R&lt;CR&gt;</code> (that&#39;s the letter <code>R</code> followed by a carriage return) a few\ntimes.\n\n\n</p>\n"
        },
        {
          "textRaw": "NPN and SNI",
          "name": "NPN and SNI",
          "type": "misc",
          "desc": "<p>NPN (Next Protocol Negotiation) and SNI (Server Name Indication) are TLS\nhandshake extensions allowing you:\n\n</p>\n<ul>\n<li>NPN - to use one TLS server for multiple protocols (HTTP, SPDY)</li>\n<li>SNI - to use one TLS server for multiple hostnames with different SSL\ncertificates.</li>\n</ul>\n"
        }
      ],
      "methods": [
        {
          "textRaw": "tls.getCiphers()",
          "type": "method",
          "name": "getCiphers",
          "desc": "<p>Returns an array with the names of the supported SSL ciphers.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var ciphers = tls.getCiphers();\nconsole.log(ciphers); // [&#39;AES128-SHA&#39;, &#39;AES256-SHA&#39;, ...]</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "tls.createServer(options, [secureConnectionListener])",
          "type": "method",
          "name": "createServer",
          "desc": "<p>Creates a new [tls.Server][].  The <code>connectionListener</code> argument is\nautomatically set as a listener for the [secureConnection][] event.  The\n<code>options</code> object has these possibilities:\n\n</p>\n<ul>\n<li><p><code>pfx</code>: A string or <code>Buffer</code> containing the private key, certificate and\nCA certs of the server in PFX or PKCS12 format. (Mutually exclusive with\nthe <code>key</code>, <code>cert</code> and <code>ca</code> options.)</p>\n</li>\n<li><p><code>key</code>: A string or <code>Buffer</code> containing the private key of the server in\nPEM format. (Required)</p>\n</li>\n<li><p><code>passphrase</code>: A string of passphrase for the private key or pfx.</p>\n</li>\n<li><p><code>cert</code>: A string or <code>Buffer</code> containing the certificate key of the server in\nPEM format. (Required)</p>\n</li>\n<li><p><code>ca</code>: An array of strings or <code>Buffer</code>s of trusted certificates in PEM\nformat. If this is omitted several well known &quot;root&quot; CAs will be used,\nlike VeriSign. These are used to authorize connections.</p>\n</li>\n<li><p><code>crl</code> : Either a string or list of strings of PEM encoded CRLs (Certificate\nRevocation List)</p>\n</li>\n<li><p><code>ciphers</code>: A string describing the ciphers to use or exclude.</p>\n<p>To mitigate [BEAST attacks] it is recommended that you use this option in\nconjunction with the <code>honorCipherOrder</code> option described below to\nprioritize the non-CBC cipher.</p>\n<p>Defaults to <code>AES128-GCM-SHA256:RC4:HIGH:!MD5:!aNULL:!EDH</code>.\nConsult the [OpenSSL cipher list format documentation] for details on the\nformat. ECDH (Elliptic Curve Diffie-Hellman) ciphers are not yet supported.</p>\n</li>\n</ul>\n<pre><code>`AES128-GCM-SHA256` is used when node.js is linked against OpenSSL 1.0.1\nor newer and the client speaks TLS 1.2, RC4 is used as a secure fallback.\n\n**NOTE**: Previous revisions of this section suggested `AES256-SHA` as an\nacceptable cipher. Unfortunately, `AES256-SHA` is a CBC cipher and therefore\nsusceptible to BEAST attacks. Do *not* use it.</code></pre>\n<ul>\n<li><p><code>handshakeTimeout</code>: Abort the connection if the SSL/TLS handshake does not\nfinish in this many milliseconds. The default is 120 seconds.</p>\n<p>A <code>&#39;clientError&#39;</code> is emitted on the <code>tls.Server</code> object whenever a handshake\ntimes out.</p>\n</li>\n<li><p><code>honorCipherOrder</code> : When choosing a cipher, use the server&#39;s preferences\ninstead of the client preferences.</p>\n<p>Note that if SSLv2 is used, the server will send its list of preferences\nto the client, and the client chooses the cipher.</p>\n<p>Although, this option is disabled by default, it is <em>recommended</em> that you\nuse this option in conjunction with the <code>ciphers</code> option to mitigate\nBEAST attacks.</p>\n</li>\n<li><p><code>requestCert</code>: If <code>true</code> the server will request a certificate from\nclients that connect and attempt to verify that certificate. Default:\n<code>false</code>.</p>\n</li>\n<li><p><code>rejectUnauthorized</code>: If <code>true</code> the server will reject any connection\nwhich is not authorized with the list of supplied CAs. This option only\nhas an effect if <code>requestCert</code> is <code>true</code>. Default: <code>false</code>.</p>\n</li>\n<li><p><code>NPNProtocols</code>: An array or <code>Buffer</code> of possible NPN protocols. (Protocols\nshould be ordered by their priority).</p>\n</li>\n<li><p><code>SNICallback</code>: A function that will be called if client supports SNI TLS\nextension. Only one argument will be passed to it: <code>servername</code>. And\n<code>SNICallback</code> should return SecureContext instance.\n(You can use <code>crypto.createCredentials(...).context</code> to get proper\nSecureContext). If <code>SNICallback</code> wasn&#39;t provided - default callback with\nhigh-level API will be used (see below).</p>\n</li>\n<li><p><code>sessionIdContext</code>: A string containing a opaque identifier for session\nresumption. If <code>requestCert</code> is <code>true</code>, the default is MD5 hash value\ngenerated from command-line. Otherwise, the default is not provided.</p>\n</li>\n<li><p><code>secureProtocol</code>: The SSL method to use, e.g. <code>SSLv3_method</code> to force\nSSL version 3. The possible values depend on your installation of\nOpenSSL and are defined in the constant [SSL_METHODS][].</p>\n</li>\n<li><p><code>secureOptions</code>: Set server options. For example, to disable the SSLv3\nprotocol set the <code>SSL_OP_NO_SSLv3</code> flag. See [SSL_CTX_set_options]\nfor all available options.</p>\n</li>\n</ul>\n<p>Here is a simple example echo server:\n\n</p>\n<pre><code>var tls = require(&#39;tls&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar options = {\n  key: fs.readFileSync(&#39;server-key.pem&#39;),\n  cert: fs.readFileSync(&#39;server-cert.pem&#39;),\n\n  // This is necessary only if using the client certificate authentication.\n  requestCert: true,\n\n  // This is necessary only if the client uses the self-signed certificate.\n  ca: [ fs.readFileSync(&#39;client-cert.pem&#39;) ]\n};\n\nvar server = tls.createServer(options, function(cleartextStream) {\n  console.log(&#39;server connected&#39;,\n              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);\n  cleartextStream.write(&quot;welcome!\\n&quot;);\n  cleartextStream.setEncoding(&#39;utf8&#39;);\n  cleartextStream.pipe(cleartextStream);\n});\nserver.listen(8000, function() {\n  console.log(&#39;server bound&#39;);\n});</code></pre>\n<p>Or\n\n</p>\n<pre><code>var tls = require(&#39;tls&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar options = {\n  pfx: fs.readFileSync(&#39;server.pfx&#39;),\n\n  // This is necessary only if using the client certificate authentication.\n  requestCert: true,\n\n};\n\nvar server = tls.createServer(options, function(cleartextStream) {\n  console.log(&#39;server connected&#39;,\n              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);\n  cleartextStream.write(&quot;welcome!\\n&quot;);\n  cleartextStream.setEncoding(&#39;utf8&#39;);\n  cleartextStream.pipe(cleartextStream);\n});\nserver.listen(8000, function() {\n  console.log(&#39;server bound&#39;);\n});</code></pre>\n<p>You can test this server by connecting to it with <code>openssl s_client</code>:\n\n\n</p>\n<pre><code>openssl s_client -connect 127.0.0.1:8000</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "secureConnectionListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "tls.connect(options, [callback])",
          "type": "method",
          "name": "connect",
          "desc": "<p>Creates a new client connection to the given <code>port</code> and <code>host</code> (old API) or\n<code>options.port</code> and <code>options.host</code>. (If <code>host</code> is omitted, it defaults to\n<code>localhost</code>.) <code>options</code> should be an object which specifies:\n\n</p>\n<ul>\n<li><p><code>host</code>: Host the client should connect to</p>\n</li>\n<li><p><code>port</code>: Port the client should connect to</p>\n</li>\n<li><p><code>socket</code>: Establish secure connection on a given socket rather than\ncreating a new socket. If this option is specified, <code>host</code> and <code>port</code>\nare ignored.</p>\n</li>\n<li><p><code>pfx</code>: A string or <code>Buffer</code> containing the private key, certificate and\nCA certs of the client in PFX or PKCS12 format.</p>\n</li>\n<li><p><code>key</code>: A string or <code>Buffer</code> containing the private key of the client in\nPEM format.</p>\n</li>\n<li><p><code>passphrase</code>: A string of passphrase for the private key or pfx.</p>\n</li>\n<li><p><code>cert</code>: A string or <code>Buffer</code> containing the certificate key of the client in\nPEM format.</p>\n</li>\n<li><p><code>ca</code>: An array of strings or <code>Buffer</code>s of trusted certificates in PEM\nformat. If this is omitted several well known &quot;root&quot; CAs will be used,\nlike VeriSign. These are used to authorize connections.</p>\n</li>\n<li><p><code>rejectUnauthorized</code>: If <code>true</code>, the server certificate is verified against\nthe list of supplied CAs. An <code>&#39;error&#39;</code> event is emitted if verification\nfails. Default: <code>true</code>.</p>\n</li>\n<li><p><code>NPNProtocols</code>: An array of strings or <code>Buffer</code>s containing supported NPN\nprotocols. <code>Buffer</code>s should have following format: <code>0x05hello0x05world</code>,\nwhere first byte is next protocol name&#39;s length. (Passing array should\nusually be much simpler: <code>[&#39;hello&#39;, &#39;world&#39;]</code>.)</p>\n</li>\n<li><p><code>servername</code>: Servername for SNI (Server Name Indication) TLS extension.</p>\n</li>\n<li><p><code>secureProtocol</code>: The SSL method to use, e.g. <code>SSLv3_method</code> to force\nSSL version 3. The possible values depend on your installation of\nOpenSSL and are defined in the constant [SSL_METHODS][].</p>\n</li>\n</ul>\n<p>The <code>callback</code> parameter will be added as a listener for the\n[&#39;secureConnect&#39;][] event.\n\n</p>\n<p><code>tls.connect()</code> returns a [CleartextStream][] object.\n\n</p>\n<p>Here is an example of a client of echo server as described previously:\n\n</p>\n<pre><code>var tls = require(&#39;tls&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar options = {\n  // These are necessary only if using the client certificate authentication\n  key: fs.readFileSync(&#39;client-key.pem&#39;),\n  cert: fs.readFileSync(&#39;client-cert.pem&#39;),\n\n  // This is necessary only if the server uses the self-signed certificate\n  ca: [ fs.readFileSync(&#39;server-cert.pem&#39;) ]\n};\n\nvar cleartextStream = tls.connect(8000, options, function() {\n  console.log(&#39;client connected&#39;,\n              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);\n  process.stdin.pipe(cleartextStream);\n  process.stdin.resume();\n});\ncleartextStream.setEncoding(&#39;utf8&#39;);\ncleartextStream.on(&#39;data&#39;, function(data) {\n  console.log(data);\n});\ncleartextStream.on(&#39;end&#39;, function() {\n  server.close();\n});</code></pre>\n<p>Or\n\n</p>\n<pre><code>var tls = require(&#39;tls&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar options = {\n  pfx: fs.readFileSync(&#39;client.pfx&#39;)\n};\n\nvar cleartextStream = tls.connect(8000, options, function() {\n  console.log(&#39;client connected&#39;,\n              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);\n  process.stdin.pipe(cleartextStream);\n  process.stdin.resume();\n});\ncleartextStream.setEncoding(&#39;utf8&#39;);\ncleartextStream.on(&#39;data&#39;, function(data) {\n  console.log(data);\n});\ncleartextStream.on(&#39;end&#39;, function() {\n  server.close();\n});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "port"
                },
                {
                  "name": "host",
                  "optional": true
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "tls.connect(port, [host], [options], [callback])",
          "type": "method",
          "name": "connect",
          "desc": "<p>Creates a new client connection to the given <code>port</code> and <code>host</code> (old API) or\n<code>options.port</code> and <code>options.host</code>. (If <code>host</code> is omitted, it defaults to\n<code>localhost</code>.) <code>options</code> should be an object which specifies:\n\n</p>\n<ul>\n<li><p><code>host</code>: Host the client should connect to</p>\n</li>\n<li><p><code>port</code>: Port the client should connect to</p>\n</li>\n<li><p><code>socket</code>: Establish secure connection on a given socket rather than\ncreating a new socket. If this option is specified, <code>host</code> and <code>port</code>\nare ignored.</p>\n</li>\n<li><p><code>pfx</code>: A string or <code>Buffer</code> containing the private key, certificate and\nCA certs of the client in PFX or PKCS12 format.</p>\n</li>\n<li><p><code>key</code>: A string or <code>Buffer</code> containing the private key of the client in\nPEM format.</p>\n</li>\n<li><p><code>passphrase</code>: A string of passphrase for the private key or pfx.</p>\n</li>\n<li><p><code>cert</code>: A string or <code>Buffer</code> containing the certificate key of the client in\nPEM format.</p>\n</li>\n<li><p><code>ca</code>: An array of strings or <code>Buffer</code>s of trusted certificates in PEM\nformat. If this is omitted several well known &quot;root&quot; CAs will be used,\nlike VeriSign. These are used to authorize connections.</p>\n</li>\n<li><p><code>rejectUnauthorized</code>: If <code>true</code>, the server certificate is verified against\nthe list of supplied CAs. An <code>&#39;error&#39;</code> event is emitted if verification\nfails. Default: <code>true</code>.</p>\n</li>\n<li><p><code>NPNProtocols</code>: An array of strings or <code>Buffer</code>s containing supported NPN\nprotocols. <code>Buffer</code>s should have following format: <code>0x05hello0x05world</code>,\nwhere first byte is next protocol name&#39;s length. (Passing array should\nusually be much simpler: <code>[&#39;hello&#39;, &#39;world&#39;]</code>.)</p>\n</li>\n<li><p><code>servername</code>: Servername for SNI (Server Name Indication) TLS extension.</p>\n</li>\n<li><p><code>secureProtocol</code>: The SSL method to use, e.g. <code>SSLv3_method</code> to force\nSSL version 3. The possible values depend on your installation of\nOpenSSL and are defined in the constant [SSL_METHODS][].</p>\n</li>\n</ul>\n<p>The <code>callback</code> parameter will be added as a listener for the\n[&#39;secureConnect&#39;][] event.\n\n</p>\n<p><code>tls.connect()</code> returns a [CleartextStream][] object.\n\n</p>\n<p>Here is an example of a client of echo server as described previously:\n\n</p>\n<pre><code>var tls = require(&#39;tls&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar options = {\n  // These are necessary only if using the client certificate authentication\n  key: fs.readFileSync(&#39;client-key.pem&#39;),\n  cert: fs.readFileSync(&#39;client-cert.pem&#39;),\n\n  // This is necessary only if the server uses the self-signed certificate\n  ca: [ fs.readFileSync(&#39;server-cert.pem&#39;) ]\n};\n\nvar cleartextStream = tls.connect(8000, options, function() {\n  console.log(&#39;client connected&#39;,\n              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);\n  process.stdin.pipe(cleartextStream);\n  process.stdin.resume();\n});\ncleartextStream.setEncoding(&#39;utf8&#39;);\ncleartextStream.on(&#39;data&#39;, function(data) {\n  console.log(data);\n});\ncleartextStream.on(&#39;end&#39;, function() {\n  server.close();\n});</code></pre>\n<p>Or\n\n</p>\n<pre><code>var tls = require(&#39;tls&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar options = {\n  pfx: fs.readFileSync(&#39;client.pfx&#39;)\n};\n\nvar cleartextStream = tls.connect(8000, options, function() {\n  console.log(&#39;client connected&#39;,\n              cleartextStream.authorized ? &#39;authorized&#39; : &#39;unauthorized&#39;);\n  process.stdin.pipe(cleartextStream);\n  process.stdin.resume();\n});\ncleartextStream.setEncoding(&#39;utf8&#39;);\ncleartextStream.on(&#39;data&#39;, function(data) {\n  console.log(data);\n});\ncleartextStream.on(&#39;end&#39;, function() {\n  server.close();\n});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "port"
                },
                {
                  "name": "host",
                  "optional": true
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "tls.createSecurePair([credentials], [isServer], [requestCert], [rejectUnauthorized])",
          "type": "method",
          "name": "createSecurePair",
          "desc": "<p>Creates a new secure pair object with two streams, one of which reads/writes\nencrypted data, and one reads/writes cleartext data.\nGenerally the encrypted one is piped to/from an incoming encrypted data stream,\nand the cleartext one is used as a replacement for the initial encrypted stream.\n\n</p>\n<ul>\n<li><p><code>credentials</code>: A credentials object from crypto.createCredentials( ... )</p>\n</li>\n<li><p><code>isServer</code>: A boolean indicating whether this tls connection should be\nopened as a server or a client.</p>\n</li>\n<li><p><code>requestCert</code>: A boolean indicating whether a server should request a\ncertificate from a connecting client. Only applies to server connections.</p>\n</li>\n<li><p><code>rejectUnauthorized</code>: A boolean indicating whether a server should\nautomatically reject clients with invalid certificates. Only applies to\nservers with <code>requestCert</code> enabled.</p>\n</li>\n</ul>\n<p><code>tls.createSecurePair()</code> returns a SecurePair object with [cleartext][] and\n<code>encrypted</code> stream properties.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "credentials",
                  "optional": true
                },
                {
                  "name": "isServer",
                  "optional": true
                },
                {
                  "name": "requestCert",
                  "optional": true
                },
                {
                  "name": "rejectUnauthorized",
                  "optional": true
                }
              ]
            }
          ]
        }
      ],
      "properties": [
        {
          "textRaw": "tls.SLAB_BUFFER_SIZE",
          "name": "SLAB_BUFFER_SIZE",
          "desc": "<p>Size of slab buffer used by all tls servers and clients.\nDefault: <code>10 * 1024 * 1024</code>.\n\n\n</p>\n<p>Don&#39;t change the defaults unless you know what you are doing.\n\n\n</p>\n"
        }
      ],
      "classes": [
        {
          "textRaw": "Class: SecurePair",
          "type": "class",
          "name": "SecurePair",
          "desc": "<p>Returned by tls.createSecurePair.\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'secure'",
              "type": "event",
              "name": "secure",
              "desc": "<p>The event is emitted from the SecurePair once the pair has successfully\nestablished a secure connection.\n\n</p>\n<p>Similarly to the checking for the server &#39;secureConnection&#39; event,\npair.cleartext.authorized should be checked to confirm whether the certificate\nused properly authorized.\n\n</p>\n",
              "params": []
            }
          ]
        },
        {
          "textRaw": "Class: tls.Server",
          "type": "class",
          "name": "tls.Server",
          "desc": "<p>This class is a subclass of <code>net.Server</code> and has the same methods on it.\nInstead of accepting just raw TCP connections, this accepts encrypted\nconnections using TLS or SSL.\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'secureConnection'",
              "type": "event",
              "name": "secureConnection",
              "desc": "<p><code>function (cleartextStream) {}</code>\n\n</p>\n<p>This event is emitted after a new connection has been successfully\nhandshaked. The argument is a instance of [CleartextStream][]. It has all the\ncommon stream methods and events.\n\n</p>\n<p><code>cleartextStream.authorized</code> is a boolean value which indicates if the\nclient has verified by one of the supplied certificate authorities for the\nserver. If <code>cleartextStream.authorized</code> is false, then\n<code>cleartextStream.authorizationError</code> is set to describe how authorization\nfailed. Implied but worth mentioning: depending on the settings of the TLS\nserver, you unauthorized connections may be accepted.\n<code>cleartextStream.npnProtocol</code> is a string containing selected NPN protocol.\n<code>cleartextStream.servername</code> is a string containing servername requested with\nSNI.\n\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'clientError'",
              "type": "event",
              "name": "clientError",
              "desc": "<p><code>function (exception, securePair) { }</code>\n\n</p>\n<p>When a client connection emits an &#39;error&#39; event before secure connection is\nestablished - it will be forwarded here.\n\n</p>\n<p><code>securePair</code> is the <code>tls.SecurePair</code> that the error originated from.\n\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'newSession'",
              "type": "event",
              "name": "newSession",
              "desc": "<p><code>function (sessionId, sessionData) { }</code>\n\n</p>\n<p>Emitted on creation of TLS session. May be used to store sessions in external\nstorage.\n\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'resumeSession'",
              "type": "event",
              "name": "resumeSession",
              "desc": "<p><code>function (sessionId, callback) { }</code>\n\n</p>\n<p>Emitted when client wants to resume previous TLS session. Event listener may\nperform lookup in external storage using given <code>sessionId</code>, and invoke\n<code>callback(null, sessionData)</code> once finished. If session can&#39;t be resumed\n(i.e. doesn&#39;t exist in storage) one may call <code>callback(null, null)</code>. Calling\n<code>callback(err)</code> will terminate incoming connection and destroy socket.\n\n\n</p>\n",
              "params": []
            }
          ],
          "methods": [
            {
              "textRaw": "server.listen(port, [host], [callback])",
              "type": "method",
              "name": "listen",
              "desc": "<p>Begin accepting connections on the specified <code>port</code> and <code>host</code>.  If the\n<code>host</code> is omitted, the server will accept connections directed to any\nIPv4 address (<code>INADDR_ANY</code>).\n\n</p>\n<p>This function is asynchronous. The last parameter <code>callback</code> will be called\nwhen the server has been bound.\n\n</p>\n<p>See <code>net.Server</code> for more information.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "port"
                    },
                    {
                      "name": "host",
                      "optional": true
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.close()",
              "type": "method",
              "name": "close",
              "desc": "<p>Stops the server from accepting new connections. This function is\nasynchronous, the server is finally closed when the server emits a <code>&#39;close&#39;</code>\nevent.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "server.address()",
              "type": "method",
              "name": "address",
              "desc": "<p>Returns the bound address, the address family name and port of the\nserver as reported by the operating system.  See [net.Server.address()][] for\nmore information.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "server.addContext(hostname, credentials)",
              "type": "method",
              "name": "addContext",
              "desc": "<p>Add secure context that will be used if client request&#39;s SNI hostname is\nmatching passed <code>hostname</code> (wildcards can be used). <code>credentials</code> can contain\n<code>key</code>, <code>cert</code> and <code>ca</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "hostname"
                    },
                    {
                      "name": "credentials"
                    }
                  ]
                }
              ]
            }
          ],
          "properties": [
            {
              "textRaw": "server.maxConnections",
              "name": "maxConnections",
              "desc": "<p>Set this property to reject connections when the server&#39;s connection count\ngets high.\n\n</p>\n"
            },
            {
              "textRaw": "server.connections",
              "name": "connections",
              "desc": "<p>The number of concurrent connections on the server.\n\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: CryptoStream",
          "type": "class",
          "name": "CryptoStream",
          "desc": "<p>This is an encrypted stream.\n\n</p>\n",
          "properties": [
            {
              "textRaw": "cryptoStream.bytesWritten",
              "name": "bytesWritten",
              "desc": "<p>A proxy to the underlying socket&#39;s bytesWritten accessor, this will return\nthe total bytes written to the socket, <em>including the TLS overhead</em>.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: tls.CleartextStream",
          "type": "class",
          "name": "tls.CleartextStream",
          "desc": "<p>This is a stream on top of the <em>Encrypted</em> stream that makes it possible to\nread/write an encrypted data as a cleartext data.\n\n</p>\n<p>This instance implements a duplex [Stream][] interfaces.  It has all the\ncommon stream methods and events.\n\n</p>\n<p>A ClearTextStream is the <code>clear</code> member of a SecurePair object.\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'secureConnect'",
              "type": "event",
              "name": "secureConnect",
              "desc": "<p>This event is emitted after a new connection has been successfully handshaked. \nThe listener will be called no matter if the server&#39;s certificate was\nauthorized or not. It is up to the user to test <code>cleartextStream.authorized</code>\nto see if the server certificate was signed by one of the specified CAs.\nIf <code>cleartextStream.authorized === false</code> then the error can be found in\n<code>cleartextStream.authorizationError</code>. Also if NPN was used - you can check\n<code>cleartextStream.npnProtocol</code> for negotiated protocol.\n\n</p>\n",
              "params": []
            }
          ],
          "properties": [
            {
              "textRaw": "cleartextStream.authorized",
              "name": "authorized",
              "desc": "<p>A boolean that is <code>true</code> if the peer certificate was signed by one of the\nspecified CAs, otherwise <code>false</code>\n\n</p>\n"
            },
            {
              "textRaw": "cleartextStream.authorizationError",
              "name": "authorizationError",
              "desc": "<p>The reason why the peer&#39;s certificate has not been verified. This property\nbecomes available only when <code>cleartextStream.authorized === false</code>.\n\n</p>\n"
            },
            {
              "textRaw": "cleartextStream.remoteAddress",
              "name": "remoteAddress",
              "desc": "<p>The string representation of the remote IP address. For example,\n<code>&#39;74.125.127.100&#39;</code> or <code>&#39;2001:4860:a005::68&#39;</code>.\n\n</p>\n"
            },
            {
              "textRaw": "cleartextStream.remotePort",
              "name": "remotePort",
              "desc": "<p>The numeric representation of the remote port. For example, <code>443</code>.\n\n</p>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "cleartextStream.getPeerCertificate()",
              "type": "method",
              "name": "getPeerCertificate",
              "desc": "<p>Returns an object representing the peer&#39;s certificate. The returned object has\nsome properties corresponding to the field of the certificate.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>{ subject: \n   { C: &#39;UK&#39;,\n     ST: &#39;Acknack Ltd&#39;,\n     L: &#39;Rhys Jones&#39;,\n     O: &#39;node.js&#39;,\n     OU: &#39;Test TLS Certificate&#39;,\n     CN: &#39;localhost&#39; },\n  issuer: \n   { C: &#39;UK&#39;,\n     ST: &#39;Acknack Ltd&#39;,\n     L: &#39;Rhys Jones&#39;,\n     O: &#39;node.js&#39;,\n     OU: &#39;Test TLS Certificate&#39;,\n     CN: &#39;localhost&#39; },\n  valid_from: &#39;Nov 11 09:52:22 2009 GMT&#39;,\n  valid_to: &#39;Nov  6 09:52:22 2029 GMT&#39;,\n  fingerprint: &#39;2A:7A:C2:DD:E5:F9:CC:53:72:35:99:7A:02:5A:71:38:52:EC:8A:DF&#39; }</code></pre>\n<p>If the peer does not provide a certificate, it returns <code>null</code> or an empty\nobject.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "cleartextStream.getCipher()",
              "type": "method",
              "name": "getCipher",
              "desc": "<p>Returns an object representing the cipher name and the SSL/TLS\nprotocol version of the current connection.\n\n</p>\n<p>Example:\n{ name: &#39;AES256-SHA&#39;, version: &#39;TLSv1/SSLv3&#39; }\n\n</p>\n<p>See SSL_CIPHER_get_name() and SSL_CIPHER_get_version() in\n<a href=\"http://www.openssl.org/docs/ssl/ssl.html#DEALING_WITH_CIPHERS\">http://www.openssl.org/docs/ssl/ssl.html#DEALING_WITH_CIPHERS</a> for more\ninformation.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "cleartextStream.address()",
              "type": "method",
              "name": "address",
              "desc": "<p>Returns the bound address, the address family name and port of the\nunderlying socket as reported by the operating system. Returns an\nobject with three properties, e.g.\n<code>{ port: 12346, family: &#39;IPv4&#39;, address: &#39;127.0.0.1&#39; }</code>\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "TLS (SSL)"
    },
    {
      "textRaw": "StringDecoder",
      "name": "stringdecoder",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>To use this module, do <code>require(&#39;string_decoder&#39;)</code>. StringDecoder decodes a\nbuffer to a string. It is a simple interface to <code>buffer.toString()</code> but provides\nadditional support for utf8.\n\n</p>\n<pre><code>var StringDecoder = require(&#39;string_decoder&#39;).StringDecoder;\nvar decoder = new StringDecoder(&#39;utf8&#39;);\n\nvar cent = new Buffer([0xC2, 0xA2]);\nconsole.log(decoder.write(cent));\n\nvar euro = new Buffer([0xE2, 0x82, 0xAC]);\nconsole.log(decoder.write(euro));</code></pre>\n",
      "classes": [
        {
          "textRaw": "Class: StringDecoder",
          "type": "class",
          "name": "StringDecoder",
          "desc": "<p>Accepts a single argument, <code>encoding</code> which defaults to <code>utf8</code>.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "decoder.write(buffer)",
              "type": "method",
              "name": "write",
              "desc": "<p>Returns a decoded string.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "buffer"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "decoder.end()",
              "type": "method",
              "name": "end",
              "desc": "<p>Returns any trailing bytes that were left in the buffer.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "StringDecoder"
    },
    {
      "textRaw": "File System",
      "name": "fs",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>File I/O is provided by simple wrappers around standard POSIX functions.  To\nuse this module do <code>require(&#39;fs&#39;)</code>. All the methods have asynchronous and\nsynchronous forms.\n\n</p>\n<p>The asynchronous form always take a completion callback as its last argument.\nThe arguments passed to the completion callback depend on the method, but the\nfirst argument is always reserved for an exception. If the operation was\ncompleted successfully, then the first argument will be <code>null</code> or <code>undefined</code>.\n\n</p>\n<p>When using the synchronous form any exceptions are immediately thrown.\nYou can use try/catch to handle exceptions or allow them to bubble up.\n\n</p>\n<p>Here is an example of the asynchronous version:\n\n</p>\n<pre><code>var fs = require(&#39;fs&#39;);\n\nfs.unlink(&#39;/tmp/hello&#39;, function (err) {\n  if (err) throw err;\n  console.log(&#39;successfully deleted /tmp/hello&#39;);\n});</code></pre>\n<p>Here is the synchronous version:\n\n</p>\n<pre><code>var fs = require(&#39;fs&#39;);\n\nfs.unlinkSync(&#39;/tmp/hello&#39;)\nconsole.log(&#39;successfully deleted /tmp/hello&#39;);</code></pre>\n<p>With the asynchronous methods there is no guaranteed ordering. So the\nfollowing is prone to error:\n\n</p>\n<pre><code>fs.rename(&#39;/tmp/hello&#39;, &#39;/tmp/world&#39;, function (err) {\n  if (err) throw err;\n  console.log(&#39;renamed complete&#39;);\n});\nfs.stat(&#39;/tmp/world&#39;, function (err, stats) {\n  if (err) throw err;\n  console.log(&#39;stats: &#39; + JSON.stringify(stats));\n});</code></pre>\n<p>It could be that <code>fs.stat</code> is executed before <code>fs.rename</code>.\nThe correct way to do this is to chain the callbacks.\n\n</p>\n<pre><code>fs.rename(&#39;/tmp/hello&#39;, &#39;/tmp/world&#39;, function (err) {\n  if (err) throw err;\n  fs.stat(&#39;/tmp/world&#39;, function (err, stats) {\n    if (err) throw err;\n    console.log(&#39;stats: &#39; + JSON.stringify(stats));\n  });\n});</code></pre>\n<p>In busy processes, the programmer is <em>strongly encouraged</em> to use the\nasynchronous versions of these calls. The synchronous versions will block\nthe entire process until they complete--halting all connections.\n\n</p>\n<p>Relative path to filename can be used, remember however that this path will be\nrelative to <code>process.cwd()</code>.\n\n</p>\n<p>Most fs functions let you omit the callback argument. If you do, a default\ncallback is used that ignores errors, but prints a deprecation\nwarning.\n\n</p>\n<p><strong>IMPORTANT</strong>: Omitting the callback is deprecated.  v0.12 will throw the\nerrors as exceptions.\n\n\n</p>\n",
      "methods": [
        {
          "textRaw": "fs.rename(oldPath, newPath, callback)",
          "type": "method",
          "name": "rename",
          "desc": "<p>Asynchronous rename(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "oldPath"
                },
                {
                  "name": "newPath"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.renameSync(oldPath, newPath)",
          "type": "method",
          "name": "renameSync",
          "desc": "<p>Synchronous rename(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "oldPath"
                },
                {
                  "name": "newPath"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.ftruncate(fd, len, callback)",
          "type": "method",
          "name": "ftruncate",
          "desc": "<p>Asynchronous ftruncate(2). No arguments other than a possible exception are\ngiven to the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "len"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.ftruncateSync(fd, len)",
          "type": "method",
          "name": "ftruncateSync",
          "desc": "<p>Synchronous ftruncate(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "len"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.truncate(path, len, callback)",
          "type": "method",
          "name": "truncate",
          "desc": "<p>Asynchronous truncate(2). No arguments other than a possible exception are\ngiven to the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "len"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.truncateSync(path, len)",
          "type": "method",
          "name": "truncateSync",
          "desc": "<p>Synchronous truncate(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "len"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.chown(path, uid, gid, callback)",
          "type": "method",
          "name": "chown",
          "desc": "<p>Asynchronous chown(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "uid"
                },
                {
                  "name": "gid"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.chownSync(path, uid, gid)",
          "type": "method",
          "name": "chownSync",
          "desc": "<p>Synchronous chown(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "uid"
                },
                {
                  "name": "gid"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.fchown(fd, uid, gid, callback)",
          "type": "method",
          "name": "fchown",
          "desc": "<p>Asynchronous fchown(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "uid"
                },
                {
                  "name": "gid"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.fchownSync(fd, uid, gid)",
          "type": "method",
          "name": "fchownSync",
          "desc": "<p>Synchronous fchown(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "uid"
                },
                {
                  "name": "gid"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.lchown(path, uid, gid, callback)",
          "type": "method",
          "name": "lchown",
          "desc": "<p>Asynchronous lchown(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "uid"
                },
                {
                  "name": "gid"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.lchownSync(path, uid, gid)",
          "type": "method",
          "name": "lchownSync",
          "desc": "<p>Synchronous lchown(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "uid"
                },
                {
                  "name": "gid"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.chmod(path, mode, callback)",
          "type": "method",
          "name": "chmod",
          "desc": "<p>Asynchronous chmod(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "mode"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.chmodSync(path, mode)",
          "type": "method",
          "name": "chmodSync",
          "desc": "<p>Synchronous chmod(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "mode"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.fchmod(fd, mode, callback)",
          "type": "method",
          "name": "fchmod",
          "desc": "<p>Asynchronous fchmod(2). No arguments other than a possible exception\nare given to the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "mode"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.fchmodSync(fd, mode)",
          "type": "method",
          "name": "fchmodSync",
          "desc": "<p>Synchronous fchmod(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "mode"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.lchmod(path, mode, callback)",
          "type": "method",
          "name": "lchmod",
          "desc": "<p>Asynchronous lchmod(2). No arguments other than a possible exception\nare given to the completion callback.\n\n</p>\n<p>Only available on Mac OS X.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "mode"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.lchmodSync(path, mode)",
          "type": "method",
          "name": "lchmodSync",
          "desc": "<p>Synchronous lchmod(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "mode"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.stat(path, callback)",
          "type": "method",
          "name": "stat",
          "desc": "<p>Asynchronous stat(2). The callback gets two arguments <code>(err, stats)</code> where\n<code>stats</code> is a <a href=\"#fs_class_fs_stats\">fs.Stats</a> object.  See the <a href=\"#fs_class_fs_stats\">fs.Stats</a>\nsection below for more information.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.lstat(path, callback)",
          "type": "method",
          "name": "lstat",
          "desc": "<p>Asynchronous lstat(2). The callback gets two arguments <code>(err, stats)</code> where\n<code>stats</code> is a <code>fs.Stats</code> object. <code>lstat()</code> is identical to <code>stat()</code>, except that if\n<code>path</code> is a symbolic link, then the link itself is stat-ed, not the file that it\nrefers to.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.fstat(fd, callback)",
          "type": "method",
          "name": "fstat",
          "desc": "<p>Asynchronous fstat(2). The callback gets two arguments <code>(err, stats)</code> where\n<code>stats</code> is a <code>fs.Stats</code> object. <code>fstat()</code> is identical to <code>stat()</code>, except that\nthe file to be stat-ed is specified by the file descriptor <code>fd</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.statSync(path)",
          "type": "method",
          "name": "statSync",
          "desc": "<p>Synchronous stat(2). Returns an instance of <code>fs.Stats</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.lstatSync(path)",
          "type": "method",
          "name": "lstatSync",
          "desc": "<p>Synchronous lstat(2). Returns an instance of <code>fs.Stats</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.fstatSync(fd)",
          "type": "method",
          "name": "fstatSync",
          "desc": "<p>Synchronous fstat(2). Returns an instance of <code>fs.Stats</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.link(srcpath, dstpath, callback)",
          "type": "method",
          "name": "link",
          "desc": "<p>Asynchronous link(2). No arguments other than a possible exception are given to\nthe completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "srcpath"
                },
                {
                  "name": "dstpath"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.linkSync(srcpath, dstpath)",
          "type": "method",
          "name": "linkSync",
          "desc": "<p>Synchronous link(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "srcpath"
                },
                {
                  "name": "dstpath"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.symlink(srcpath, dstpath, [type], callback)",
          "type": "method",
          "name": "symlink",
          "desc": "<p>Asynchronous symlink(2). No arguments other than a possible exception are given\nto the completion callback.\nThe <code>type</code> argument can be set to <code>&#39;dir&#39;</code>, <code>&#39;file&#39;</code>, or <code>&#39;junction&#39;</code> (default\nis <code>&#39;file&#39;</code>) and is only available on Windows (ignored on other platforms).\nNote that Windows junction points require the destination path to be absolute.  When using\n<code>&#39;junction&#39;</code>, the <code>destination</code> argument will automatically be normalized to absolute path.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "srcpath"
                },
                {
                  "name": "dstpath"
                },
                {
                  "name": "type",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.symlinkSync(srcpath, dstpath, [type])",
          "type": "method",
          "name": "symlinkSync",
          "desc": "<p>Synchronous symlink(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "srcpath"
                },
                {
                  "name": "dstpath"
                },
                {
                  "name": "type",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.readlink(path, callback)",
          "type": "method",
          "name": "readlink",
          "desc": "<p>Asynchronous readlink(2). The callback gets two arguments <code>(err,\nlinkString)</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.readlinkSync(path)",
          "type": "method",
          "name": "readlinkSync",
          "desc": "<p>Synchronous readlink(2). Returns the symbolic link&#39;s string value.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.realpath(path, [cache], callback)",
          "type": "method",
          "name": "realpath",
          "desc": "<p>Asynchronous realpath(2). The <code>callback</code> gets two arguments <code>(err,\nresolvedPath)</code>. May use <code>process.cwd</code> to resolve relative paths. <code>cache</code> is an\nobject literal of mapped paths that can be used to force a specific path\nresolution or avoid additional <code>fs.stat</code> calls for known real paths.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var cache = {&#39;/etc&#39;:&#39;/private/etc&#39;};\nfs.realpath(&#39;/etc/passwd&#39;, cache, function (err, resolvedPath) {\n  if (err) throw err;\n  console.log(resolvedPath);\n});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "cache",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.realpathSync(path, [cache])",
          "type": "method",
          "name": "realpathSync",
          "desc": "<p>Synchronous realpath(2). Returns the resolved path.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "cache",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.unlink(path, callback)",
          "type": "method",
          "name": "unlink",
          "desc": "<p>Asynchronous unlink(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.unlinkSync(path)",
          "type": "method",
          "name": "unlinkSync",
          "desc": "<p>Synchronous unlink(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.rmdir(path, callback)",
          "type": "method",
          "name": "rmdir",
          "desc": "<p>Asynchronous rmdir(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.rmdirSync(path)",
          "type": "method",
          "name": "rmdirSync",
          "desc": "<p>Synchronous rmdir(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.mkdir(path, [mode], callback)",
          "type": "method",
          "name": "mkdir",
          "desc": "<p>Asynchronous mkdir(2). No arguments other than a possible exception are given\nto the completion callback. <code>mode</code> defaults to <code>0777</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "mode",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.mkdirSync(path, [mode])",
          "type": "method",
          "name": "mkdirSync",
          "desc": "<p>Synchronous mkdir(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "mode",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.readdir(path, callback)",
          "type": "method",
          "name": "readdir",
          "desc": "<p>Asynchronous readdir(3).  Reads the contents of a directory.\nThe callback gets two arguments <code>(err, files)</code> where <code>files</code> is an array of\nthe names of the files in the directory excluding <code>&#39;.&#39;</code> and <code>&#39;..&#39;</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.readdirSync(path)",
          "type": "method",
          "name": "readdirSync",
          "desc": "<p>Synchronous readdir(3). Returns an array of filenames excluding <code>&#39;.&#39;</code> and\n<code>&#39;..&#39;</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.close(fd, callback)",
          "type": "method",
          "name": "close",
          "desc": "<p>Asynchronous close(2).  No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.closeSync(fd)",
          "type": "method",
          "name": "closeSync",
          "desc": "<p>Synchronous close(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.open(path, flags, [mode], callback)",
          "type": "method",
          "name": "open",
          "desc": "<p>Asynchronous file open. See open(2). <code>flags</code> can be:\n\n</p>\n<ul>\n<li><p><code>&#39;r&#39;</code> - Open file for reading.\nAn exception occurs if the file does not exist.</p>\n</li>\n<li><p><code>&#39;r+&#39;</code> - Open file for reading and writing.\nAn exception occurs if the file does not exist.</p>\n</li>\n<li><p><code>&#39;rs&#39;</code> - Open file for reading in synchronous mode. Instructs the operating\nsystem to bypass the local file system cache.</p>\n<p>This is primarily useful for opening files on NFS mounts as it allows you to\nskip the potentially stale local cache. It has a very real impact on I/O\nperformance so don&#39;t use this flag unless you need it.</p>\n<p>Note that this doesn&#39;t turn <code>fs.open()</code> into a synchronous blocking call.\nIf that&#39;s what you want then you should be using <code>fs.openSync()</code></p>\n</li>\n<li><p><code>&#39;rs+&#39;</code> - Open file for reading and writing, telling the OS to open it\nsynchronously. See notes for <code>&#39;rs&#39;</code> about using this with caution.</p>\n</li>\n<li><p><code>&#39;w&#39;</code> - Open file for writing.\nThe file is created (if it does not exist) or truncated (if it exists).</p>\n</li>\n<li><p><code>&#39;wx&#39;</code> - Like <code>&#39;w&#39;</code> but fails if <code>path</code> exists.</p>\n</li>\n<li><p><code>&#39;w+&#39;</code> - Open file for reading and writing.\nThe file is created (if it does not exist) or truncated (if it exists).</p>\n</li>\n<li><p><code>&#39;wx+&#39;</code> - Like <code>&#39;w+&#39;</code> but fails if <code>path</code> exists.</p>\n</li>\n<li><p><code>&#39;a&#39;</code> - Open file for appending.\nThe file is created if it does not exist.</p>\n</li>\n<li><p><code>&#39;ax&#39;</code> - Like <code>&#39;a&#39;</code> but fails if <code>path</code> exists.</p>\n</li>\n<li><p><code>&#39;a+&#39;</code> - Open file for reading and appending.\nThe file is created if it does not exist.</p>\n</li>\n<li><p><code>&#39;ax+&#39;</code> - Like <code>&#39;a+&#39;</code> but fails if <code>path</code> exists.</p>\n</li>\n</ul>\n<p><code>mode</code> sets the file mode (permission and sticky bits), but only if the file was\ncreated. It defaults to <code>0666</code>, readable and writeable.\n\n</p>\n<p>The callback gets two arguments <code>(err, fd)</code>.\n\n</p>\n<p>The exclusive flag <code>&#39;x&#39;</code> (<code>O_EXCL</code> flag in open(2)) ensures that <code>path</code> is newly\ncreated. On POSIX systems, <code>path</code> is considered to exist even if it is a symlink\nto a non-existent file. The exclusive flag may or may not work with network file\nsystems.\n\n</p>\n<p>On Linux, positional writes don&#39;t work when the file is opened in append mode.\nThe kernel ignores the position argument and always appends the data to\nthe end of the file.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "flags"
                },
                {
                  "name": "mode",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.openSync(path, flags, [mode])",
          "type": "method",
          "name": "openSync",
          "desc": "<p>Synchronous version of <code>fs.open()</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "flags"
                },
                {
                  "name": "mode",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.utimes(path, atime, mtime, callback)",
          "type": "method",
          "name": "utimes",
          "desc": "<p>Change file timestamps of the file referenced by the supplied path.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "atime"
                },
                {
                  "name": "mtime"
                }
              ]
            },
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "atime"
                },
                {
                  "name": "mtime"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.utimesSync(path, atime, mtime)",
          "type": "method",
          "name": "utimesSync",
          "desc": "<p>Change file timestamps of the file referenced by the supplied path.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "atime"
                },
                {
                  "name": "mtime"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.futimes(fd, atime, mtime, callback)",
          "type": "method",
          "name": "futimes",
          "desc": "<p>Change the file timestamps of a file referenced by the supplied file\ndescriptor.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "atime"
                },
                {
                  "name": "mtime"
                }
              ]
            },
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "atime"
                },
                {
                  "name": "mtime"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.futimesSync(fd, atime, mtime)",
          "type": "method",
          "name": "futimesSync",
          "desc": "<p>Change the file timestamps of a file referenced by the supplied file\ndescriptor.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "atime"
                },
                {
                  "name": "mtime"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.fsync(fd, callback)",
          "type": "method",
          "name": "fsync",
          "desc": "<p>Asynchronous fsync(2). No arguments other than a possible exception are given\nto the completion callback.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.fsyncSync(fd)",
          "type": "method",
          "name": "fsyncSync",
          "desc": "<p>Synchronous fsync(2).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.write(fd, buffer, offset, length, position, callback)",
          "type": "method",
          "name": "write",
          "desc": "<p>Write <code>buffer</code> to the file specified by <code>fd</code>.\n\n</p>\n<p><code>offset</code> and <code>length</code> determine the part of the buffer to be written.\n\n</p>\n<p><code>position</code> refers to the offset from the beginning of the file where this data\nshould be written. If <code>position</code> is <code>null</code>, the data will be written at the\ncurrent position.\nSee pwrite(2).\n\n</p>\n<p>The callback will be given three arguments <code>(err, written, buffer)</code> where <code>written</code>\nspecifies how many <em>bytes</em> were written from <code>buffer</code>.\n\n</p>\n<p>Note that it is unsafe to use <code>fs.write</code> multiple times on the same file\nwithout waiting for the callback. For this scenario,\n<code>fs.createWriteStream</code> is strongly recommended.\n\n</p>\n<p>On Linux, positional writes don&#39;t work when the file is opened in append mode.\nThe kernel ignores the position argument and always appends the data to\nthe end of the file.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "buffer"
                },
                {
                  "name": "offset"
                },
                {
                  "name": "length"
                },
                {
                  "name": "position"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.writeSync(fd, buffer, offset, length, position)",
          "type": "method",
          "name": "writeSync",
          "desc": "<p>Synchronous version of <code>fs.write()</code>. Returns the number of bytes written.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "buffer"
                },
                {
                  "name": "offset"
                },
                {
                  "name": "length"
                },
                {
                  "name": "position"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.read(fd, buffer, offset, length, position, callback)",
          "type": "method",
          "name": "read",
          "desc": "<p>Read data from the file specified by <code>fd</code>.\n\n</p>\n<p><code>buffer</code> is the buffer that the data will be written to.\n\n</p>\n<p><code>offset</code> is the offset in the buffer to start writing at.\n\n</p>\n<p><code>length</code> is an integer specifying the number of bytes to read.\n\n</p>\n<p><code>position</code> is an integer specifying where to begin reading from in the file.\nIf <code>position</code> is <code>null</code>, data will be read from the current file position.\n\n</p>\n<p>The callback is given the three arguments, <code>(err, bytesRead, buffer)</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "buffer"
                },
                {
                  "name": "offset"
                },
                {
                  "name": "length"
                },
                {
                  "name": "position"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.readSync(fd, buffer, offset, length, position)",
          "type": "method",
          "name": "readSync",
          "desc": "<p>Synchronous version of <code>fs.read</code>. Returns the number of <code>bytesRead</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                },
                {
                  "name": "buffer"
                },
                {
                  "name": "offset"
                },
                {
                  "name": "length"
                },
                {
                  "name": "position"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.readFile(filename, [options], callback)",
          "type": "method",
          "name": "readFile",
          "signatures": [
            {
              "params": [
                {
                  "textRaw": "`filename` {String} ",
                  "name": "filename",
                  "type": "String"
                },
                {
                  "textRaw": "`options` {Object} ",
                  "options": [
                    {
                      "textRaw": "`encoding` {String | Null} default = `null` ",
                      "name": "encoding",
                      "type": "String | Null",
                      "desc": "default = `null`"
                    },
                    {
                      "textRaw": "`flag` {String} default = `'r'` ",
                      "name": "flag",
                      "type": "String",
                      "desc": "default = `'r'`"
                    }
                  ],
                  "name": "options",
                  "type": "Object",
                  "optional": true
                },
                {
                  "textRaw": "`callback` {Function} ",
                  "name": "callback",
                  "type": "Function"
                }
              ]
            },
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ],
          "desc": "<p>Asynchronously reads the entire contents of a file. Example:\n\n</p>\n<pre><code>fs.readFile(&#39;/etc/passwd&#39;, function (err, data) {\n  if (err) throw err;\n  console.log(data);\n});</code></pre>\n<p>The callback is passed two arguments <code>(err, data)</code>, where <code>data</code> is the\ncontents of the file.\n\n</p>\n<p>If no encoding is specified, then the raw buffer is returned.\n\n\n</p>\n"
        },
        {
          "textRaw": "fs.readFileSync(filename, [options])",
          "type": "method",
          "name": "readFileSync",
          "desc": "<p>Synchronous version of <code>fs.readFile</code>. Returns the contents of the <code>filename</code>.\n\n</p>\n<p>If the <code>encoding</code> option is specified then this function returns a\nstring. Otherwise it returns a buffer.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.writeFile(filename, data, [options], callback)",
          "type": "method",
          "name": "writeFile",
          "signatures": [
            {
              "params": [
                {
                  "textRaw": "`filename` {String} ",
                  "name": "filename",
                  "type": "String"
                },
                {
                  "textRaw": "`data` {String | Buffer} ",
                  "name": "data",
                  "type": "String | Buffer"
                },
                {
                  "textRaw": "`options` {Object} ",
                  "options": [
                    {
                      "textRaw": "`encoding` {String | Null} default = `'utf8'` ",
                      "name": "encoding",
                      "type": "String | Null",
                      "desc": "default = `'utf8'`"
                    },
                    {
                      "textRaw": "`mode` {Number} default = `438` (aka `0666` in Octal) ",
                      "name": "mode",
                      "type": "Number",
                      "desc": "default = `438` (aka `0666` in Octal)"
                    },
                    {
                      "textRaw": "`flag` {String} default = `'w'` ",
                      "name": "flag",
                      "type": "String",
                      "desc": "default = `'w'`"
                    }
                  ],
                  "name": "options",
                  "type": "Object",
                  "optional": true
                },
                {
                  "textRaw": "`callback` {Function} ",
                  "name": "callback",
                  "type": "Function"
                }
              ]
            },
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "data"
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ],
          "desc": "<p>Asynchronously writes data to a file, replacing the file if it already exists.\n<code>data</code> can be a string or a buffer.\n\n</p>\n<p>The <code>encoding</code> option is ignored if <code>data</code> is a buffer. It defaults\nto <code>&#39;utf8&#39;</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>fs.writeFile(&#39;message.txt&#39;, &#39;Hello Node&#39;, function (err) {\n  if (err) throw err;\n  console.log(&#39;It\\&#39;s saved!&#39;);\n});</code></pre>\n"
        },
        {
          "textRaw": "fs.writeFileSync(filename, data, [options])",
          "type": "method",
          "name": "writeFileSync",
          "desc": "<p>The synchronous version of <code>fs.writeFile</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "data"
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.appendFile(filename, data, [options], callback)",
          "type": "method",
          "name": "appendFile",
          "signatures": [
            {
              "params": [
                {
                  "textRaw": "`filename` {String} ",
                  "name": "filename",
                  "type": "String"
                },
                {
                  "textRaw": "`data` {String | Buffer} ",
                  "name": "data",
                  "type": "String | Buffer"
                },
                {
                  "textRaw": "`options` {Object} ",
                  "options": [
                    {
                      "textRaw": "`encoding` {String | Null} default = `'utf8'` ",
                      "name": "encoding",
                      "type": "String | Null",
                      "desc": "default = `'utf8'`"
                    },
                    {
                      "textRaw": "`mode` {Number} default = `438` (aka `0666` in Octal) ",
                      "name": "mode",
                      "type": "Number",
                      "desc": "default = `438` (aka `0666` in Octal)"
                    },
                    {
                      "textRaw": "`flag` {String} default = `'a'` ",
                      "name": "flag",
                      "type": "String",
                      "desc": "default = `'a'`"
                    }
                  ],
                  "name": "options",
                  "type": "Object",
                  "optional": true
                },
                {
                  "textRaw": "`callback` {Function} ",
                  "name": "callback",
                  "type": "Function"
                }
              ]
            },
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "data"
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ],
          "desc": "<p>Asynchronously append data to a file, creating the file if it not yet exists.\n<code>data</code> can be a string or a buffer.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>fs.appendFile(&#39;message.txt&#39;, &#39;data to append&#39;, function (err) {\n  if (err) throw err;\n  console.log(&#39;The &quot;data to append&quot; was appended to file!&#39;);\n});</code></pre>\n"
        },
        {
          "textRaw": "fs.appendFileSync(filename, data, [options])",
          "type": "method",
          "name": "appendFileSync",
          "desc": "<p>The synchronous version of <code>fs.appendFile</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "data"
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.watchFile(filename, [options], listener)",
          "type": "method",
          "name": "watchFile",
          "stability": 2,
          "stabilityText": "Unstable.  Use fs.watch instead, if possible.",
          "desc": "<p>Watch for changes on <code>filename</code>. The callback <code>listener</code> will be called each\ntime the file is accessed.\n\n</p>\n<p>The second argument is optional. The <code>options</code> if provided should be an object\ncontaining two members a boolean, <code>persistent</code>, and <code>interval</code>. <code>persistent</code>\nindicates whether the process should continue to run as long as files are\nbeing watched. <code>interval</code> indicates how often the target should be polled,\nin milliseconds. The default is <code>{ persistent: true, interval: 5007 }</code>.\n\n</p>\n<p>The <code>listener</code> gets two arguments the current stat object and the previous\nstat object:\n\n</p>\n<pre><code>fs.watchFile(&#39;message.text&#39;, function (curr, prev) {\n  console.log(&#39;the current mtime is: &#39; + curr.mtime);\n  console.log(&#39;the previous mtime was: &#39; + prev.mtime);\n});</code></pre>\n<p>These stat objects are instances of <code>fs.Stat</code>.\n\n</p>\n<p>If you want to be notified when the file was modified, not just accessed\nyou need to compare <code>curr.mtime</code> and <code>prev.mtime</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "listener"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.unwatchFile(filename, [listener])",
          "type": "method",
          "name": "unwatchFile",
          "stability": 2,
          "stabilityText": "Unstable.  Use fs.watch instead, if possible.",
          "desc": "<p>Stop watching for changes on <code>filename</code>. If <code>listener</code> is specified, only that\nparticular listener is removed. Otherwise, <em>all</em> listeners are removed and you\nhave effectively stopped watching <code>filename</code>.\n\n</p>\n<p>Calling <code>fs.unwatchFile()</code> with a filename that is not being watched is a\nno-op, not an error.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "listener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.watch(filename, [options], [listener])",
          "type": "method",
          "name": "watch",
          "stability": 2,
          "stabilityText": "Unstable.",
          "desc": "<p>Watch for changes on <code>filename</code>, where <code>filename</code> is either a file or a\ndirectory.  The returned object is a <a href=\"#fs_class_fs_fswatcher\">fs.FSWatcher</a>.\n\n</p>\n<p>The second argument is optional. The <code>options</code> if provided should be an object\ncontaining a boolean member <code>persistent</code>, which indicates whether the process\nshould continue to run as long as files are being watched. The default is\n<code>{ persistent: true }</code>.\n\n</p>\n<p>The listener callback gets two arguments <code>(event, filename)</code>.  <code>event</code> is either\n&#39;rename&#39; or &#39;change&#39;, and <code>filename</code> is the name of the file which triggered\nthe event.\n\n</p>\n",
          "miscs": [
            {
              "textRaw": "Caveats",
              "name": "Caveats",
              "type": "misc",
              "desc": "<p>The <code>fs.watch</code> API is not 100% consistent across platforms, and is\nunavailable in some situations.\n\n</p>\n",
              "miscs": [
                {
                  "textRaw": "Availability",
                  "name": "Availability",
                  "type": "misc",
                  "desc": "<p>This feature depends on the underlying operating system providing a way\nto be notified of filesystem changes.\n\n</p>\n<ul>\n<li>On Linux systems, this uses <code>inotify</code>.</li>\n<li>On BSD systems (including OS X), this uses <code>kqueue</code>.</li>\n<li>On SunOS systems (including Solaris and SmartOS), this uses <code>event ports</code>.</li>\n<li>On Windows systems, this feature depends on <code>ReadDirectoryChangesW</code>.</li>\n</ul>\n<p>If the underlying functionality is not available for some reason, then\n<code>fs.watch</code> will not be able to function.  For example, watching files or\ndirectories on network file systems (NFS, SMB, etc.) often doesn&#39;t work\nreliably or at all.\n\n</p>\n<p>You can still use <code>fs.watchFile</code>, which uses stat polling, but it is slower and\nless reliable.\n\n</p>\n"
                },
                {
                  "textRaw": "Filename Argument",
                  "name": "Filename Argument",
                  "type": "misc",
                  "desc": "<p>Providing <code>filename</code> argument in the callback is not supported\non every platform (currently it&#39;s only supported on Linux and Windows).  Even\non supported platforms <code>filename</code> is not always guaranteed to be provided.\nTherefore, don&#39;t assume that <code>filename</code> argument is always provided in the\ncallback, and have some fallback logic if it is null.\n\n</p>\n<pre><code>fs.watch(&#39;somedir&#39;, function (event, filename) {\n  console.log(&#39;event is: &#39; + event);\n  if (filename) {\n    console.log(&#39;filename provided: &#39; + filename);\n  } else {\n    console.log(&#39;filename not provided&#39;);\n  }\n});</code></pre>\n"
                }
              ]
            }
          ],
          "signatures": [
            {
              "params": [
                {
                  "name": "filename"
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "listener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.exists(path, callback)",
          "type": "method",
          "name": "exists",
          "desc": "<p>Test whether or not the given path exists by checking with the file system.\nThen call the <code>callback</code> argument with either true or false.  Example:\n\n</p>\n<pre><code>fs.exists(&#39;/etc/passwd&#39;, function (exists) {\n  util.debug(exists ? &quot;it&#39;s there&quot; : &quot;no passwd!&quot;);\n});</code></pre>\n<p><code>fs.exists()</code> is an anachronism and exists only for historical reasons.\nThere should almost never be a reason to use it in your own code.\n\n</p>\n<p>In particular, checking if a file exists before opening it is an anti-pattern\nthat leaves you vulnerable to race conditions: another process may remove the\nfile between the calls to <code>fs.exists()</code> and <code>fs.open()</code>.  Just open the file\nand handle the error when it&#39;s not there.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.existsSync(path)",
          "type": "method",
          "name": "existsSync",
          "desc": "<p>Synchronous version of <code>fs.exists</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.createReadStream(path, [options])",
          "type": "method",
          "name": "createReadStream",
          "desc": "<p>Returns a new ReadStream object (See <code>Readable Stream</code>).\n\n</p>\n<p><code>options</code> is an object with the following defaults:\n\n</p>\n<pre><code>{ flags: &#39;r&#39;,\n  encoding: null,\n  fd: null,\n  mode: 0666,\n  autoClose: true\n}</code></pre>\n<p><code>options</code> can include <code>start</code> and <code>end</code> values to read a range of bytes from\nthe file instead of the entire file.  Both <code>start</code> and <code>end</code> are inclusive and\nstart at 0. The <code>encoding</code> can be <code>&#39;utf8&#39;</code>, <code>&#39;ascii&#39;</code>, or <code>&#39;base64&#39;</code>.\n\n</p>\n<p>If <code>autoClose</code> is false, then the file descriptor won&#39;t be closed, even if\nthere&#39;s an error.  It is your responsiblity to close it and make sure\nthere&#39;s no file descriptor leak.  If <code>autoClose</code> is set to true (default\nbehavior), on <code>error</code> or <code>end</code> the file descriptor will be closed\nautomatically.\n\n</p>\n<p>An example to read the last 10 bytes of a file which is 100 bytes long:\n\n</p>\n<pre><code>fs.createReadStream(&#39;sample.txt&#39;, {start: 90, end: 99});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "fs.createWriteStream(path, [options])",
          "type": "method",
          "name": "createWriteStream",
          "desc": "<p>Returns a new WriteStream object (See <code>Writable Stream</code>).\n\n</p>\n<p><code>options</code> is an object with the following defaults:\n\n</p>\n<pre><code>{ flags: &#39;w&#39;,\n  encoding: null,\n  mode: 0666 }</code></pre>\n<p><code>options</code> may also include a <code>start</code> option to allow writing data at\nsome position past the beginning of the file.  Modifying a file rather\nthan replacing it may require a <code>flags</code> mode of <code>r+</code> rather than the\ndefault mode <code>w</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        }
      ],
      "classes": [
        {
          "textRaw": "Class: fs.Stats",
          "type": "class",
          "name": "fs.Stats",
          "desc": "<p>Objects returned from <code>fs.stat()</code>, <code>fs.lstat()</code> and <code>fs.fstat()</code> and their\nsynchronous counterparts are of this type.\n\n</p>\n<ul>\n<li><code>stats.isFile()</code></li>\n<li><code>stats.isDirectory()</code></li>\n<li><code>stats.isBlockDevice()</code></li>\n<li><code>stats.isCharacterDevice()</code></li>\n<li><code>stats.isSymbolicLink()</code> (only valid with  <code>fs.lstat()</code>)</li>\n<li><code>stats.isFIFO()</code></li>\n<li><code>stats.isSocket()</code></li>\n</ul>\n<p>For a regular file <code>util.inspect(stats)</code> would return a string very\nsimilar to this:\n\n</p>\n<pre><code>{ dev: 2114,\n  ino: 48064969,\n  mode: 33188,\n  nlink: 1,\n  uid: 85,\n  gid: 100,\n  rdev: 0,\n  size: 527,\n  blksize: 4096,\n  blocks: 8,\n  atime: Mon, 10 Oct 2011 23:24:11 GMT,\n  mtime: Mon, 10 Oct 2011 23:24:11 GMT,\n  ctime: Mon, 10 Oct 2011 23:24:11 GMT }</code></pre>\n<p>Please note that <code>atime</code>, <code>mtime</code> and <code>ctime</code> are instances\nof [Date][MDN-Date] object and to compare the values of\nthese objects you should use appropriate methods. For most\ngeneral uses [getTime()][MDN-Date-getTime] will return\nthe number of milliseconds elapsed since <em>1 January 1970\n00:00:00 UTC</em> and this integer should be sufficient for\nany comparison, however there additional methods which can\nbe used for displaying fuzzy information. More details can\nbe found in the [MDN JavaScript Reference][MDN-Date] page.\n\n</p>\n"
        },
        {
          "textRaw": "Class: fs.ReadStream",
          "type": "class",
          "name": "fs.ReadStream",
          "desc": "<p><code>ReadStream</code> is a <a href=\"stream.html#stream_class_stream_readable\">Readable Stream</a>.\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'open'",
              "type": "event",
              "name": "open",
              "params": [],
              "desc": "<p>Emitted when the ReadStream&#39;s file is opened.\n\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: fs.WriteStream",
          "type": "class",
          "name": "fs.WriteStream",
          "desc": "<p><code>WriteStream</code> is a <a href=\"stream.html#stream_class_stream_writable\">Writable Stream</a>.\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'open'",
              "type": "event",
              "name": "open",
              "params": [],
              "desc": "<p>Emitted when the WriteStream&#39;s file is opened.\n\n</p>\n"
            }
          ],
          "properties": [
            {
              "textRaw": "file.bytesWritten",
              "name": "bytesWritten",
              "desc": "<p>The number of bytes written so far. Does not include data that is still queued\nfor writing.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: fs.FSWatcher",
          "type": "class",
          "name": "fs.FSWatcher",
          "desc": "<p>Objects returned from <code>fs.watch()</code> are of this type.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "watcher.close()",
              "type": "method",
              "name": "close",
              "desc": "<p>Stop watching for changes on the given <code>fs.FSWatcher</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ],
          "events": [
            {
              "textRaw": "Event: 'change'",
              "type": "event",
              "name": "change",
              "params": [],
              "desc": "<p>Emitted when something changes in a watched directory or file.\nSee more details in <a href=\"#fs_fs_watch_filename_options_listener\">fs.watch</a>.\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "params": [],
              "desc": "<p>Emitted when an error occurs.\n\n</p>\n"
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "fs"
    },
    {
      "textRaw": "Path",
      "name": "path",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>This module contains utilities for handling and transforming file\npaths.  Almost all these methods perform only string transformations.\nThe file system is not consulted to check whether paths are valid.\n\n</p>\n<p>Use <code>require(&#39;path&#39;)</code> to use this module.  The following methods are provided:\n\n</p>\n",
      "methods": [
        {
          "textRaw": "path.normalize(p)",
          "type": "method",
          "name": "normalize",
          "desc": "<p>Normalize a string path, taking care of <code>&#39;..&#39;</code> and <code>&#39;.&#39;</code> parts.\n\n</p>\n<p>When multiple slashes are found, they&#39;re replaced by a single one;\nwhen the path contains a trailing slash, it is preserved.\nOn Windows backslashes are used.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>path.normalize(&#39;/foo/bar//baz/asdf/quux/..&#39;)\n// returns\n&#39;/foo/bar/baz/asdf&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "p"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "path.join([path1], [path2], [...])",
          "type": "method",
          "name": "join",
          "desc": "<p>Join all arguments together and normalize the resulting path.\n\n</p>\n<p>Arguments must be strings.  In v0.8, non-string arguments were\nsilently ignored.  In v0.10 and up, an exception is thrown.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>path.join(&#39;/foo&#39;, &#39;bar&#39;, &#39;baz/asdf&#39;, &#39;quux&#39;, &#39;..&#39;)\n// returns\n&#39;/foo/bar/baz/asdf&#39;\n\npath.join(&#39;foo&#39;, {}, &#39;bar&#39;)\n// throws exception\nTypeError: Arguments to path.join must be strings</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path1",
                  "optional": true
                },
                {
                  "name": "path2",
                  "optional": true
                },
                {
                  "name": "...",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "path.resolve([from ...], to)",
          "type": "method",
          "name": "resolve",
          "desc": "<p>Resolves <code>to</code> to an absolute path.\n\n</p>\n<p>If <code>to</code> isn&#39;t already absolute <code>from</code> arguments are prepended in right to left\norder, until an absolute path is found. If after using all <code>from</code> paths still\nno absolute path is found, the current working directory is used as well. The\nresulting path is normalized, and trailing slashes are removed unless the path\ngets resolved to the root directory. Non-string <code>from</code> arguments are ignored.\n\n</p>\n<p>Another way to think of it is as a sequence of <code>cd</code> commands in a shell.\n\n</p>\n<pre><code>path.resolve(&#39;foo/bar&#39;, &#39;/tmp/file/&#39;, &#39;..&#39;, &#39;a/../subfile&#39;)</code></pre>\n<p>Is similar to:\n\n</p>\n<pre><code>cd foo/bar\ncd /tmp/file/\ncd ..\ncd a/../subfile\npwd</code></pre>\n<p>The difference is that the different paths don&#39;t need to exist and may also be\nfiles.\n\n</p>\n<p>Examples:\n\n</p>\n<pre><code>path.resolve(&#39;/foo/bar&#39;, &#39;./baz&#39;)\n// returns\n&#39;/foo/bar/baz&#39;\n\npath.resolve(&#39;/foo/bar&#39;, &#39;/tmp/file/&#39;)\n// returns\n&#39;/tmp/file&#39;\n\npath.resolve(&#39;wwwroot&#39;, &#39;static_files/png/&#39;, &#39;../gif/image.gif&#39;)\n// if currently in /home/myself/node, it returns\n&#39;/home/myself/node/wwwroot/static_files/gif/image.gif&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "from ...",
                  "optional": true
                },
                {
                  "name": "to"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "path.relative(from, to)",
          "type": "method",
          "name": "relative",
          "desc": "<p>Solve the relative path from <code>from</code> to <code>to</code>.\n\n</p>\n<p>At times we have two absolute paths, and we need to derive the relative\npath from one to the other.  This is actually the reverse transform of\n<code>path.resolve</code>, which means we see that:\n\n</p>\n<pre><code>path.resolve(from, path.relative(from, to)) == path.resolve(to)</code></pre>\n<p>Examples:\n\n</p>\n<pre><code>path.relative(&#39;C:\\\\orandea\\\\test\\\\aaa&#39;, &#39;C:\\\\orandea\\\\impl\\\\bbb&#39;)\n// returns\n&#39;..\\\\..\\\\impl\\\\bbb&#39;\n\npath.relative(&#39;/data/orandea/test/aaa&#39;, &#39;/data/orandea/impl/bbb&#39;)\n// returns\n&#39;../../impl/bbb&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "from"
                },
                {
                  "name": "to"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "path.dirname(p)",
          "type": "method",
          "name": "dirname",
          "desc": "<p>Return the directory name of a path.  Similar to the Unix <code>dirname</code> command.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>path.dirname(&#39;/foo/bar/baz/asdf/quux&#39;)\n// returns\n&#39;/foo/bar/baz/asdf&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "p"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "path.basename(p, [ext])",
          "type": "method",
          "name": "basename",
          "desc": "<p>Return the last portion of a path.  Similar to the Unix <code>basename</code> command.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>path.basename(&#39;/foo/bar/baz/asdf/quux.html&#39;)\n// returns\n&#39;quux.html&#39;\n\npath.basename(&#39;/foo/bar/baz/asdf/quux.html&#39;, &#39;.html&#39;)\n// returns\n&#39;quux&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "p"
                },
                {
                  "name": "ext",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "path.extname(p)",
          "type": "method",
          "name": "extname",
          "desc": "<p>Return the extension of the path, from the last &#39;.&#39; to end of string\nin the last portion of the path.  If there is no &#39;.&#39; in the last portion\nof the path or the first character of it is &#39;.&#39;, then it returns\nan empty string.  Examples:\n\n</p>\n<pre><code>path.extname(&#39;index.html&#39;)\n// returns\n&#39;.html&#39;\n\npath.extname(&#39;index.coffee.md&#39;)\n// returns\n&#39;.md&#39;\n\npath.extname(&#39;index.&#39;)\n// returns\n&#39;.&#39;\n\npath.extname(&#39;index&#39;)\n// returns\n&#39;&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "p"
                }
              ]
            }
          ]
        }
      ],
      "properties": [
        {
          "textRaw": "path.sep",
          "name": "sep",
          "desc": "<p>The platform-specific file separator. <code>&#39;\\\\&#39;</code> or <code>&#39;/&#39;</code>.\n\n</p>\n<p>An example on *nix:\n\n</p>\n<pre><code>&#39;foo/bar/baz&#39;.split(path.sep)\n// returns\n[&#39;foo&#39;, &#39;bar&#39;, &#39;baz&#39;]</code></pre>\n<p>An example on Windows:\n\n</p>\n<pre><code>&#39;foo\\\\bar\\\\baz&#39;.split(path.sep)\n// returns\n[&#39;foo&#39;, &#39;bar&#39;, &#39;baz&#39;]</code></pre>\n"
        },
        {
          "textRaw": "path.delimiter",
          "name": "delimiter",
          "desc": "<p>The platform-specific path delimiter, <code>;</code> or <code>&#39;:&#39;</code>.\n\n</p>\n<p>An example on *nix:\n\n</p>\n<pre><code>console.log(process.env.PATH)\n// &#39;/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin&#39;\n\nprocess.env.PATH.split(path.delimiter)\n// returns\n[&#39;/usr/bin&#39;, &#39;/bin&#39;, &#39;/usr/sbin&#39;, &#39;/sbin&#39;, &#39;/usr/local/bin&#39;]</code></pre>\n<p>An example on Windows:\n\n</p>\n<pre><code>console.log(process.env.PATH)\n// &#39;C:\\Windows\\system32;C:\\Windows;C:\\Program Files\\nodejs\\&#39;\n\nprocess.env.PATH.split(path.delimiter)\n// returns\n[&#39;C:\\Windows\\system32&#39;, &#39;C:\\Windows&#39;, &#39;C:\\Program Files\\nodejs\\&#39;]</code></pre>\n"
        }
      ],
      "type": "module",
      "displayName": "Path"
    },
    {
      "textRaw": "net",
      "name": "net",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>The <code>net</code> module provides you with an asynchronous network wrapper. It contains\nmethods for creating both servers and clients (called streams). You can include\nthis module with <code>require(&#39;net&#39;);</code>\n\n</p>\n",
      "methods": [
        {
          "textRaw": "net.createServer([options], [connectionListener])",
          "type": "method",
          "name": "createServer",
          "desc": "<p>Creates a new TCP server. The <code>connectionListener</code> argument is\nautomatically set as a listener for the [&#39;connection&#39;][] event.\n\n</p>\n<p><code>options</code> is an object with the following defaults:\n\n</p>\n<pre><code>{ allowHalfOpen: false\n}</code></pre>\n<p>If <code>allowHalfOpen</code> is <code>true</code>, then the socket won&#39;t automatically send a FIN\npacket when the other end of the socket sends a FIN packet. The socket becomes\nnon-readable, but still writable. You should call the <code>end()</code> method explicitly.\nSee [&#39;end&#39;][] event for more information.\n\n</p>\n<p>Here is an example of an echo server which listens for connections\non port 8124:\n\n</p>\n<pre><code>var net = require(&#39;net&#39;);\nvar server = net.createServer(function(c) { //&#39;connection&#39; listener\n  console.log(&#39;server connected&#39;);\n  c.on(&#39;end&#39;, function() {\n    console.log(&#39;server disconnected&#39;);\n  });\n  c.write(&#39;hello\\r\\n&#39;);\n  c.pipe(c);\n});\nserver.listen(8124, function() { //&#39;listening&#39; listener\n  console.log(&#39;server bound&#39;);\n});</code></pre>\n<p>Test this by using <code>telnet</code>:\n\n</p>\n<pre><code>telnet localhost 8124</code></pre>\n<p>To listen on the socket <code>/tmp/echo.sock</code> the third line from the last would\njust be changed to\n\n</p>\n<pre><code>server.listen(&#39;/tmp/echo.sock&#39;, function() { //&#39;listening&#39; listener</code></pre>\n<p>Use <code>nc</code> to connect to a UNIX domain socket server:\n\n</p>\n<pre><code>nc -U /tmp/echo.sock</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "connectionListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.connect(options, [connectionListener])",
          "type": "method",
          "name": "connect",
          "desc": "<p>A factory method, which returns a new <a href=\"#net_class_net_socket\">&#39;net.Socket&#39;</a>\nand connects to the supplied address and port.\n\n</p>\n<p>When the socket is established, the [&#39;connect&#39;][] event will be emitted.\n\n</p>\n<p>Has the same events as <a href=\"#net_class_net_socket\">&#39;net.Socket&#39;</a>.\n\n</p>\n<p>For TCP sockets, <code>options</code> argument should be an object which specifies:\n\n</p>\n<ul>\n<li><p><code>port</code>: Port the client should connect to (Required).</p>\n</li>\n<li><p><code>host</code>: Host the client should connect to. Defaults to <code>&#39;localhost&#39;</code>.</p>\n</li>\n<li><p><code>localAddress</code>: Local interface to bind to for network connections.</p>\n</li>\n</ul>\n<p>For UNIX domain sockets, <code>options</code> argument should be an object which specifies:\n\n</p>\n<ul>\n<li><code>path</code>: Path the client should connect to (Required).</li>\n</ul>\n<p>Common options are:\n\n</p>\n<ul>\n<li><code>allowHalfOpen</code>: if <code>true</code>, the socket won&#39;t automatically send\na FIN packet when the other end of the socket sends a FIN packet.\nDefaults to <code>false</code>.  See [&#39;end&#39;][] event for more information.</li>\n</ul>\n<p>The <code>connectListener</code> parameter will be added as an listener for the\n[&#39;connect&#39;][] event.\n\n</p>\n<p>Here is an example of a client of echo server as described previously:\n\n</p>\n<pre><code>var net = require(&#39;net&#39;);\nvar client = net.connect({port: 8124},\n    function() { //&#39;connect&#39; listener\n  console.log(&#39;client connected&#39;);\n  client.write(&#39;world!\\r\\n&#39;);\n});\nclient.on(&#39;data&#39;, function(data) {\n  console.log(data.toString());\n  client.end();\n});\nclient.on(&#39;end&#39;, function() {\n  console.log(&#39;client disconnected&#39;);\n});</code></pre>\n<p>To connect on the socket <code>/tmp/echo.sock</code> the second line would just be\nchanged to\n\n</p>\n<pre><code>var client = net.connect({path: &#39;/tmp/echo.sock&#39;});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "connectionListener",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "connectionListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.createConnection(options, [connectionListener])",
          "type": "method",
          "name": "createConnection",
          "desc": "<p>A factory method, which returns a new <a href=\"#net_class_net_socket\">&#39;net.Socket&#39;</a>\nand connects to the supplied address and port.\n\n</p>\n<p>When the socket is established, the [&#39;connect&#39;][] event will be emitted.\n\n</p>\n<p>Has the same events as <a href=\"#net_class_net_socket\">&#39;net.Socket&#39;</a>.\n\n</p>\n<p>For TCP sockets, <code>options</code> argument should be an object which specifies:\n\n</p>\n<ul>\n<li><p><code>port</code>: Port the client should connect to (Required).</p>\n</li>\n<li><p><code>host</code>: Host the client should connect to. Defaults to <code>&#39;localhost&#39;</code>.</p>\n</li>\n<li><p><code>localAddress</code>: Local interface to bind to for network connections.</p>\n</li>\n</ul>\n<p>For UNIX domain sockets, <code>options</code> argument should be an object which specifies:\n\n</p>\n<ul>\n<li><code>path</code>: Path the client should connect to (Required).</li>\n</ul>\n<p>Common options are:\n\n</p>\n<ul>\n<li><code>allowHalfOpen</code>: if <code>true</code>, the socket won&#39;t automatically send\na FIN packet when the other end of the socket sends a FIN packet.\nDefaults to <code>false</code>.  See [&#39;end&#39;][] event for more information.</li>\n</ul>\n<p>The <code>connectListener</code> parameter will be added as an listener for the\n[&#39;connect&#39;][] event.\n\n</p>\n<p>Here is an example of a client of echo server as described previously:\n\n</p>\n<pre><code>var net = require(&#39;net&#39;);\nvar client = net.connect({port: 8124},\n    function() { //&#39;connect&#39; listener\n  console.log(&#39;client connected&#39;);\n  client.write(&#39;world!\\r\\n&#39;);\n});\nclient.on(&#39;data&#39;, function(data) {\n  console.log(data.toString());\n  client.end();\n});\nclient.on(&#39;end&#39;, function() {\n  console.log(&#39;client disconnected&#39;);\n});</code></pre>\n<p>To connect on the socket <code>/tmp/echo.sock</code> the second line would just be\nchanged to\n\n</p>\n<pre><code>var client = net.connect({path: &#39;/tmp/echo.sock&#39;});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "connectionListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.connect(port, [host], [connectListener])",
          "type": "method",
          "name": "connect",
          "desc": "<p>Creates a TCP connection to <code>port</code> on <code>host</code>. If <code>host</code> is omitted,\n<code>&#39;localhost&#39;</code> will be assumed.\nThe <code>connectListener</code> parameter will be added as an listener for the\n[&#39;connect&#39;][] event.\n\n</p>\n<p>Is a factory method which returns a new <a href=\"#net_class_net_socket\">&#39;net.Socket&#39;</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "port"
                },
                {
                  "name": "host",
                  "optional": true
                },
                {
                  "name": "connectListener",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "port"
                },
                {
                  "name": "host",
                  "optional": true
                },
                {
                  "name": "connectListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.createConnection(port, [host], [connectListener])",
          "type": "method",
          "name": "createConnection",
          "desc": "<p>Creates a TCP connection to <code>port</code> on <code>host</code>. If <code>host</code> is omitted,\n<code>&#39;localhost&#39;</code> will be assumed.\nThe <code>connectListener</code> parameter will be added as an listener for the\n[&#39;connect&#39;][] event.\n\n</p>\n<p>Is a factory method which returns a new <a href=\"#net_class_net_socket\">&#39;net.Socket&#39;</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "port"
                },
                {
                  "name": "host",
                  "optional": true
                },
                {
                  "name": "connectListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.connect(path, [connectListener])",
          "type": "method",
          "name": "connect",
          "desc": "<p>Creates unix socket connection to <code>path</code>.\nThe <code>connectListener</code> parameter will be added as an listener for the\n[&#39;connect&#39;][] event.\n\n</p>\n<p>A factory method which returns a new <a href=\"#net_class_net_socket\">&#39;net.Socket&#39;</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "connectListener",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "connectListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.createConnection(path, [connectListener])",
          "type": "method",
          "name": "createConnection",
          "desc": "<p>Creates unix socket connection to <code>path</code>.\nThe <code>connectListener</code> parameter will be added as an listener for the\n[&#39;connect&#39;][] event.\n\n</p>\n<p>A factory method which returns a new <a href=\"#net_class_net_socket\">&#39;net.Socket&#39;</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "path"
                },
                {
                  "name": "connectListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.isIP(input)",
          "type": "method",
          "name": "isIP",
          "desc": "<p>Tests if input is an IP address. Returns 0 for invalid strings,\nreturns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "input"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.isIPv4(input)",
          "type": "method",
          "name": "isIPv4",
          "desc": "<p>Returns true if input is a version 4 IP address, otherwise returns false.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "input"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "net.isIPv6(input)",
          "type": "method",
          "name": "isIPv6",
          "desc": "<p>Returns true if input is a version 6 IP address, otherwise returns false.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "input"
                }
              ]
            }
          ]
        }
      ],
      "classes": [
        {
          "textRaw": "Class: net.Server",
          "type": "class",
          "name": "net.Server",
          "desc": "<p>This class is used to create a TCP or UNIX server.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "server.listen(port, [host], [backlog], [callback])",
              "type": "method",
              "name": "listen",
              "desc": "<p>Begin accepting connections on the specified <code>port</code> and <code>host</code>.  If the\n<code>host</code> is omitted, the server will accept connections directed to any\nIPv4 address (<code>INADDR_ANY</code>). A port value of zero will assign a random port.\n\n</p>\n<p>Backlog is the maximum length of the queue of pending connections.\nThe actual length will be determined by your OS through sysctl settings such as\n<code>tcp_max_syn_backlog</code> and <code>somaxconn</code> on linux. The default value of this\nparameter is 511 (not 512).\n\n</p>\n<p>This function is asynchronous.  When the server has been bound,\n[&#39;listening&#39;][] event will be emitted.  The last parameter <code>callback</code>\nwill be added as an listener for the [&#39;listening&#39;][] event.\n\n</p>\n<p>One issue some users run into is getting <code>EADDRINUSE</code> errors. This means that\nanother server is already running on the requested port. One way of handling this\nwould be to wait a second and then try again. This can be done with\n\n</p>\n<pre><code>server.on(&#39;error&#39;, function (e) {\n  if (e.code == &#39;EADDRINUSE&#39;) {\n    console.log(&#39;Address in use, retrying...&#39;);\n    setTimeout(function () {\n      server.close();\n      server.listen(PORT, HOST);\n    }, 1000);\n  }\n});</code></pre>\n<p>(Note: All sockets in Node set <code>SO_REUSEADDR</code> already)\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "port"
                    },
                    {
                      "name": "host",
                      "optional": true
                    },
                    {
                      "name": "backlog",
                      "optional": true
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.listen(path, [callback])",
              "type": "method",
              "name": "listen",
              "desc": "<p>Start a UNIX socket server listening for connections on the given <code>path</code>.\n\n</p>\n<p>This function is asynchronous.  When the server has been bound,\n[&#39;listening&#39;][] event will be emitted.  The last parameter <code>callback</code>\nwill be added as an listener for the [&#39;listening&#39;][] event.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "path"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.listen(handle, [callback])",
              "type": "method",
              "name": "listen",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`handle` {Object} ",
                      "name": "handle",
                      "type": "Object"
                    },
                    {
                      "textRaw": "`callback` {Function} ",
                      "name": "callback",
                      "type": "Function",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "handle"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>The <code>handle</code> object can be set to either a server or socket (anything\nwith an underlying <code>_handle</code> member), or a <code>{fd: &lt;n&gt;}</code> object.\n\n</p>\n<p>This will cause the server to accept connections on the specified\nhandle, but it is presumed that the file descriptor or handle has\nalready been bound to a port or domain socket.\n\n</p>\n<p>Listening on a file descriptor is not supported on Windows.\n\n</p>\n<p>This function is asynchronous.  When the server has been bound,\n<a href=\"#event_listening_\">&#39;listening&#39;</a> event will be emitted.\nthe last parameter <code>callback</code> will be added as an listener for the\n<a href=\"#event_listening_\">&#39;listening&#39;</a> event.\n\n</p>\n"
            },
            {
              "textRaw": "server.close([callback])",
              "type": "method",
              "name": "close",
              "desc": "<p>Stops the server from accepting new connections and keeps existing\nconnections. This function is asynchronous, the server is finally\nclosed when all connections are ended and the server emits a <code>&#39;close&#39;</code>\nevent. Optionally, you can pass a callback to listen for the <code>&#39;close&#39;</code>\nevent.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.address()",
              "type": "method",
              "name": "address",
              "desc": "<p>Returns the bound address, the address family name and port of the server\nas reported by the operating system.\nUseful to find which port was assigned when giving getting an OS-assigned address.\nReturns an object with three properties, e.g.\n<code>{ port: 12346, family: &#39;IPv4&#39;, address: &#39;127.0.0.1&#39; }</code>\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var server = net.createServer(function (socket) {\n  socket.end(&quot;goodbye\\n&quot;);\n});\n\n// grab a random port.\nserver.listen(function() {\n  address = server.address();\n  console.log(&quot;opened server on %j&quot;, address);\n});</code></pre>\n<p>Don&#39;t call <code>server.address()</code> until the <code>&#39;listening&#39;</code> event has been emitted.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "server.unref()",
              "type": "method",
              "name": "unref",
              "desc": "<p>Calling <code>unref</code> on a server will allow the program to exit if this is the only\nactive server in the event system. If the server is already <code>unref</code>d calling\n<code>unref</code> again will have no effect.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "server.ref()",
              "type": "method",
              "name": "ref",
              "desc": "<p>Opposite of <code>unref</code>, calling <code>ref</code> on a previously <code>unref</code>d server will <em>not</em>\nlet the program exit if it&#39;s the only server left (the default behavior). If\nthe server is <code>ref</code>d calling <code>ref</code> again will have no effect.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "server.getConnections(callback)",
              "type": "method",
              "name": "getConnections",
              "desc": "<p>Asynchronously get the number of concurrent connections on the server. Works\nwhen sockets were sent to forks.\n\n</p>\n<p>Callback should take two arguments <code>err</code> and <code>count</code>.\n\n</p>\n<p><code>net.Server</code> is an [EventEmitter][] with the following events:\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "callback"
                    }
                  ]
                }
              ]
            }
          ],
          "properties": [
            {
              "textRaw": "server.maxConnections",
              "name": "maxConnections",
              "desc": "<p>Set this property to reject connections when the server&#39;s connection count gets\nhigh.\n\n</p>\n<p>It is not recommended to use this option once a socket has been sent to a child\nwith <code>child_process.fork()</code>.\n\n</p>\n"
            },
            {
              "textRaw": "server.connections",
              "name": "connections",
              "desc": "<p>This function is <strong>deprecated</strong>; please use [server.getConnections()][] instead.\nThe number of concurrent connections on the server.\n\n</p>\n<p>This becomes <code>null</code> when sending a socket to a child with\n<code>child_process.fork()</code>. To poll forks and get current number of active\nconnections use asynchronous <code>server.getConnections</code> instead.\n\n</p>\n"
            }
          ],
          "events": [
            {
              "textRaw": "Event: 'listening'",
              "type": "event",
              "name": "listening",
              "desc": "<p>Emitted when the server has been bound after calling <code>server.listen</code>.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'connection'",
              "type": "event",
              "name": "connection",
              "params": [],
              "desc": "<p>Emitted when a new connection is made. <code>socket</code> is an instance of\n<code>net.Socket</code>.\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "desc": "<p>Emitted when the server closes. Note that if connections exist, this\nevent is not emitted until all connections are ended.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "params": [],
              "desc": "<p>Emitted when an error occurs.  The <code>&#39;close&#39;</code> event will be called directly\nfollowing this event.  See example in discussion of <code>server.listen</code>.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: net.Socket",
          "type": "class",
          "name": "net.Socket",
          "desc": "<p>This object is an abstraction of a TCP or UNIX socket.  <code>net.Socket</code>\ninstances implement a duplex Stream interface.  They can be created by the\nuser and used as a client (with <code>connect()</code>) or they can be created by Node\nand passed to the user through the <code>&#39;connection&#39;</code> event of a server.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "new net.Socket([options])",
              "type": "method",
              "name": "Socket",
              "desc": "<p>Construct a new socket object.\n\n</p>\n<p><code>options</code> is an object with the following defaults:\n\n</p>\n<pre><code>{ fd: null\n  allowHalfOpen: false,\n  readable: false,\n  writable: false\n}</code></pre>\n<p><code>fd</code> allows you to specify the existing file descriptor of socket.\nSet <code>readable</code> and/or <code>writable</code> to <code>true</code> to allow reads and/or writes on this\nsocket (NOTE: Works only when <code>fd</code> is passed).\nAbout <code>allowHalfOpen</code>, refer to <code>createServer()</code> and <code>&#39;end&#39;</code> event.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "options",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.connect(port, [host], [connectListener])",
              "type": "method",
              "name": "connect",
              "desc": "<p>Opens the connection for a given socket. If <code>port</code> and <code>host</code> are given,\nthen the socket will be opened as a TCP socket, if <code>host</code> is omitted,\n<code>localhost</code> will be assumed. If a <code>path</code> is given, the socket will be\nopened as a unix socket to that path.\n\n</p>\n<p>Normally this method is not needed, as <code>net.createConnection</code> opens the\nsocket. Use this only if you are implementing a custom Socket.\n\n</p>\n<p>This function is asynchronous. When the [&#39;connect&#39;][] event is emitted the\nsocket is established. If there is a problem connecting, the <code>&#39;connect&#39;</code> event\nwill not be emitted, the <code>&#39;error&#39;</code> event will be emitted with the exception.\n\n</p>\n<p>The <code>connectListener</code> parameter will be added as an listener for the\n[&#39;connect&#39;][] event.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "path"
                    },
                    {
                      "name": "connectListener",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "port"
                    },
                    {
                      "name": "host",
                      "optional": true
                    },
                    {
                      "name": "connectListener",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.connect(path, [connectListener])",
              "type": "method",
              "name": "connect",
              "desc": "<p>Opens the connection for a given socket. If <code>port</code> and <code>host</code> are given,\nthen the socket will be opened as a TCP socket, if <code>host</code> is omitted,\n<code>localhost</code> will be assumed. If a <code>path</code> is given, the socket will be\nopened as a unix socket to that path.\n\n</p>\n<p>Normally this method is not needed, as <code>net.createConnection</code> opens the\nsocket. Use this only if you are implementing a custom Socket.\n\n</p>\n<p>This function is asynchronous. When the [&#39;connect&#39;][] event is emitted the\nsocket is established. If there is a problem connecting, the <code>&#39;connect&#39;</code> event\nwill not be emitted, the <code>&#39;error&#39;</code> event will be emitted with the exception.\n\n</p>\n<p>The <code>connectListener</code> parameter will be added as an listener for the\n[&#39;connect&#39;][] event.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "path"
                    },
                    {
                      "name": "connectListener",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.setEncoding([encoding])",
              "type": "method",
              "name": "setEncoding",
              "desc": "<p>Set the encoding for the socket as a Readable Stream. See\n[stream.setEncoding()][] for more information.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.write(data, [encoding], [callback])",
              "type": "method",
              "name": "write",
              "desc": "<p>Sends data on the socket. The second parameter specifies the encoding in the\ncase of a string--it defaults to UTF8 encoding.\n\n</p>\n<p>Returns <code>true</code> if the entire data was flushed successfully to the kernel\nbuffer. Returns <code>false</code> if all or part of the data was queued in user memory.\n<code>&#39;drain&#39;</code> will be emitted when the buffer is again free.\n\n</p>\n<p>The optional <code>callback</code> parameter will be executed when the data is finally\nwritten out - this may not be immediately.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data"
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.end([data], [encoding])",
              "type": "method",
              "name": "end",
              "desc": "<p>Half-closes the socket. i.e., it sends a FIN packet. It is possible the\nserver will still send some data.\n\n</p>\n<p>If <code>data</code> is specified, it is equivalent to calling\n<code>socket.write(data, encoding)</code> followed by <code>socket.end()</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data",
                      "optional": true
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.destroy()",
              "type": "method",
              "name": "destroy",
              "desc": "<p>Ensures that no more I/O activity happens on this socket. Only necessary in\ncase of errors (parse error or so).\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "socket.pause()",
              "type": "method",
              "name": "pause",
              "desc": "<p>Pauses the reading of data. That is, <code>&#39;data&#39;</code> events will not be emitted.\nUseful to throttle back an upload.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "socket.resume()",
              "type": "method",
              "name": "resume",
              "desc": "<p>Resumes reading after a call to <code>pause()</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "socket.setTimeout(timeout, [callback])",
              "type": "method",
              "name": "setTimeout",
              "desc": "<p>Sets the socket to timeout after <code>timeout</code> milliseconds of inactivity on\nthe socket. By default <code>net.Socket</code> do not have a timeout.\n\n</p>\n<p>When an idle timeout is triggered the socket will receive a <code>&#39;timeout&#39;</code>\nevent but the connection will not be severed. The user must manually <code>end()</code>\nor <code>destroy()</code> the socket.\n\n</p>\n<p>If <code>timeout</code> is 0, then the existing idle timeout is disabled.\n\n</p>\n<p>The optional <code>callback</code> parameter will be added as a one time listener for the\n<code>&#39;timeout&#39;</code> event.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "timeout"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.setNoDelay([noDelay])",
              "type": "method",
              "name": "setNoDelay",
              "desc": "<p>Disables the Nagle algorithm. By default TCP connections use the Nagle\nalgorithm, they buffer data before sending it off. Setting <code>true</code> for\n<code>noDelay</code> will immediately fire off data each time <code>socket.write()</code> is called.\n<code>noDelay</code> defaults to <code>true</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "noDelay",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.setKeepAlive([enable], [initialDelay])",
              "type": "method",
              "name": "setKeepAlive",
              "desc": "<p>Enable/disable keep-alive functionality, and optionally set the initial\ndelay before the first keepalive probe is sent on an idle socket.\n<code>enable</code> defaults to <code>false</code>.\n\n</p>\n<p>Set <code>initialDelay</code> (in milliseconds) to set the delay between the last\ndata packet received and the first keepalive probe. Setting 0 for\ninitialDelay will leave the value unchanged from the default\n(or previous) setting. Defaults to <code>0</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "enable",
                      "optional": true
                    },
                    {
                      "name": "initialDelay",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "socket.address()",
              "type": "method",
              "name": "address",
              "desc": "<p>Returns the bound address, the address family name and port of the\nsocket as reported by the operating system. Returns an object with\nthree properties, e.g.\n<code>{ port: 12346, family: &#39;IPv4&#39;, address: &#39;127.0.0.1&#39; }</code>\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "socket.unref()",
              "type": "method",
              "name": "unref",
              "desc": "<p>Calling <code>unref</code> on a socket will allow the program to exit if this is the only\nactive socket in the event system. If the socket is already <code>unref</code>d calling\n<code>unref</code> again will have no effect.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "socket.ref()",
              "type": "method",
              "name": "ref",
              "desc": "<p>Opposite of <code>unref</code>, calling <code>ref</code> on a previously <code>unref</code>d socket will <em>not</em>\nlet the program exit if it&#39;s the only socket left (the default behavior). If\nthe socket is <code>ref</code>d calling <code>ref</code> again will have no effect.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ],
          "properties": [
            {
              "textRaw": "socket.bufferSize",
              "name": "bufferSize",
              "desc": "<p><code>net.Socket</code> has the property that <code>socket.write()</code> always works. This is to\nhelp users get up and running quickly. The computer cannot always keep up\nwith the amount of data that is written to a socket - the network connection\nsimply might be too slow. Node will internally queue up the data written to a\nsocket and send it out over the wire when it is possible. (Internally it is\npolling on the socket&#39;s file descriptor for being writable).\n\n</p>\n<p>The consequence of this internal buffering is that memory may grow. This\nproperty shows the number of characters currently buffered to be written.\n(Number of characters is approximately equal to the number of bytes to be\nwritten, but the buffer may contain strings, and the strings are lazily\nencoded, so the exact number of bytes is not known.)\n\n</p>\n<p>Users who experience large or growing <code>bufferSize</code> should attempt to\n&quot;throttle&quot; the data flows in their program with <code>pause()</code> and <code>resume()</code>.\n\n\n</p>\n"
            },
            {
              "textRaw": "socket.remoteAddress",
              "name": "remoteAddress",
              "desc": "<p>The string representation of the remote IP address. For example,\n<code>&#39;74.125.127.100&#39;</code> or <code>&#39;2001:4860:a005::68&#39;</code>.\n\n</p>\n"
            },
            {
              "textRaw": "socket.remotePort",
              "name": "remotePort",
              "desc": "<p>The numeric representation of the remote port. For example,\n<code>80</code> or <code>21</code>.\n\n</p>\n"
            },
            {
              "textRaw": "socket.localAddress",
              "name": "localAddress",
              "desc": "<p>The string representation of the local IP address the remote client is\nconnecting on. For example, if you are listening on <code>&#39;0.0.0.0&#39;</code> and the\nclient connects on <code>&#39;192.168.1.1&#39;</code>, the value would be <code>&#39;192.168.1.1&#39;</code>.\n\n</p>\n"
            },
            {
              "textRaw": "socket.localPort",
              "name": "localPort",
              "desc": "<p>The numeric representation of the local port. For example,\n<code>80</code> or <code>21</code>.\n\n</p>\n"
            },
            {
              "textRaw": "socket.bytesRead",
              "name": "bytesRead",
              "desc": "<p>The amount of received bytes.\n\n</p>\n"
            },
            {
              "textRaw": "socket.bytesWritten",
              "name": "bytesWritten",
              "desc": "<p>The amount of bytes sent.\n\n\n</p>\n<p><code>net.Socket</code> instances are [EventEmitter][] with the following events:\n\n</p>\n"
            }
          ],
          "events": [
            {
              "textRaw": "Event: 'connect'",
              "type": "event",
              "name": "connect",
              "desc": "<p>Emitted when a socket connection is successfully established.\nSee <code>connect()</code>.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'data'",
              "type": "event",
              "name": "data",
              "params": [],
              "desc": "<p>Emitted when data is received.  The argument <code>data</code> will be a <code>Buffer</code> or\n<code>String</code>.  Encoding of data is set by <code>socket.setEncoding()</code>.\n(See the [Readable Stream][] section for more information.)\n\n</p>\n<p>Note that the <strong>data will be lost</strong> if there is no listener when a <code>Socket</code>\nemits a <code>&#39;data&#39;</code> event.\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'end'",
              "type": "event",
              "name": "end",
              "desc": "<p>Emitted when the other end of the socket sends a FIN packet.\n\n</p>\n<p>By default (<code>allowHalfOpen == false</code>) the socket will destroy its file\ndescriptor  once it has written out its pending write queue.  However, by\nsetting <code>allowHalfOpen == true</code> the socket will not automatically <code>end()</code>\nits side allowing the user to write arbitrary amounts of data, with the\ncaveat that the user is required to <code>end()</code> their side now.\n\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'timeout'",
              "type": "event",
              "name": "timeout",
              "desc": "<p>Emitted if the socket times out from inactivity. This is only to notify that\nthe socket has been idle. The user must manually close the connection.\n\n</p>\n<p>See also: <code>socket.setTimeout()</code>\n\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'drain'",
              "type": "event",
              "name": "drain",
              "desc": "<p>Emitted when the write buffer becomes empty. Can be used to throttle uploads.\n\n</p>\n<p>See also: the return values of <code>socket.write()</code>\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "params": [],
              "desc": "<p>Emitted when an error occurs.  The <code>&#39;close&#39;</code> event will be called directly\nfollowing this event.\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "params": [],
              "desc": "<p>Emitted once the socket is fully closed. The argument <code>had_error</code> is a boolean\nwhich says if the socket was closed due to a transmission error.\n\n</p>\n"
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "net"
    },
    {
      "textRaw": "UDP / Datagram Sockets",
      "name": "dgram",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>Datagram sockets are available through <code>require(&#39;dgram&#39;)</code>.\n\n</p>\n<p>Important note: the behavior of <code>dgram.Socket#bind()</code> has changed in v0.10\nand is always asynchronous now.  If you have code that looks like this:\n\n</p>\n<pre><code>var s = dgram.createSocket(&#39;udp4&#39;);\ns.bind(1234);\ns.addMembership(&#39;224.0.0.114&#39;);</code></pre>\n<p>You have to change it to this:\n\n</p>\n<pre><code>var s = dgram.createSocket(&#39;udp4&#39;);\ns.bind(1234, function() {\n  s.addMembership(&#39;224.0.0.114&#39;);\n});</code></pre>\n",
      "methods": [
        {
          "textRaw": "dgram.createSocket(type, [callback])",
          "type": "method",
          "name": "createSocket",
          "signatures": [
            {
              "return": {
                "textRaw": "Returns: Socket object ",
                "name": "return",
                "desc": "Socket object"
              },
              "params": [
                {
                  "textRaw": "`type` String. Either 'udp4' or 'udp6' ",
                  "name": "type",
                  "desc": "String. Either 'udp4' or 'udp6'"
                },
                {
                  "textRaw": "`callback` Function. Attached as a listener to `message` events. Optional ",
                  "name": "callback",
                  "optional": true,
                  "desc": "Function. Attached as a listener to `message` events."
                }
              ]
            },
            {
              "params": [
                {
                  "name": "type"
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ],
          "desc": "<p>Creates a datagram Socket of the specified types.  Valid types are <code>udp4</code>\nand <code>udp6</code>.\n\n</p>\n<p>Takes an optional callback which is added as a listener for <code>message</code> events.\n\n</p>\n<p>Call <code>socket.bind</code> if you want to receive datagrams. <code>socket.bind()</code> will bind\nto the &quot;all interfaces&quot; address on a random port (it does the right thing for\nboth <code>udp4</code> and <code>udp6</code> sockets). You can then retrieve the address and port\nwith <code>socket.address().address</code> and <code>socket.address().port</code>.\n\n</p>\n"
        }
      ],
      "classes": [
        {
          "textRaw": "Class: dgram.Socket",
          "type": "class",
          "name": "dgram.Socket",
          "desc": "<p>The dgram Socket class encapsulates the datagram functionality.  It\nshould be created via <code>dgram.createSocket(type, [callback])</code>.\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'message'",
              "type": "event",
              "name": "message",
              "params": [],
              "desc": "<p>Emitted when a new datagram is available on a socket.  <code>msg</code> is a <code>Buffer</code> and <code>rinfo</code> is\nan object with the sender&#39;s address information and the number of bytes in the datagram.\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'listening'",
              "type": "event",
              "name": "listening",
              "desc": "<p>Emitted when a socket starts listening for datagrams.  This happens as soon as UDP sockets\nare created.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "desc": "<p>Emitted when a socket is closed with <code>close()</code>.  No new <code>message</code> events will be emitted\non this socket.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "params": [],
              "desc": "<p>Emitted when an error occurs.\n\n</p>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "socket.send(buf, offset, length, port, address, [callback])",
              "type": "method",
              "name": "send",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`buf` Buffer object.  Message to be sent ",
                      "name": "buf",
                      "desc": "Buffer object.  Message to be sent"
                    },
                    {
                      "textRaw": "`offset` Integer. Offset in the buffer where the message starts. ",
                      "name": "offset",
                      "desc": "Integer. Offset in the buffer where the message starts."
                    },
                    {
                      "textRaw": "`length` Integer. Number of bytes in the message. ",
                      "name": "length",
                      "desc": "Integer. Number of bytes in the message."
                    },
                    {
                      "textRaw": "`port` Integer. Destination port. ",
                      "name": "port",
                      "desc": "Integer. Destination port."
                    },
                    {
                      "textRaw": "`address` String. Destination hostname or IP address. ",
                      "name": "address",
                      "desc": "String. Destination hostname or IP address."
                    },
                    {
                      "textRaw": "`callback` Function. Called when the message has been sent. Optional. ",
                      "name": "callback",
                      "desc": "Function. Called when the message has been sent. Optional.",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "buf"
                    },
                    {
                      "name": "offset"
                    },
                    {
                      "name": "length"
                    },
                    {
                      "name": "port"
                    },
                    {
                      "name": "address"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>For UDP sockets, the destination port and address must be specified.  A string\nmay be supplied for the <code>address</code> parameter, and it will be resolved with DNS.\n\n</p>\n<p>If the address is omitted or is an empty string, <code>&#39;0.0.0.0&#39;</code> or <code>&#39;::0&#39;</code> is used\ninstead.  Depending on the network configuration, those defaults may or may not\nwork; it&#39;s best to be explicit about the destination address.\n\n</p>\n<p>If the socket has not been previously bound with a call to <code>bind</code>, it gets\nassigned a random port number and is bound to the &quot;all interfaces&quot; address\n(<code>&#39;0.0.0.0&#39;</code> for <code>udp4</code> sockets, <code>&#39;::0&#39;</code> for <code>udp6</code> sockets.)\n\n</p>\n<p>An optional callback may be specified to detect DNS errors or for determining\nwhen it&#39;s safe to reuse the <code>buf</code> object.  Note that DNS lookups delay the time\nto send for at least one tick.  The only way to know for sure that the datagram\nhas been sent is by using a callback.\n\n</p>\n<p>Example of sending a UDP packet to a random port on <code>localhost</code>;\n\n</p>\n<pre><code>var dgram = require(&#39;dgram&#39;);\nvar message = new Buffer(&quot;Some bytes&quot;);\nvar client = dgram.createSocket(&quot;udp4&quot;);\nclient.send(message, 0, message.length, 41234, &quot;localhost&quot;, function(err, bytes) {\n  client.close();\n});</code></pre>\n<p><strong>A Note about UDP datagram size</strong>\n\n</p>\n<p>The maximum size of an <code>IPv4/v6</code> datagram depends on the <code>MTU</code> (<em>Maximum Transmission Unit</em>)\nand on the <code>Payload Length</code> field size.\n\n</p>\n<ul>\n<li><p>The <code>Payload Length</code> field is <code>16 bits</code> wide, which means that a normal payload\ncannot be larger than 64K octets including internet header and data\n(65,507 bytes = 65,535 âˆ’ 8 bytes UDP header âˆ’ 20 bytes IP header);\nthis is generally true for loopback interfaces, but such long datagrams\nare impractical for most hosts and networks.</p>\n</li>\n<li><p>The <code>MTU</code> is the largest size a given link layer technology can support for datagrams.\nFor any link, <code>IPv4</code> mandates a minimum <code>MTU</code> of <code>68</code> octets, while the recommended <code>MTU</code>\nfor IPv4 is <code>576</code> (typically recommended as the <code>MTU</code> for dial-up type applications),\nwhether they arrive whole or in fragments.</p>\n<p>For <code>IPv6</code>, the minimum <code>MTU</code> is <code>1280</code> octets, however, the mandatory minimum\nfragment reassembly buffer size is <code>1500</code> octets.\nThe value of <code>68</code> octets is very small, since most current link layer technologies have\na minimum <code>MTU</code> of <code>1500</code> (like Ethernet).</p>\n</li>\n</ul>\n<p>Note that it&#39;s impossible to know in advance the MTU of each link through which\na packet might travel, and that generally sending a datagram greater than\nthe (receiver) <code>MTU</code> won&#39;t work (the packet gets silently dropped, without\ninforming the source that the data did not reach its intended recipient).\n\n</p>\n"
            },
            {
              "textRaw": "socket.bind(port, [address], [callback])",
              "type": "method",
              "name": "bind",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`port` Integer ",
                      "name": "port",
                      "desc": "Integer"
                    },
                    {
                      "textRaw": "`address` String, Optional ",
                      "name": "address",
                      "optional": true,
                      "desc": "String"
                    },
                    {
                      "textRaw": "`callback` Function with no parameters, Optional. Callback when binding is done. ",
                      "name": "callback",
                      "desc": "Function with no parameters, Optional. Callback when binding is done.",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "port"
                    },
                    {
                      "name": "address",
                      "optional": true
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>For UDP sockets, listen for datagrams on a named <code>port</code> and optional\n<code>address</code>. If <code>address</code> is not specified, the OS will try to listen on\nall addresses.  After binding is done, a &quot;listening&quot; event is emitted\nand the <code>callback</code>(if specified) is called. Specifying both a\n&quot;listening&quot; event listener and <code>callback</code> is not harmful but not very\nuseful.\n\n</p>\n<p>A bound datagram socket keeps the node process running to receive\ndatagrams.\n\n</p>\n<p>If binding fails, an &quot;error&quot; event is generated. In rare case (e.g.\nbinding a closed socket), an <code>Error</code> may be thrown by this method.\n\n</p>\n<p>Example of a UDP server listening on port 41234:\n\n</p>\n<pre><code>var dgram = require(&quot;dgram&quot;);\n\nvar server = dgram.createSocket(&quot;udp4&quot;);\n\nserver.on(&quot;error&quot;, function (err) {\n  console.log(&quot;server error:\\n&quot; + err.stack);\n  server.close();\n});\n\nserver.on(&quot;message&quot;, function (msg, rinfo) {\n  console.log(&quot;server got: &quot; + msg + &quot; from &quot; +\n    rinfo.address + &quot;:&quot; + rinfo.port);\n});\n\nserver.on(&quot;listening&quot;, function () {\n  var address = server.address();\n  console.log(&quot;server listening &quot; +\n      address.address + &quot;:&quot; + address.port);\n});\n\nserver.bind(41234);\n// server listening 0.0.0.0:41234</code></pre>\n"
            },
            {
              "textRaw": "socket.close()",
              "type": "method",
              "name": "close",
              "desc": "<p>Close the underlying socket and stop listening for data on it.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "socket.address()",
              "type": "method",
              "name": "address",
              "desc": "<p>Returns an object containing the address information for a socket.  For UDP sockets,\nthis object will contain <code>address</code> , <code>family</code> and <code>port</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "socket.setBroadcast(flag)",
              "type": "method",
              "name": "setBroadcast",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`flag` Boolean ",
                      "name": "flag",
                      "desc": "Boolean"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "flag"
                    }
                  ]
                }
              ],
              "desc": "<p>Sets or clears the <code>SO_BROADCAST</code> socket option.  When this option is set, UDP packets\nmay be sent to a local interface&#39;s broadcast address.\n\n</p>\n"
            },
            {
              "textRaw": "socket.setTTL(ttl)",
              "type": "method",
              "name": "setTTL",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`ttl` Integer ",
                      "name": "ttl",
                      "desc": "Integer"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "ttl"
                    }
                  ]
                }
              ],
              "desc": "<p>Sets the <code>IP_TTL</code> socket option.  TTL stands for &quot;Time to Live,&quot; but in this context it\nspecifies the number of IP hops that a packet is allowed to go through.  Each router or\ngateway that forwards a packet decrements the TTL.  If the TTL is decremented to 0 by a\nrouter, it will not be forwarded.  Changing TTL values is typically done for network\nprobes or when multicasting.\n\n</p>\n<p>The argument to <code>setTTL()</code> is a number of hops between 1 and 255.  The default on most\nsystems is 64.\n\n</p>\n"
            },
            {
              "textRaw": "socket.setMulticastTTL(ttl)",
              "type": "method",
              "name": "setMulticastTTL",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`ttl` Integer ",
                      "name": "ttl",
                      "desc": "Integer"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "ttl"
                    }
                  ]
                }
              ],
              "desc": "<p>Sets the <code>IP_MULTICAST_TTL</code> socket option.  TTL stands for &quot;Time to Live,&quot; but in this\ncontext it specifies the number of IP hops that a packet is allowed to go through,\nspecifically for multicast traffic.  Each router or gateway that forwards a packet\ndecrements the TTL. If the TTL is decremented to 0 by a router, it will not be forwarded.\n\n</p>\n<p>The argument to <code>setMulticastTTL()</code> is a number of hops between 0 and 255.  The default on most\nsystems is 1.\n\n</p>\n"
            },
            {
              "textRaw": "socket.setMulticastLoopback(flag)",
              "type": "method",
              "name": "setMulticastLoopback",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`flag` Boolean ",
                      "name": "flag",
                      "desc": "Boolean"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "flag"
                    }
                  ]
                }
              ],
              "desc": "<p>Sets or clears the <code>IP_MULTICAST_LOOP</code> socket option.  When this option is set, multicast\npackets will also be received on the local interface.\n\n</p>\n"
            },
            {
              "textRaw": "socket.addMembership(multicastAddress, [multicastInterface])",
              "type": "method",
              "name": "addMembership",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`multicastAddress` String ",
                      "name": "multicastAddress",
                      "desc": "String"
                    },
                    {
                      "textRaw": "`multicastInterface` String, Optional ",
                      "name": "multicastInterface",
                      "optional": true,
                      "desc": "String"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "multicastAddress"
                    },
                    {
                      "name": "multicastInterface",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Tells the kernel to join a multicast group with <code>IP_ADD_MEMBERSHIP</code> socket option.\n\n</p>\n<p>If <code>multicastInterface</code> is not specified, the OS will try to add membership to all valid\ninterfaces.\n\n</p>\n"
            },
            {
              "textRaw": "socket.dropMembership(multicastAddress, [multicastInterface])",
              "type": "method",
              "name": "dropMembership",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`multicastAddress` String ",
                      "name": "multicastAddress",
                      "desc": "String"
                    },
                    {
                      "textRaw": "`multicastInterface` String, Optional ",
                      "name": "multicastInterface",
                      "optional": true,
                      "desc": "String"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "multicastAddress"
                    },
                    {
                      "name": "multicastInterface",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Opposite of <code>addMembership</code> - tells the kernel to leave a multicast group with\n<code>IP_DROP_MEMBERSHIP</code> socket option. This is automatically called by the kernel\nwhen the socket is closed or process terminates, so most apps will never need to call\nthis.\n\n</p>\n<p>If <code>multicastInterface</code> is not specified, the OS will try to drop membership to all valid\ninterfaces.\n\n</p>\n"
            },
            {
              "textRaw": "socket.unref()",
              "type": "method",
              "name": "unref",
              "desc": "<p>Calling <code>unref</code> on a socket will allow the program to exit if this is the only\nactive socket in the event system. If the socket is already <code>unref</code>d calling\n<code>unref</code> again will have no effect.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "socket.ref()",
              "type": "method",
              "name": "ref",
              "desc": "<p>Opposite of <code>unref</code>, calling <code>ref</code> on a previously <code>unref</code>d socket will <em>not</em>\nlet the program exit if it&#39;s the only socket left (the default behavior). If\nthe socket is <code>ref</code>d calling <code>ref</code> again will have no effect.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "dgram"
    },
    {
      "textRaw": "DNS",
      "name": "dns",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>Use <code>require(&#39;dns&#39;)</code> to access this module. All methods in the dns module\nuse C-Ares except for <code>dns.lookup</code> which uses <code>getaddrinfo(3)</code> in a thread\npool. C-Ares is much faster than <code>getaddrinfo</code> but the system resolver is\nmore consistent with how other programs operate. When a user does\n<code>net.connect(80, &#39;google.com&#39;)</code> or <code>http.get({ host: &#39;google.com&#39; })</code> the\n<code>dns.lookup</code> method is used. Users who need to do a large number of lookups\nquickly should use the methods that go through C-Ares.\n\n</p>\n<p>Here is an example which resolves <code>&#39;www.google.com&#39;</code> then reverse\nresolves the IP addresses which are returned.\n\n</p>\n<pre><code>var dns = require(&#39;dns&#39;);\n\ndns.resolve4(&#39;www.google.com&#39;, function (err, addresses) {\n  if (err) throw err;\n\n  console.log(&#39;addresses: &#39; + JSON.stringify(addresses));\n\n  addresses.forEach(function (a) {\n    dns.reverse(a, function (err, domains) {\n      if (err) {\n        throw err;\n      }\n\n      console.log(&#39;reverse for &#39; + a + &#39;: &#39; + JSON.stringify(domains));\n    });\n  });\n});</code></pre>\n",
      "methods": [
        {
          "textRaw": "dns.lookup(domain, [family], callback)",
          "type": "method",
          "name": "lookup",
          "desc": "<p>Resolves a domain (e.g. <code>&#39;google.com&#39;</code>) into the first found A (IPv4) or\nAAAA (IPv6) record.\nThe <code>family</code> can be the integer <code>4</code> or <code>6</code>. Defaults to <code>null</code> that indicates\nboth Ip v4 and v6 address family.\n\n</p>\n<p>The callback has arguments <code>(err, address, family)</code>.  The <code>address</code> argument\nis a string representation of a IP v4 or v6 address. The <code>family</code> argument\nis either the integer 4 or 6 and denotes the family of <code>address</code> (not\nnecessarily the value initially passed to <code>lookup</code>).\n\n</p>\n<p>On error, <code>err</code> is an <code>Error</code> object, where <code>err.code</code> is the error code.\nKeep in mind that <code>err.code</code> will be set to <code>&#39;ENOENT&#39;</code> not only when\nthe domain does not exist but also when the lookup fails in other ways\nsuch as no available file descriptors.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "family",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.resolve(domain, [rrtype], callback)",
          "type": "method",
          "name": "resolve",
          "desc": "<p>Resolves a domain (e.g. <code>&#39;google.com&#39;</code>) into an array of the record types\nspecified by rrtype. Valid rrtypes are <code>&#39;A&#39;</code> (IPV4 addresses, default),\n<code>&#39;AAAA&#39;</code> (IPV6 addresses), <code>&#39;MX&#39;</code> (mail exchange records), <code>&#39;TXT&#39;</code> (text\nrecords), <code>&#39;SRV&#39;</code> (SRV records), <code>&#39;PTR&#39;</code> (used for reverse IP lookups),\n<code>&#39;NS&#39;</code> (name server records) and <code>&#39;CNAME&#39;</code> (canonical name records).\n\n</p>\n<p>The callback has arguments <code>(err, addresses)</code>.  The type of each item\nin <code>addresses</code> is determined by the record type, and described in the\ndocumentation for the corresponding lookup methods below.\n\n</p>\n<p>On error, <code>err</code> is an <code>Error</code> object, where <code>err.code</code> is\none of the error codes listed below.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "rrtype",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.resolve4(domain, callback)",
          "type": "method",
          "name": "resolve4",
          "desc": "<p>The same as <code>dns.resolve()</code>, but only for IPv4 queries (<code>A</code> records).\n<code>addresses</code> is an array of IPv4 addresses (e.g.\n<code>[&#39;74.125.79.104&#39;, &#39;74.125.79.105&#39;, &#39;74.125.79.106&#39;]</code>).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.resolve6(domain, callback)",
          "type": "method",
          "name": "resolve6",
          "desc": "<p>The same as <code>dns.resolve4()</code> except for IPv6 queries (an <code>AAAA</code> query).\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.resolveMx(domain, callback)",
          "type": "method",
          "name": "resolveMx",
          "desc": "<p>The same as <code>dns.resolve()</code>, but only for mail exchange queries (<code>MX</code> records).\n\n</p>\n<p><code>addresses</code> is an array of MX records, each with a priority and an exchange\nattribute (e.g. <code>[{&#39;priority&#39;: 10, &#39;exchange&#39;: &#39;mx.example.com&#39;},...]</code>).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.resolveTxt(domain, callback)",
          "type": "method",
          "name": "resolveTxt",
          "desc": "<p>The same as <code>dns.resolve()</code>, but only for text queries (<code>TXT</code> records).\n<code>addresses</code> is an array of the text records available for <code>domain</code> (e.g.,\n<code>[&#39;v=spf1 ip4:0.0.0.0 ~all&#39;]</code>).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.resolveSrv(domain, callback)",
          "type": "method",
          "name": "resolveSrv",
          "desc": "<p>The same as <code>dns.resolve()</code>, but only for service records (<code>SRV</code> records).\n<code>addresses</code> is an array of the SRV records available for <code>domain</code>. Properties\nof SRV records are priority, weight, port, and name (e.g.,\n<code>[{&#39;priority&#39;: 10, {&#39;weight&#39;: 5, &#39;port&#39;: 21223, &#39;name&#39;: &#39;service.example.com&#39;}, ...]</code>).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.resolveNs(domain, callback)",
          "type": "method",
          "name": "resolveNs",
          "desc": "<p>The same as <code>dns.resolve()</code>, but only for name server records (<code>NS</code> records).\n<code>addresses</code> is an array of the name server records available for <code>domain</code>\n(e.g., <code>[&#39;ns1.example.com&#39;, &#39;ns2.example.com&#39;]</code>).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.resolveCname(domain, callback)",
          "type": "method",
          "name": "resolveCname",
          "desc": "<p>The same as <code>dns.resolve()</code>, but only for canonical name records (<code>CNAME</code>\nrecords). <code>addresses</code> is an array of the canonical name records available for\n<code>domain</code> (e.g., <code>[&#39;bar.example.com&#39;]</code>).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "dns.reverse(ip, callback)",
          "type": "method",
          "name": "reverse",
          "desc": "<p>Reverse resolves an ip address to an array of domain names.\n\n</p>\n<p>The callback has arguments <code>(err, domains)</code>.\n\n</p>\n<p>On error, <code>err</code> is an <code>Error</code> object, where <code>err.code</code> is\none of the error codes listed below.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "ip"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        }
      ],
      "modules": [
        {
          "textRaw": "Error codes",
          "name": "error_codes",
          "desc": "<p>Each DNS query can return one of the following error codes:\n\n</p>\n<ul>\n<li><code>dns.NODATA</code>: DNS server returned answer with no data.</li>\n<li><code>dns.FORMERR</code>: DNS server claims query was misformatted.</li>\n<li><code>dns.SERVFAIL</code>: DNS server returned general failure.</li>\n<li><code>dns.NOTFOUND</code>: Domain name not found.</li>\n<li><code>dns.NOTIMP</code>: DNS server does not implement requested operation.</li>\n<li><code>dns.REFUSED</code>: DNS server refused query.</li>\n<li><code>dns.BADQUERY</code>: Misformatted DNS query.</li>\n<li><code>dns.BADNAME</code>: Misformatted domain name.</li>\n<li><code>dns.BADFAMILY</code>: Unsupported address family.</li>\n<li><code>dns.BADRESP</code>: Misformatted DNS reply.</li>\n<li><code>dns.CONNREFUSED</code>: Could not contact DNS servers.</li>\n<li><code>dns.TIMEOUT</code>: Timeout while contacting DNS servers.</li>\n<li><code>dns.EOF</code>: End of file.</li>\n<li><code>dns.FILE</code>: Error reading file.</li>\n<li><code>dns.NOMEM</code>: Out of memory.</li>\n<li><code>dns.DESTRUCTION</code>: Channel is being destroyed.</li>\n<li><code>dns.BADSTR</code>: Misformatted string.</li>\n<li><code>dns.BADFLAGS</code>: Illegal flags specified.</li>\n<li><code>dns.NONAME</code>: Given hostname is not numeric.</li>\n<li><code>dns.BADHINTS</code>: Illegal hints flags specified.</li>\n<li><code>dns.NOTINITIALIZED</code>: c-ares library initialization not yet performed.</li>\n<li><code>dns.LOADIPHLPAPI</code>: Error loading iphlpapi.dll.</li>\n<li><code>dns.ADDRGETNETWORKPARAMS</code>: Could not find GetNetworkParams function.</li>\n<li><code>dns.CANCELLED</code>: DNS query cancelled.</li>\n</ul>\n",
          "type": "module",
          "displayName": "Error codes"
        }
      ],
      "type": "module",
      "displayName": "DNS"
    },
    {
      "textRaw": "HTTP",
      "name": "http",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>To use the HTTP server and client one must <code>require(&#39;http&#39;)</code>.\n\n</p>\n<p>The HTTP interfaces in Node are designed to support many features\nof the protocol which have been traditionally difficult to use.\nIn particular, large, possibly chunk-encoded, messages. The interface is\ncareful to never buffer entire requests or responses--the\nuser is able to stream data.\n\n</p>\n<p>HTTP message headers are represented by an object like this:\n\n</p>\n<pre><code>{ &#39;content-length&#39;: &#39;123&#39;,\n  &#39;content-type&#39;: &#39;text/plain&#39;,\n  &#39;connection&#39;: &#39;keep-alive&#39;,\n  &#39;accept&#39;: &#39;*/*&#39; }</code></pre>\n<p>Keys are lowercased. Values are not modified.\n\n</p>\n<p>In order to support the full spectrum of possible HTTP applications, Node&#39;s\nHTTP API is very low-level. It deals with stream handling and message\nparsing only. It parses a message into headers and body but it does not\nparse the actual headers or the body.\n\n\n</p>\n",
      "properties": [
        {
          "textRaw": "`STATUS_CODES` {Object} ",
          "name": "STATUS_CODES",
          "desc": "<p>A collection of all the standard HTTP response status codes, and the\nshort description of each.  For example, <code>http.STATUS_CODES[404] === &#39;Not\nFound&#39;</code>.\n\n</p>\n"
        },
        {
          "textRaw": "http.globalAgent",
          "name": "globalAgent",
          "desc": "<p>Global instance of Agent which is used as the default for all http client\nrequests.\n\n\n</p>\n"
        },
        {
          "textRaw": "http.IncomingMessage",
          "name": "IncomingMessage",
          "desc": "<p>An <code>IncomingMessage</code> object is created by [http.Server][] or\n[http.ClientRequest][] and passed as the first argument to the <code>&#39;request&#39;</code>\nand <code>&#39;response&#39;</code> event respectively. It may be used to access response status,\nheaders and data.\n\n</p>\n<p>It implements the [Readable Stream][] interface, as well as the\nfollowing additional events, methods, and properties.\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Indicates that the underlaying connection was closed.\nJust like <code>&#39;end&#39;</code>, this event occurs only once per response.\n\n</p>\n",
              "params": []
            }
          ],
          "properties": [
            {
              "textRaw": "message.httpVersion",
              "name": "httpVersion",
              "desc": "<p>In case of server request, the HTTP version sent by the client. In the case of\nclient response, the HTTP version of the connected-to server.\nProbably either <code>&#39;1.1&#39;</code> or <code>&#39;1.0&#39;</code>.\n\n</p>\n<p>Also <code>response.httpVersionMajor</code> is the first integer and\n<code>response.httpVersionMinor</code> is the second.\n\n</p>\n"
            },
            {
              "textRaw": "message.headers",
              "name": "headers",
              "desc": "<p>The request/response headers object.\n\n</p>\n<p>Read only map of header names and values. Header names are lower-cased.\nExample:\n\n</p>\n<pre><code>// Prints something like:\n//\n// { &#39;user-agent&#39;: &#39;curl/7.22.0&#39;,\n//   host: &#39;127.0.0.1:8000&#39;,\n//   accept: &#39;*/*&#39; }\nconsole.log(request.headers);</code></pre>\n"
            },
            {
              "textRaw": "message.trailers",
              "name": "trailers",
              "desc": "<p>The request/response trailers object. Only populated after the &#39;end&#39; event.\n\n</p>\n"
            },
            {
              "textRaw": "message.method",
              "name": "method",
              "desc": "<p><strong>Only valid for request obtained from [http.Server][].</strong>\n\n</p>\n<p>The request method as a string. Read only. Example:\n<code>&#39;GET&#39;</code>, <code>&#39;DELETE&#39;</code>.\n\n</p>\n"
            },
            {
              "textRaw": "message.url",
              "name": "url",
              "desc": "<p><strong>Only valid for request obtained from [http.Server][].</strong>\n\n</p>\n<p>Request URL string. This contains only the URL that is\npresent in the actual HTTP request. If the request is:\n\n</p>\n<pre><code>GET /status?name=ryan HTTP/1.1\\r\\n\nAccept: text/plain\\r\\n\n\\r\\n</code></pre>\n<p>Then <code>request.url</code> will be:\n\n</p>\n<pre><code>&#39;/status?name=ryan&#39;</code></pre>\n<p>If you would like to parse the URL into its parts, you can use\n<code>require(&#39;url&#39;).parse(request.url)</code>.  Example:\n\n</p>\n<pre><code>node&gt; require(&#39;url&#39;).parse(&#39;/status?name=ryan&#39;)\n{ href: &#39;/status?name=ryan&#39;,\n  search: &#39;?name=ryan&#39;,\n  query: &#39;name=ryan&#39;,\n  pathname: &#39;/status&#39; }</code></pre>\n<p>If you would like to extract the params from the query string,\nyou can use the <code>require(&#39;querystring&#39;).parse</code> function, or pass\n<code>true</code> as the second argument to <code>require(&#39;url&#39;).parse</code>.  Example:\n\n</p>\n<pre><code>node&gt; require(&#39;url&#39;).parse(&#39;/status?name=ryan&#39;, true)\n{ href: &#39;/status?name=ryan&#39;,\n  search: &#39;?name=ryan&#39;,\n  query: { name: &#39;ryan&#39; },\n  pathname: &#39;/status&#39; }</code></pre>\n"
            },
            {
              "textRaw": "message.statusCode",
              "name": "statusCode",
              "desc": "<p><strong>Only valid for response obtained from <code>http.ClientRequest</code>.</strong>\n\n</p>\n<p>The 3-digit HTTP response status code. E.G. <code>404</code>.\n\n</p>\n"
            },
            {
              "textRaw": "message.socket",
              "name": "socket",
              "desc": "<p>The <code>net.Socket</code> object associated with the connection.\n\n</p>\n<p>With HTTPS support, use request.connection.verifyPeer() and\nrequest.connection.getPeerCertificate() to obtain the client&#39;s\nauthentication details.\n\n\n</p>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "message.setTimeout(msecs, callback)",
              "type": "method",
              "name": "setTimeout",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`msecs` {Number} ",
                      "name": "msecs",
                      "type": "Number"
                    },
                    {
                      "textRaw": "`callback` {Function} ",
                      "name": "callback",
                      "type": "Function"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "msecs"
                    },
                    {
                      "name": "callback"
                    }
                  ]
                }
              ],
              "desc": "<p>Calls <code>message.connection.setTimeout(msecs, callback)</code>.\n\n</p>\n"
            }
          ]
        }
      ],
      "methods": [
        {
          "textRaw": "http.createServer([requestListener])",
          "type": "method",
          "name": "createServer",
          "desc": "<p>Returns a new web server object.\n\n</p>\n<p>The <code>requestListener</code> is a function which is automatically\nadded to the <code>&#39;request&#39;</code> event.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "requestListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "http.createClient([port], [host])",
          "type": "method",
          "name": "createClient",
          "desc": "<p>This function is <strong>deprecated</strong>; please use [http.request()][] instead.\nConstructs a new HTTP client. <code>port</code> and <code>host</code> refer to the server to be\nconnected to.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "port",
                  "optional": true
                },
                {
                  "name": "host",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "http.request(options, [callback])",
          "type": "method",
          "name": "request",
          "desc": "<p>Node maintains several connections per server to make HTTP requests.\nThis function allows one to transparently issue requests.\n\n</p>\n<p><code>options</code> can be an object or a string. If <code>options</code> is a string, it is\nautomatically parsed with [url.parse()][].\n\n</p>\n<p>Options:\n\n</p>\n<ul>\n<li><code>host</code>: A domain name or IP address of the server to issue the request to.\nDefaults to <code>&#39;localhost&#39;</code>.</li>\n<li><code>hostname</code>: To support <code>url.parse()</code> <code>hostname</code> is preferred over <code>host</code></li>\n<li><code>port</code>: Port of remote server. Defaults to 80.</li>\n<li><code>localAddress</code>: Local interface to bind for network connections.</li>\n<li><code>socketPath</code>: Unix Domain Socket (use one of host:port or socketPath)</li>\n<li><code>method</code>: A string specifying the HTTP request method. Defaults to <code>&#39;GET&#39;</code>.</li>\n<li><code>path</code>: Request path. Defaults to <code>&#39;/&#39;</code>. Should include query string if any.\nE.G. <code>&#39;/index.html?page=12&#39;</code></li>\n<li><code>headers</code>: An object containing request headers.</li>\n<li><code>auth</code>: Basic authentication i.e. <code>&#39;user:password&#39;</code> to compute an\nAuthorization header.</li>\n<li><code>agent</code>: Controls [Agent][] behavior. When an Agent is used request will\ndefault to <code>Connection: keep-alive</code>. Possible values:<ul>\n<li><code>undefined</code> (default): use [global Agent][] for this host and port.</li>\n<li><code>Agent</code> object: explicitly use the passed in <code>Agent</code>.</li>\n<li><code>false</code>: opts out of connection pooling with an Agent, defaults request to\n<code>Connection: close</code>.</li>\n</ul>\n</li>\n</ul>\n<p>The optional <code>callback</code> parameter will be added as a one time listener for\nthe [&#39;response&#39;][] event.\n\n</p>\n<p><code>http.request()</code> returns an instance of the [http.ClientRequest][]\nclass. The <code>ClientRequest</code> instance is a writable stream. If one needs to\nupload a file with a POST request, then write to the <code>ClientRequest</code> object.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var options = {\n  hostname: &#39;www.google.com&#39;,\n  port: 80,\n  path: &#39;/upload&#39;,\n  method: &#39;POST&#39;\n};\n\nvar req = http.request(options, function(res) {\n  console.log(&#39;STATUS: &#39; + res.statusCode);\n  console.log(&#39;HEADERS: &#39; + JSON.stringify(res.headers));\n  res.setEncoding(&#39;utf8&#39;);\n  res.on(&#39;data&#39;, function (chunk) {\n    console.log(&#39;BODY: &#39; + chunk);\n  });\n});\n\nreq.on(&#39;error&#39;, function(e) {\n  console.log(&#39;problem with request: &#39; + e.message);\n});\n\n// write data to request body\nreq.write(&#39;data\\n&#39;);\nreq.write(&#39;data\\n&#39;);\nreq.end();</code></pre>\n<p>Note that in the example <code>req.end()</code> was called. With <code>http.request()</code> one\nmust always call <code>req.end()</code> to signify that you&#39;re done with the request -\neven if there is no data being written to the request body.\n\n</p>\n<p>If any error is encountered during the request (be that with DNS resolution,\nTCP level errors, or actual HTTP parse errors) an <code>&#39;error&#39;</code> event is emitted\non the returned request object.\n\n</p>\n<p>There are a few special headers that should be noted.\n\n</p>\n<ul>\n<li><p>Sending a &#39;Connection: keep-alive&#39; will notify Node that the connection to\nthe server should be persisted until the next request.</p>\n</li>\n<li><p>Sending a &#39;Content-length&#39; header will disable the default chunked encoding.</p>\n</li>\n<li><p>Sending an &#39;Expect&#39; header will immediately send the request headers.\nUsually, when sending &#39;Expect: 100-continue&#39;, you should both set a timeout\nand listen for the <code>continue</code> event. See RFC2616 Section 8.2.3 for more\ninformation.</p>\n</li>\n<li><p>Sending an Authorization header will override using the <code>auth</code> option\nto compute basic authentication.</p>\n</li>\n</ul>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "http.get(options, [callback])",
          "type": "method",
          "name": "get",
          "desc": "<p>Since most requests are GET requests without bodies, Node provides this\nconvenience method. The only difference between this method and <code>http.request()</code>\nis that it sets the method to GET and calls <code>req.end()</code> automatically.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>http.get(&quot;http://www.google.com/index.html&quot;, function(res) {\n  console.log(&quot;Got response: &quot; + res.statusCode);\n}).on(&#39;error&#39;, function(e) {\n  console.log(&quot;Got error: &quot; + e.message);\n});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ]
        }
      ],
      "classes": [
        {
          "textRaw": "Class: http.Server",
          "type": "class",
          "name": "http.Server",
          "desc": "<p>This is an [EventEmitter][] with the following events:\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'request'",
              "type": "event",
              "name": "request",
              "desc": "<p><code>function (request, response) { }</code>\n\n</p>\n<p>Emitted each time there is a request. Note that there may be multiple requests\nper connection (in the case of keep-alive connections).\n <code>request</code> is an instance of [http.IncomingMessage][] and <code>response</code> is\nan instance of [http.ServerResponse][].\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'connection'",
              "type": "event",
              "name": "connection",
              "desc": "<p><code>function (socket) { }</code>\n\n</p>\n<p> When a new TCP stream is established. <code>socket</code> is an object of type\n <code>net.Socket</code>. Usually users will not want to access this event. In\n particular, the socket will not emit <code>readable</code> events because of how\n the protocol parser attaches to the socket. The <code>socket</code> can also be\n accessed at <code>request.connection</code>.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "desc": "<p><code>function () { }</code>\n\n</p>\n<p> Emitted when the server closes.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'checkContinue'",
              "type": "event",
              "name": "checkContinue",
              "desc": "<p><code>function (request, response) { }</code>\n\n</p>\n<p>Emitted each time a request with an http Expect: 100-continue is received.\nIf this event isn&#39;t listened for, the server will automatically respond\nwith a 100 Continue as appropriate.\n\n</p>\n<p>Handling this event involves calling [response.writeContinue()][] if the client\nshould continue to send the request body, or generating an appropriate HTTP\nresponse (e.g., 400 Bad Request) if the client should not continue to send the\nrequest body.\n\n</p>\n<p>Note that when this event is emitted and handled, the <code>request</code> event will\nnot be emitted.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'connect'",
              "type": "event",
              "name": "connect",
              "desc": "<p><code>function (request, socket, head) { }</code>\n\n</p>\n<p>Emitted each time a client requests a http CONNECT method. If this event isn&#39;t\nlistened for, then clients requesting a CONNECT method will have their\nconnections closed.\n\n</p>\n<ul>\n<li><code>request</code> is the arguments for the http request, as it is in the request\nevent.</li>\n<li><code>socket</code> is the network socket between the server and client.</li>\n<li><code>head</code> is an instance of Buffer, the first packet of the tunneling stream,\nthis may be empty.</li>\n</ul>\n<p>After this event is emitted, the request&#39;s socket will not have a <code>data</code>\nevent listener, meaning you will need to bind to it in order to handle data\nsent to the server on that socket.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'upgrade'",
              "type": "event",
              "name": "upgrade",
              "desc": "<p><code>function (request, socket, head) { }</code>\n\n</p>\n<p>Emitted each time a client requests a http upgrade. If this event isn&#39;t\nlistened for, then clients requesting an upgrade will have their connections\nclosed.\n\n</p>\n<ul>\n<li><code>request</code> is the arguments for the http request, as it is in the request\nevent.</li>\n<li><code>socket</code> is the network socket between the server and client.</li>\n<li><code>head</code> is an instance of Buffer, the first packet of the upgraded stream,\nthis may be empty.</li>\n</ul>\n<p>After this event is emitted, the request&#39;s socket will not have a <code>data</code>\nevent listener, meaning you will need to bind to it in order to handle data\nsent to the server on that socket.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'clientError'",
              "type": "event",
              "name": "clientError",
              "desc": "<p><code>function (exception, socket) { }</code>\n\n</p>\n<p>If a client connection emits an &#39;error&#39; event - it will forwarded here.\n\n</p>\n<p><code>socket</code> is the <code>net.Socket</code> object that the error originated from.\n\n\n</p>\n",
              "params": []
            }
          ],
          "methods": [
            {
              "textRaw": "server.listen(port, [hostname], [backlog], [callback])",
              "type": "method",
              "name": "listen",
              "desc": "<p>Begin accepting connections on the specified port and hostname.  If the\nhostname is omitted, the server will accept connections directed to any\nIPv4 address (<code>INADDR_ANY</code>).\n\n</p>\n<p>To listen to a unix socket, supply a filename instead of port and hostname.\n\n</p>\n<p>Backlog is the maximum length of the queue of pending connections.\nThe actual length will be determined by your OS through sysctl settings such as\n<code>tcp_max_syn_backlog</code> and <code>somaxconn</code> on linux. The default value of this\nparameter is 511 (not 512).\n\n</p>\n<p>This function is asynchronous. The last parameter <code>callback</code> will be added as\na listener for the [&#39;listening&#39;][] event.  See also [net.Server.listen(port)][].\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "port"
                    },
                    {
                      "name": "hostname",
                      "optional": true
                    },
                    {
                      "name": "backlog",
                      "optional": true
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.listen(path, [callback])",
              "type": "method",
              "name": "listen",
              "desc": "<p>Start a UNIX socket server listening for connections on the given <code>path</code>.\n\n</p>\n<p>This function is asynchronous. The last parameter <code>callback</code> will be added as\na listener for the [&#39;listening&#39;][] event.  See also [net.Server.listen(path)][].\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "path"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.listen(handle, [callback])",
              "type": "method",
              "name": "listen",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`handle` {Object} ",
                      "name": "handle",
                      "type": "Object"
                    },
                    {
                      "textRaw": "`callback` {Function} ",
                      "name": "callback",
                      "type": "Function",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "handle"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>The <code>handle</code> object can be set to either a server or socket (anything\nwith an underlying <code>_handle</code> member), or a <code>{fd: &lt;n&gt;}</code> object.\n\n</p>\n<p>This will cause the server to accept connections on the specified\nhandle, but it is presumed that the file descriptor or handle has\nalready been bound to a port or domain socket.\n\n</p>\n<p>Listening on a file descriptor is not supported on Windows.\n\n</p>\n<p>This function is asynchronous. The last parameter <code>callback</code> will be added as\na listener for the <a href=\"net.html#event_listening_\">&#39;listening&#39;</a> event.\nSee also <a href=\"net.html#net_server_listen_handle_callback\">net.Server.listen()</a>.\n\n</p>\n"
            },
            {
              "textRaw": "server.close([callback])",
              "type": "method",
              "name": "close",
              "desc": "<p>Stops the server from accepting new connections.  See [net.Server.close()][].\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.setTimeout(msecs, callback)",
              "type": "method",
              "name": "setTimeout",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`msecs` {Number} ",
                      "name": "msecs",
                      "type": "Number"
                    },
                    {
                      "textRaw": "`callback` {Function} ",
                      "name": "callback",
                      "type": "Function"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "msecs"
                    },
                    {
                      "name": "callback"
                    }
                  ]
                }
              ],
              "desc": "<p>Sets the timeout value for sockets, and emits a <code>&#39;timeout&#39;</code> event on\nthe Server object, passing the socket as an argument, if a timeout\noccurs.\n\n</p>\n<p>If there is a <code>&#39;timeout&#39;</code> event listener on the Server object, then it\nwill be called with the timed-out socket as an argument.\n\n</p>\n<p>By default, the Server&#39;s timeout value is 2 minutes, and sockets are\ndestroyed automatically if they time out.  However, if you assign a\ncallback to the Server&#39;s <code>&#39;timeout&#39;</code> event, then you are responsible\nfor handling socket timeouts.\n\n</p>\n"
            }
          ],
          "properties": [
            {
              "textRaw": "server.maxHeadersCount",
              "name": "maxHeadersCount",
              "desc": "<p>Limits maximum incoming headers count, equal to 1000 by default. If set to 0 -\nno limit will be applied.\n\n</p>\n"
            },
            {
              "textRaw": "`timeout` {Number} Default = 120000 (2 minutes) ",
              "name": "timeout",
              "desc": "<p>The number of milliseconds of inactivity before a socket is presumed\nto have timed out.\n\n</p>\n<p>Note that the socket timeout logic is set up on connection, so\nchanging this value only affects <em>new</em> connections to the server, not\nany existing connections.\n\n</p>\n<p>Set to 0 to disable any kind of automatic timeout behavior on incoming\nconnections.\n\n</p>\n",
              "shortDesc": "Default = 120000 (2 minutes)"
            }
          ]
        },
        {
          "textRaw": "Class: http.ServerResponse",
          "type": "class",
          "name": "http.ServerResponse",
          "desc": "<p>This object is created internally by a HTTP server--not by the user. It is\npassed as the second parameter to the <code>&#39;request&#39;</code> event.\n\n</p>\n<p>The response implements the [Writable Stream][] interface. This is an\n[EventEmitter][] with the following events:\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Indicates that the underlying connection was terminated before\n[response.end()][] was called or able to flush.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'finish'",
              "type": "event",
              "name": "finish",
              "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Emitted when the response has been sent. More specifically, this event is\nemitted when the last segment of the response headers and body have been\nhanded off to the operating system for transmission over the network. It\ndoes not imply that the client has received anything yet.\n\n</p>\n<p>After this event, no more events will be emitted on the response object.\n\n</p>\n",
              "params": []
            }
          ],
          "methods": [
            {
              "textRaw": "response.writeContinue()",
              "type": "method",
              "name": "writeContinue",
              "desc": "<p>Sends a HTTP/1.1 100 Continue message to the client, indicating that\nthe request body should be sent. See the [&#39;checkContinue&#39;][] event on <code>Server</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "response.writeHead(statusCode, [reasonPhrase], [headers])",
              "type": "method",
              "name": "writeHead",
              "desc": "<p>Sends a response header to the request. The status code is a 3-digit HTTP\nstatus code, like <code>404</code>. The last argument, <code>headers</code>, are the response headers.\nOptionally one can give a human-readable <code>reasonPhrase</code> as the second\nargument.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var body = &#39;hello world&#39;;\nresponse.writeHead(200, {\n  &#39;Content-Length&#39;: body.length,\n  &#39;Content-Type&#39;: &#39;text/plain&#39; });</code></pre>\n<p>This method must only be called once on a message and it must\nbe called before [response.end()][] is called.\n\n</p>\n<p>If you call [response.write()][] or [response.end()][] before calling this, the\nimplicit/mutable headers will be calculated and call this function for you.\n\n</p>\n<p>Note: that Content-Length is given in bytes not characters. The above example\nworks because the string <code>&#39;hello world&#39;</code> contains only single byte characters.\nIf the body contains higher coded characters then <code>Buffer.byteLength()</code>\nshould be used to determine the number of bytes in a given encoding.\nAnd Node does not check whether Content-Length and the length of the body\nwhich has been transmitted are equal or not.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "statusCode"
                    },
                    {
                      "name": "reasonPhrase",
                      "optional": true
                    },
                    {
                      "name": "headers",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "response.setTimeout(msecs, callback)",
              "type": "method",
              "name": "setTimeout",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`msecs` {Number} ",
                      "name": "msecs",
                      "type": "Number"
                    },
                    {
                      "textRaw": "`callback` {Function} ",
                      "name": "callback",
                      "type": "Function"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "msecs"
                    },
                    {
                      "name": "callback"
                    }
                  ]
                }
              ],
              "desc": "<p>Sets the Socket&#39;s timeout value to <code>msecs</code>.  If a callback is\nprovided, then it is added as a listener on the <code>&#39;timeout&#39;</code> event on\nthe response object.\n\n</p>\n<p>If no <code>&#39;timeout&#39;</code> listener is added to the request, the response, or\nthe server, then sockets are destroyed when they time out.  If you\nassign a handler on the request, the response, or the server&#39;s\n<code>&#39;timeout&#39;</code> events, then it is your responsibility to handle timed out\nsockets.\n\n</p>\n"
            },
            {
              "textRaw": "response.setHeader(name, value)",
              "type": "method",
              "name": "setHeader",
              "desc": "<p>Sets a single header value for implicit headers.  If this header already exists\nin the to-be-sent headers, its value will be replaced.  Use an array of strings\nhere if you need to send multiple headers with the same name.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>response.setHeader(&quot;Content-Type&quot;, &quot;text/html&quot;);</code></pre>\n<p>or\n\n</p>\n<pre><code>response.setHeader(&quot;Set-Cookie&quot;, [&quot;type=ninja&quot;, &quot;language=javascript&quot;]);</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "name"
                    },
                    {
                      "name": "value"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "response.getHeader(name)",
              "type": "method",
              "name": "getHeader",
              "desc": "<p>Reads out a header that&#39;s already been queued but not sent to the client.  Note\nthat the name is case insensitive.  This can only be called before headers get\nimplicitly flushed.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var contentType = response.getHeader(&#39;content-type&#39;);</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "name"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "response.removeHeader(name)",
              "type": "method",
              "name": "removeHeader",
              "desc": "<p>Removes a header that&#39;s queued for implicit sending.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>response.removeHeader(&quot;Content-Encoding&quot;);</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "name"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "response.write(chunk, [encoding])",
              "type": "method",
              "name": "write",
              "desc": "<p>If this method is called and [response.writeHead()][] has not been called,\nit will switch to implicit header mode and flush the implicit headers.\n\n</p>\n<p>This sends a chunk of the response body. This method may\nbe called multiple times to provide successive parts of the body.\n\n</p>\n<p><code>chunk</code> can be a string or a buffer. If <code>chunk</code> is a string,\nthe second parameter specifies how to encode it into a byte stream.\nBy default the <code>encoding</code> is <code>&#39;utf8&#39;</code>.\n\n</p>\n<p><strong>Note</strong>: This is the raw HTTP body and has nothing to do with\nhigher-level multi-part body encodings that may be used.\n\n</p>\n<p>The first time <code>response.write()</code> is called, it will send the buffered\nheader information and the first body to the client. The second time\n<code>response.write()</code> is called, Node assumes you&#39;re going to be streaming\ndata, and sends that separately. That is, the response is buffered up to the\nfirst chunk of body.\n\n</p>\n<p>Returns <code>true</code> if the entire data was flushed successfully to the kernel\nbuffer. Returns <code>false</code> if all or part of the data was queued in user memory.\n<code>&#39;drain&#39;</code> will be emitted when the buffer is again free.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "chunk"
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "response.addTrailers(headers)",
              "type": "method",
              "name": "addTrailers",
              "desc": "<p>This method adds HTTP trailing headers (a header but at the end of the\nmessage) to the response.\n\n</p>\n<p>Trailers will <strong>only</strong> be emitted if chunked encoding is used for the\nresponse; if it is not (e.g., if the request was HTTP/1.0), they will\nbe silently discarded.\n\n</p>\n<p>Note that HTTP requires the <code>Trailer</code> header to be sent if you intend to\nemit trailers, with a list of the header fields in its value. E.g.,\n\n</p>\n<pre><code>response.writeHead(200, { &#39;Content-Type&#39;: &#39;text/plain&#39;,\n                          &#39;Trailer&#39;: &#39;Content-MD5&#39; });\nresponse.write(fileData);\nresponse.addTrailers({&#39;Content-MD5&#39;: &quot;7895bf4b8828b55ceaf47747b4bca667&quot;});\nresponse.end();</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "headers"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "response.end([data], [encoding])",
              "type": "method",
              "name": "end",
              "desc": "<p>This method signals to the server that all of the response headers and body\nhave been sent; that server should consider this message complete.\nThe method, <code>response.end()</code>, MUST be called on each\nresponse.\n\n</p>\n<p>If <code>data</code> is specified, it is equivalent to calling <code>response.write(data, encoding)</code>\nfollowed by <code>response.end()</code>.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data",
                      "optional": true
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ],
          "properties": [
            {
              "textRaw": "response.statusCode",
              "name": "statusCode",
              "desc": "<p>When using implicit headers (not calling [response.writeHead()][] explicitly),\nthis property controls the status code that will be sent to the client when\nthe headers get flushed.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>response.statusCode = 404;</code></pre>\n<p>After response header was sent to the client, this property indicates the\nstatus code which was sent out.\n\n</p>\n"
            },
            {
              "textRaw": "response.headersSent",
              "name": "headersSent",
              "desc": "<p>Boolean (read-only). True if headers were sent, false otherwise.\n\n</p>\n"
            },
            {
              "textRaw": "response.sendDate",
              "name": "sendDate",
              "desc": "<p>When true, the Date header will be automatically generated and sent in\nthe response if it is not already present in the headers. Defaults to true.\n\n</p>\n<p>This should only be disabled for testing; HTTP requires the Date header\nin responses.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: http.Agent",
          "type": "class",
          "name": "http.Agent",
          "desc": "<p>In node 0.5.3+ there is a new implementation of the HTTP Agent which is used\nfor pooling sockets used in HTTP client requests.\n\n</p>\n<p>Previously, a single agent instance helped pool for a single host+port. The\ncurrent implementation now holds sockets for any number of hosts.\n\n</p>\n<p>The current HTTP Agent also defaults client requests to using\nConnection:keep-alive. If no pending HTTP requests are waiting on a socket\nto become free the socket is closed. This means that node&#39;s pool has the\nbenefit of keep-alive when under load but still does not require developers\nto manually close the HTTP clients using keep-alive.\n\n</p>\n<p>Sockets are removed from the agent&#39;s pool when the socket emits either a\n&quot;close&quot; event or a special &quot;agentRemove&quot; event. This means that if you intend\nto keep one HTTP request open for a long time and don&#39;t want it to stay in the\npool you can do something along the lines of:\n\n</p>\n<pre><code>http.get(options, function(res) {\n  // Do stuff\n}).on(&quot;socket&quot;, function (socket) {\n  socket.emit(&quot;agentRemove&quot;);\n});</code></pre>\n<p>Alternatively, you could just opt out of pooling entirely using <code>agent:false</code>:\n\n</p>\n<pre><code>http.get({hostname:&#39;localhost&#39;, port:80, path:&#39;/&#39;, agent:false}, function (res) {\n  // Do stuff\n})</code></pre>\n",
          "properties": [
            {
              "textRaw": "agent.maxSockets",
              "name": "maxSockets",
              "desc": "<p>By default set to 5. Determines how many concurrent sockets the agent can have\nopen per origin. Origin is either a &#39;host:port&#39; or &#39;host:port:localAddress&#39;\ncombination.\n\n</p>\n"
            },
            {
              "textRaw": "agent.sockets",
              "name": "sockets",
              "desc": "<p>An object which contains arrays of sockets currently in use by the Agent. Do not\nmodify.\n\n</p>\n"
            },
            {
              "textRaw": "agent.requests",
              "name": "requests",
              "desc": "<p>An object which contains queues of requests that have not yet been assigned to\nsockets. Do not modify.\n\n</p>\n"
            }
          ]
        },
        {
          "textRaw": "Class: http.ClientRequest",
          "type": "class",
          "name": "http.ClientRequest",
          "desc": "<p>This object is created internally and returned from <code>http.request()</code>.  It\nrepresents an <em>in-progress</em> request whose header has already been queued.  The\nheader is still mutable using the <code>setHeader(name, value)</code>, <code>getHeader(name)</code>,\n<code>removeHeader(name)</code> API.  The actual header will be sent along with the first\ndata chunk or when closing the connection.\n\n</p>\n<p>To get the response, add a listener for <code>&#39;response&#39;</code> to the request object.\n<code>&#39;response&#39;</code> will be emitted from the request object when the response\nheaders have been received.  The <code>&#39;response&#39;</code> event is executed with one\nargument which is an instance of [http.IncomingMessage][].\n\n</p>\n<p>During the <code>&#39;response&#39;</code> event, one can add listeners to the\nresponse object; particularly to listen for the <code>&#39;data&#39;</code> event.\n\n</p>\n<p>If no <code>&#39;response&#39;</code> handler is added, then the response will be\nentirely discarded.  However, if you add a <code>&#39;response&#39;</code> event handler,\nthen you <strong>must</strong> consume the data from the response object, either by\ncalling <code>response.read()</code> whenever there is a <code>&#39;readable&#39;</code> event, or\nby adding a <code>&#39;data&#39;</code> handler, or by calling the <code>.resume()</code> method.\nUntil the data is consumed, the <code>&#39;end&#39;</code> event will not fire.  Also, until\nthe data is read it will consume memory that can eventually lead to a\n&#39;process out of memory&#39; error.\n\n</p>\n<p>Note: Node does not check whether Content-Length and the length of the body\nwhich has been transmitted are equal or not.\n\n</p>\n<p>The request implements the [Writable Stream][] interface. This is an\n[EventEmitter][] with the following events:\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event 'response'",
              "type": "event",
              "name": "response",
              "desc": "<p><code>function (response) { }</code>\n\n</p>\n<p>Emitted when a response is received to this request. This event is emitted only\nonce. The <code>response</code> argument will be an instance of [http.IncomingMessage][].\n\n</p>\n<p>Options:\n\n</p>\n<ul>\n<li><code>host</code>: A domain name or IP address of the server to issue the request to.</li>\n<li><code>port</code>: Port of remote server.</li>\n<li><code>socketPath</code>: Unix Domain Socket (use one of host:port or socketPath)</li>\n</ul>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'socket'",
              "type": "event",
              "name": "socket",
              "desc": "<p><code>function (socket) { }</code>\n\n</p>\n<p>Emitted after a socket is assigned to this request.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'connect'",
              "type": "event",
              "name": "connect",
              "desc": "<p><code>function (response, socket, head) { }</code>\n\n</p>\n<p>Emitted each time a server responds to a request with a CONNECT method. If this\nevent isn&#39;t being listened for, clients receiving a CONNECT method will have\ntheir connections closed.\n\n</p>\n<p>A client server pair that show you how to listen for the <code>connect</code> event.\n\n</p>\n<pre><code>var http = require(&#39;http&#39;);\nvar net = require(&#39;net&#39;);\nvar url = require(&#39;url&#39;);\n\n// Create an HTTP tunneling proxy\nvar proxy = http.createServer(function (req, res) {\n  res.writeHead(200, {&#39;Content-Type&#39;: &#39;text/plain&#39;});\n  res.end(&#39;okay&#39;);\n});\nproxy.on(&#39;connect&#39;, function(req, cltSocket, head) {\n  // connect to an origin server\n  var srvUrl = url.parse(&#39;http://&#39; + req.url);\n  var srvSocket = net.connect(srvUrl.port, srvUrl.hostname, function() {\n    cltSocket.write(&#39;HTTP/1.1 200 Connection Established\\r\\n&#39; +\n                    &#39;Proxy-agent: Node-Proxy\\r\\n&#39; +\n                    &#39;\\r\\n&#39;);\n    srvSocket.write(head);\n    srvSocket.pipe(cltSocket);\n    cltSocket.pipe(srvSocket);\n  });\n});\n\n// now that proxy is running\nproxy.listen(1337, &#39;127.0.0.1&#39;, function() {\n\n  // make a request to a tunneling proxy\n  var options = {\n    port: 1337,\n    hostname: &#39;127.0.0.1&#39;,\n    method: &#39;CONNECT&#39;,\n    path: &#39;www.google.com:80&#39;\n  };\n\n  var req = http.request(options);\n  req.end();\n\n  req.on(&#39;connect&#39;, function(res, socket, head) {\n    console.log(&#39;got connected!&#39;);\n\n    // make a request over an HTTP tunnel\n    socket.write(&#39;GET / HTTP/1.1\\r\\n&#39; +\n                 &#39;Host: www.google.com:80\\r\\n&#39; +\n                 &#39;Connection: close\\r\\n&#39; +\n                 &#39;\\r\\n&#39;);\n    socket.on(&#39;data&#39;, function(chunk) {\n      console.log(chunk.toString());\n    });\n    socket.on(&#39;end&#39;, function() {\n      proxy.close();\n    });\n  });\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'upgrade'",
              "type": "event",
              "name": "upgrade",
              "desc": "<p><code>function (response, socket, head) { }</code>\n\n</p>\n<p>Emitted each time a server responds to a request with an upgrade. If this\nevent isn&#39;t being listened for, clients receiving an upgrade header will have\ntheir connections closed.\n\n</p>\n<p>A client server pair that show you how to listen for the <code>upgrade</code> event.\n\n</p>\n<pre><code>var http = require(&#39;http&#39;);\n\n// Create an HTTP server\nvar srv = http.createServer(function (req, res) {\n  res.writeHead(200, {&#39;Content-Type&#39;: &#39;text/plain&#39;});\n  res.end(&#39;okay&#39;);\n});\nsrv.on(&#39;upgrade&#39;, function(req, socket, head) {\n  socket.write(&#39;HTTP/1.1 101 Web Socket Protocol Handshake\\r\\n&#39; +\n               &#39;Upgrade: WebSocket\\r\\n&#39; +\n               &#39;Connection: Upgrade\\r\\n&#39; +\n               &#39;\\r\\n&#39;);\n\n  socket.pipe(socket); // echo back\n});\n\n// now that server is running\nsrv.listen(1337, &#39;127.0.0.1&#39;, function() {\n\n  // make a request\n  var options = {\n    port: 1337,\n    hostname: &#39;127.0.0.1&#39;,\n    headers: {\n      &#39;Connection&#39;: &#39;Upgrade&#39;,\n      &#39;Upgrade&#39;: &#39;websocket&#39;\n    }\n  };\n\n  var req = http.request(options);\n  req.end();\n\n  req.on(&#39;upgrade&#39;, function(res, socket, upgradeHead) {\n    console.log(&#39;got upgraded!&#39;);\n    socket.end();\n    process.exit(0);\n  });\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'continue'",
              "type": "event",
              "name": "continue",
              "desc": "<p><code>function () { }</code>\n\n</p>\n<p>Emitted when the server sends a &#39;100 Continue&#39; HTTP response, usually because\nthe request contained &#39;Expect: 100-continue&#39;. This is an instruction that\nthe client should send the request body.\n\n</p>\n",
              "params": []
            }
          ],
          "methods": [
            {
              "textRaw": "request.write(chunk, [encoding])",
              "type": "method",
              "name": "write",
              "desc": "<p>Sends a chunk of the body.  By calling this method\nmany times, the user can stream a request body to a\nserver--in that case it is suggested to use the\n<code>[&#39;Transfer-Encoding&#39;, &#39;chunked&#39;]</code> header line when\ncreating the request.\n\n</p>\n<p>The <code>chunk</code> argument should be a [Buffer][] or a string.\n\n</p>\n<p>The <code>encoding</code> argument is optional and only applies when <code>chunk</code> is a string.\nDefaults to <code>&#39;utf8&#39;</code>.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "chunk"
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "request.end([data], [encoding])",
              "type": "method",
              "name": "end",
              "desc": "<p>Finishes sending the request. If any parts of the body are\nunsent, it will flush them to the stream. If the request is\nchunked, this will send the terminating <code>&#39;0\\r\\n\\r\\n&#39;</code>.\n\n</p>\n<p>If <code>data</code> is specified, it is equivalent to calling\n<code>request.write(data, encoding)</code> followed by <code>request.end()</code>.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data",
                      "optional": true
                    },
                    {
                      "name": "encoding",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "request.abort()",
              "type": "method",
              "name": "abort",
              "desc": "<p>Aborts a request.  (New since v0.3.8.)\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "request.setTimeout(timeout, [callback])",
              "type": "method",
              "name": "setTimeout",
              "desc": "<p>Once a socket is assigned to this request and is connected\n[socket.setTimeout()][] will be called.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "timeout"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "request.setNoDelay([noDelay])",
              "type": "method",
              "name": "setNoDelay",
              "desc": "<p>Once a socket is assigned to this request and is connected\n[socket.setNoDelay()][] will be called.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "noDelay",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "request.setSocketKeepAlive([enable], [initialDelay])",
              "type": "method",
              "name": "setSocketKeepAlive",
              "desc": "<p>Once a socket is assigned to this request and is connected\n[socket.setKeepAlive()][] will be called.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "enable",
                      "optional": true
                    },
                    {
                      "name": "initialDelay",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "HTTP"
    },
    {
      "textRaw": "HTTPS",
      "name": "https",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>HTTPS is the HTTP protocol over TLS/SSL. In Node this is implemented as a\nseparate module.\n\n</p>\n",
      "classes": [
        {
          "textRaw": "Class: https.Server",
          "type": "class",
          "name": "https.Server",
          "desc": "<p>This class is a subclass of <code>tls.Server</code> and emits events same as\n<code>http.Server</code>. See <code>http.Server</code> for more information.\n\n</p>\n"
        },
        {
          "textRaw": "Class: https.Agent",
          "type": "class",
          "name": "https.Agent",
          "desc": "<p>An Agent object for HTTPS similar to [http.Agent][].  See [https.request()][]\nfor more information.\n\n\n</p>\n"
        }
      ],
      "methods": [
        {
          "textRaw": "https.createServer(options, [requestListener])",
          "type": "method",
          "name": "createServer",
          "desc": "<p>Returns a new HTTPS web server object. The <code>options</code> is similar to\n[tls.createServer()][].  The <code>requestListener</code> is a function which is\nautomatically added to the <code>&#39;request&#39;</code> event.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>// curl -k https://localhost:8000/\nvar https = require(&#39;https&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar options = {\n  key: fs.readFileSync(&#39;test/fixtures/keys/agent2-key.pem&#39;),\n  cert: fs.readFileSync(&#39;test/fixtures/keys/agent2-cert.pem&#39;)\n};\n\nhttps.createServer(options, function (req, res) {\n  res.writeHead(200);\n  res.end(&quot;hello world\\n&quot;);\n}).listen(8000);</code></pre>\n<p>Or\n\n</p>\n<pre><code>var https = require(&#39;https&#39;);\nvar fs = require(&#39;fs&#39;);\n\nvar options = {\n  pfx: fs.readFileSync(&#39;server.pfx&#39;)\n};\n\nhttps.createServer(options, function (req, res) {\n  res.writeHead(200);\n  res.end(&quot;hello world\\n&quot;);\n}).listen(8000);</code></pre>\n",
          "methods": [
            {
              "textRaw": "server.listen(path, [callback])",
              "type": "method",
              "name": "listen",
              "desc": "<p>See [http.listen()][] for details.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "handle"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "path"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.listen(handle, [callback])",
              "type": "method",
              "name": "listen",
              "desc": "<p>See [http.listen()][] for details.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "handle"
                    },
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "server.close([callback])",
              "type": "method",
              "name": "close",
              "desc": "<p>See [http.close()][] for details.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "callback",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ],
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "requestListener",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "https.request(options, callback)",
          "type": "method",
          "name": "request",
          "desc": "<p>Makes a request to a secure web server.\n\n</p>\n<p><code>options</code> can be an object or a string. If <code>options</code> is a string, it is\nautomatically parsed with <a href=\"url.html#url.parse\">url.parse()</a>.\n\n</p>\n<p>All options from [http.request()][] are valid.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var https = require(&#39;https&#39;);\n\nvar options = {\n  hostname: &#39;encrypted.google.com&#39;,\n  port: 443,\n  path: &#39;/&#39;,\n  method: &#39;GET&#39;\n};\n\nvar req = https.request(options, function(res) {\n  console.log(&quot;statusCode: &quot;, res.statusCode);\n  console.log(&quot;headers: &quot;, res.headers);\n\n  res.on(&#39;data&#39;, function(d) {\n    process.stdout.write(d);\n  });\n});\nreq.end();\n\nreq.on(&#39;error&#39;, function(e) {\n  console.error(e);\n});</code></pre>\n<p>The options argument has the following options\n\n</p>\n<ul>\n<li><code>host</code>: A domain name or IP address of the server to issue the request to.\nDefaults to <code>&#39;localhost&#39;</code>.</li>\n<li><code>hostname</code>: To support <code>url.parse()</code> <code>hostname</code> is preferred over <code>host</code></li>\n<li><code>port</code>: Port of remote server. Defaults to 443.</li>\n<li><code>method</code>: A string specifying the HTTP request method. Defaults to <code>&#39;GET&#39;</code>.</li>\n<li><code>path</code>: Request path. Defaults to <code>&#39;/&#39;</code>. Should include query string if any.\nE.G. <code>&#39;/index.html?page=12&#39;</code></li>\n<li><code>headers</code>: An object containing request headers.</li>\n<li><code>auth</code>: Basic authentication i.e. <code>&#39;user:password&#39;</code> to compute an\nAuthorization header.</li>\n<li><code>agent</code>: Controls [Agent][] behavior. When an Agent is used request will\ndefault to <code>Connection: keep-alive</code>. Possible values:<ul>\n<li><code>undefined</code> (default): use [globalAgent][] for this host and port.</li>\n<li><code>Agent</code> object: explicitly use the passed in <code>Agent</code>.</li>\n<li><code>false</code>: opts out of connection pooling with an Agent, defaults request to\n<code>Connection: close</code>.</li>\n</ul>\n</li>\n</ul>\n<p>The following options from [tls.connect()][] can also be specified. However, a\n[globalAgent][] silently ignores these.\n\n</p>\n<ul>\n<li><code>pfx</code>: Certificate, Private key and CA certificates to use for SSL. Default <code>null</code>.</li>\n<li><code>key</code>: Private key to use for SSL. Default <code>null</code>.</li>\n<li><code>passphrase</code>: A string of passphrase for the private key or pfx. Default <code>null</code>.</li>\n<li><code>cert</code>: Public x509 certificate to use. Default <code>null</code>.</li>\n<li><code>ca</code>: An authority certificate or array of authority certificates to check\nthe remote host against.</li>\n<li><code>ciphers</code>: A string describing the ciphers to use or exclude. Consult\n<a href=\"http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT\">http://www.openssl.org/docs/apps/ciphers.html#CIPHER_LIST_FORMAT</a> for\ndetails on the format.</li>\n<li><code>rejectUnauthorized</code>: If <code>true</code>, the server certificate is verified against\nthe list of supplied CAs. An <code>&#39;error&#39;</code> event is emitted if verification\nfails. Verification happens at the connection level, <em>before</em> the HTTP\nrequest is sent. Default <code>true</code>.</li>\n<li><code>secureProtocol</code>: The SSL method to use, e.g. <code>TLSv1_method</code> to force\nTLS version 1. The possible values depend on your installation of\nOpenSSL and are defined in the constant [SSL_METHODS][].</li>\n</ul>\n<p>In order to specify these options, use a custom <code>Agent</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var options = {\n  hostname: &#39;encrypted.google.com&#39;,\n  port: 443,\n  path: &#39;/&#39;,\n  method: &#39;GET&#39;,\n  key: fs.readFileSync(&#39;test/fixtures/keys/agent2-key.pem&#39;),\n  cert: fs.readFileSync(&#39;test/fixtures/keys/agent2-cert.pem&#39;)\n};\noptions.agent = new https.Agent(options);\n\nvar req = https.request(options, function(res) {\n  ...\n}</code></pre>\n<p>Or does not use an <code>Agent</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var options = {\n  hostname: &#39;encrypted.google.com&#39;,\n  port: 443,\n  path: &#39;/&#39;,\n  method: &#39;GET&#39;,\n  key: fs.readFileSync(&#39;test/fixtures/keys/agent2-key.pem&#39;),\n  cert: fs.readFileSync(&#39;test/fixtures/keys/agent2-cert.pem&#39;),\n  agent: false\n};\n\nvar req = https.request(options, function(res) {\n  ...\n}</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "https.get(options, callback)",
          "type": "method",
          "name": "get",
          "desc": "<p>Like <code>http.get()</code> but for HTTPS.\n\n</p>\n<p><code>options</code> can be an object or a string. If <code>options</code> is a string, it is\nautomatically parsed with <a href=\"url.html#url.parse\">url.parse()</a>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var https = require(&#39;https&#39;);\n\nhttps.get(&#39;https://encrypted.google.com/&#39;, function(res) {\n  console.log(&quot;statusCode: &quot;, res.statusCode);\n  console.log(&quot;headers: &quot;, res.headers);\n\n  res.on(&#39;data&#39;, function(d) {\n    process.stdout.write(d);\n  });\n\n}).on(&#39;error&#39;, function(e) {\n  console.error(e);\n});</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        }
      ],
      "properties": [
        {
          "textRaw": "https.globalAgent",
          "name": "globalAgent",
          "desc": "<p>Global instance of [https.Agent][] for all HTTPS client requests.\n\n</p>\n"
        }
      ],
      "type": "module",
      "displayName": "HTTPS"
    },
    {
      "textRaw": "URL",
      "name": "url",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>This module has utilities for URL resolution and parsing.\nCall <code>require(&#39;url&#39;)</code> to use it.\n\n</p>\n<p>Parsed URL objects have some or all of the following fields, depending on\nwhether or not they exist in the URL string. Any parts that are not in the URL\nstring will not be in the parsed object. Examples are shown for the URL\n\n</p>\n<p><code>&#39;http://user:pass@host.com:8080/p/a/t/h?query=string#hash&#39;</code>\n\n</p>\n<ul>\n<li><p><code>href</code>: The full URL that was originally parsed. Both the protocol and host are lowercased.</p>\n<p>  Example: <code>&#39;http://user:pass@host.com:8080/p/a/t/h?query=string#hash&#39;</code></p>\n</li>\n<li><p><code>protocol</code>: The request protocol, lowercased.</p>\n<p>  Example: <code>&#39;http:&#39;</code></p>\n</li>\n<li><p><code>slashes</code>: The protocol requires slashes after the colon</p>\n<p>  Example: true or false</p>\n</li>\n<li><p><code>host</code>: The full lowercased host portion of the URL, including port\ninformation.</p>\n<p>  Example: <code>&#39;host.com:8080&#39;</code></p>\n</li>\n<li><p><code>auth</code>: The authentication information portion of a URL.</p>\n<p>  Example: <code>&#39;user:pass&#39;</code></p>\n</li>\n<li><p><code>hostname</code>: Just the lowercased hostname portion of the host.</p>\n<p>  Example: <code>&#39;host.com&#39;</code></p>\n</li>\n<li><p><code>port</code>: The port number portion of the host.</p>\n<p>  Example: <code>&#39;8080&#39;</code></p>\n</li>\n<li><p><code>pathname</code>: The path section of the URL, that comes after the host and\nbefore the query, including the initial slash if present.</p>\n<p>  Example: <code>&#39;/p/a/t/h&#39;</code></p>\n</li>\n<li><p><code>search</code>: The &#39;query string&#39; portion of the URL, including the leading\nquestion mark.</p>\n<p>  Example: <code>&#39;?query=string&#39;</code></p>\n</li>\n<li><p><code>path</code>: Concatenation of <code>pathname</code> and <code>search</code>.</p>\n<p>  Example: <code>&#39;/p/a/t/h?query=string&#39;</code></p>\n</li>\n<li><p><code>query</code>: Either the &#39;params&#39; portion of the query string, or a\nquerystring-parsed object.</p>\n<p>  Example: <code>&#39;query=string&#39;</code> or <code>{&#39;query&#39;:&#39;string&#39;}</code></p>\n</li>\n<li><p><code>hash</code>: The &#39;fragment&#39; portion of the URL including the pound-sign.</p>\n<p>  Example: <code>&#39;#hash&#39;</code></p>\n</li>\n</ul>\n<p>The following methods are provided by the URL module:\n\n</p>\n",
      "methods": [
        {
          "textRaw": "url.parse(urlStr, [parseQueryString], [slashesDenoteHost])",
          "type": "method",
          "name": "parse",
          "desc": "<p>Take a URL string, and return an object.\n\n</p>\n<p>Pass <code>true</code> as the second argument to also parse\nthe query string using the <code>querystring</code> module.\nDefaults to <code>false</code>.\n\n</p>\n<p>Pass <code>true</code> as the third argument to treat <code>//foo/bar</code> as\n<code>{ host: &#39;foo&#39;, pathname: &#39;/bar&#39; }</code> rather than\n<code>{ pathname: &#39;//foo/bar&#39; }</code>. Defaults to <code>false</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "urlStr"
                },
                {
                  "name": "parseQueryString",
                  "optional": true
                },
                {
                  "name": "slashesDenoteHost",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "url.format(urlObj)",
          "type": "method",
          "name": "format",
          "desc": "<p>Take a parsed URL object, and return a formatted URL string.\n\n</p>\n<ul>\n<li><code>href</code> will be ignored.</li>\n<li><code>protocol</code> is treated the same with or without the trailing <code>:</code> (colon).<ul>\n<li>The protocols <code>http</code>, <code>https</code>, <code>ftp</code>, <code>gopher</code>, <code>file</code> will be\npostfixed with <code>://</code> (colon-slash-slash).</li>\n<li>All other protocols <code>mailto</code>, <code>xmpp</code>, <code>aim</code>, <code>sftp</code>, <code>foo</code>, etc will\nbe postfixed with <code>:</code> (colon)</li>\n</ul>\n</li>\n<li><code>slashes</code> set to <code>true</code> if the protocol requires <code>://</code> (colon-slash-slash)<ul>\n<li>Only needs to be set for protocols not previously listed as requiring\nslashes, such as <code>mongodb://localhost:8000/</code></li>\n</ul>\n</li>\n<li><code>auth</code> will be used if present.</li>\n<li><code>hostname</code> will only be used if <code>host</code> is absent.</li>\n<li><code>port</code> will only be used if <code>host</code> is absent.</li>\n<li><code>host</code> will be used in place of <code>hostname</code> and <code>port</code></li>\n<li><code>pathname</code> is treated the same with or without the leading <code>/</code> (slash)</li>\n<li><code>search</code> will be used in place of <code>query</code></li>\n<li><code>query</code> (object; see <code>querystring</code>) will only be used if <code>search</code> is absent.</li>\n<li><code>search</code> is treated the same with or without the leading <code>?</code> (question mark)</li>\n<li><code>hash</code> is treated the same with or without the leading <code>#</code> (pound sign, anchor)</li>\n</ul>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "urlObj"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "url.resolve(from, to)",
          "type": "method",
          "name": "resolve",
          "desc": "<p>Take a base URL, and a href URL, and resolve them as a browser would for\nan anchor tag.  Examples:\n\n</p>\n<pre><code>url.resolve(&#39;/one/two/three&#39;, &#39;four&#39;)         // &#39;/one/two/four&#39;\nurl.resolve(&#39;http://example.com/&#39;, &#39;/one&#39;)    // &#39;http://example.com/one&#39;\nurl.resolve(&#39;http://example.com/one&#39;, &#39;/two&#39;) // &#39;http://example.com/two&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "from"
                },
                {
                  "name": "to"
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "URL"
    },
    {
      "textRaw": "Query String",
      "name": "querystring",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>This module provides utilities for dealing with query strings.\nIt provides the following methods:\n\n</p>\n",
      "methods": [
        {
          "textRaw": "querystring.stringify(obj, [sep], [eq])",
          "type": "method",
          "name": "stringify",
          "desc": "<p>Serialize an object to a query string.\nOptionally override the default separator (<code>&#39;&amp;&#39;</code>) and assignment (<code>&#39;=&#39;</code>)\ncharacters.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>querystring.stringify({ foo: &#39;bar&#39;, baz: [&#39;qux&#39;, &#39;quux&#39;], corge: &#39;&#39; })\n// returns\n&#39;foo=bar&amp;baz=qux&amp;baz=quux&amp;corge=&#39;\n\nquerystring.stringify({foo: &#39;bar&#39;, baz: &#39;qux&#39;}, &#39;;&#39;, &#39;:&#39;)\n// returns\n&#39;foo:bar;baz:qux&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "obj"
                },
                {
                  "name": "sep",
                  "optional": true
                },
                {
                  "name": "eq",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "querystring.parse(str, [sep], [eq], [options])",
          "type": "method",
          "name": "parse",
          "desc": "<p>Deserialize a query string to an object.\nOptionally override the default separator (<code>&#39;&amp;&#39;</code>) and assignment (<code>&#39;=&#39;</code>)\ncharacters.\n\n</p>\n<p>Options object may contain <code>maxKeys</code> property (equal to 1000 by default), it&#39;ll\nbe used to limit processed keys. Set it to 0 to remove key count limitation.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>querystring.parse(&#39;foo=bar&amp;baz=qux&amp;baz=quux&amp;corge&#39;)\n// returns\n{ foo: &#39;bar&#39;, baz: [&#39;qux&#39;, &#39;quux&#39;], corge: &#39;&#39; }</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "str"
                },
                {
                  "name": "sep",
                  "optional": true
                },
                {
                  "name": "eq",
                  "optional": true
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        }
      ],
      "properties": [
        {
          "textRaw": "querystring.escape",
          "name": "escape",
          "desc": "<p>The escape function used by <code>querystring.stringify</code>,\nprovided so that it could be overridden if necessary.\n\n</p>\n"
        },
        {
          "textRaw": "querystring.unescape",
          "name": "unescape",
          "desc": "<p>The unescape function used by <code>querystring.parse</code>,\nprovided so that it could be overridden if necessary.\n\n</p>\n"
        }
      ],
      "type": "module",
      "displayName": "querystring"
    },
    {
      "textRaw": "punycode",
      "name": "punycode",
      "stability": 2,
      "stabilityText": "Unstable",
      "desc": "<p><a href=\"http://mths.be/punycode\">Punycode.js</a> is bundled with Node.js v0.6.2+. Use\n<code>require(&#39;punycode&#39;)</code> to access it. (To use it with other Node.js versions,\nuse npm to install the <code>punycode</code> module first.)\n\n</p>\n",
      "methods": [
        {
          "textRaw": "punycode.decode(string)",
          "type": "method",
          "name": "decode",
          "desc": "<p>Converts a Punycode string of ASCII code points to a string of Unicode code\npoints.\n\n</p>\n<pre><code>// decode domain name parts\npunycode.decode(&#39;maana-pta&#39;); // &#39;maÃ±ana&#39;\npunycode.decode(&#39;--dqo34k&#39;); // &#39;â˜ƒ-âŒ˜&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "string"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "punycode.encode(string)",
          "type": "method",
          "name": "encode",
          "desc": "<p>Converts a string of Unicode code points to a Punycode string of ASCII code\npoints.\n\n</p>\n<pre><code>// encode domain name parts\npunycode.encode(&#39;maÃ±ana&#39;); // &#39;maana-pta&#39;\npunycode.encode(&#39;â˜ƒ-âŒ˜&#39;); // &#39;--dqo34k&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "string"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "punycode.toUnicode(domain)",
          "type": "method",
          "name": "toUnicode",
          "desc": "<p>Converts a Punycode string representing a domain name to Unicode. Only the\nPunycoded parts of the domain name will be converted, i.e. it doesn&#39;t matter if\nyou call it on a string that has already been converted to Unicode.\n\n</p>\n<pre><code>// decode domain names\npunycode.toUnicode(&#39;xn--maana-pta.com&#39;); // &#39;maÃ±ana.com&#39;\npunycode.toUnicode(&#39;xn----dqo34k.com&#39;); // &#39;â˜ƒ-âŒ˜.com&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "punycode.toASCII(domain)",
          "type": "method",
          "name": "toASCII",
          "desc": "<p>Converts a Unicode string representing a domain name to Punycode. Only the\nnon-ASCII parts of the domain name will be converted, i.e. it doesn&#39;t matter if\nyou call it with a domain that&#39;s already in ASCII.\n\n</p>\n<pre><code>// encode domain names\npunycode.toASCII(&#39;maÃ±ana.com&#39;); // &#39;xn--maana-pta.com&#39;\npunycode.toASCII(&#39;â˜ƒ-âŒ˜.com&#39;); // &#39;xn----dqo34k.com&#39;</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "domain"
                }
              ]
            }
          ]
        }
      ],
      "properties": [
        {
          "textRaw": "punycode.ucs2",
          "name": "ucs2",
          "modules": [
            {
              "textRaw": "punycode.ucs2.decode(string)",
              "name": "punycode.ucs2.decode(string)",
              "desc": "<p>Creates an array containing the decimal code points of each Unicode character\nin the string. While <a href=\"http://mathiasbynens.be/notes/javascript-encoding\">JavaScript uses UCS-2\ninternally</a>, this function\nwill convert a pair of surrogate halves (each of which UCS-2 exposes as\nseparate characters) into a single code point, matching UTF-16.\n\n</p>\n<pre><code>punycode.ucs2.decode(&#39;abc&#39;); // [97, 98, 99]\n// surrogate pair for U+1D306 tetragram for centre:\npunycode.ucs2.decode(&#39;\\uD834\\uDF06&#39;); // [0x1D306]</code></pre>\n",
              "type": "module",
              "displayName": "punycode.ucs2.decode(string)"
            },
            {
              "textRaw": "punycode.ucs2.encode(codePoints)",
              "name": "punycode.ucs2.encode(codepoints)",
              "desc": "<p>Creates a string based on an array of decimal code points.\n\n</p>\n<pre><code>punycode.ucs2.encode([97, 98, 99]); // &#39;abc&#39;\npunycode.ucs2.encode([0x1D306]); // &#39;\\uD834\\uDF06&#39;</code></pre>\n",
              "type": "module",
              "displayName": "punycode.ucs2.encode(codePoints)"
            }
          ]
        },
        {
          "textRaw": "punycode.version",
          "name": "version",
          "desc": "<p>A string representing the current Punycode.js version number.\n\n</p>\n"
        }
      ],
      "type": "module",
      "displayName": "punycode"
    },
    {
      "textRaw": "Readline",
      "name": "readline",
      "stability": 2,
      "stabilityText": "Unstable",
      "desc": "<p>To use this module, do <code>require(&#39;readline&#39;)</code>. Readline allows reading of a\nstream (such as <code>process.stdin</code>) on a line-by-line basis.\n\n</p>\n<p>Note that once you&#39;ve invoked this module, your node program will not\nterminate until you&#39;ve closed the interface. Here&#39;s how to allow your\nprogram to gracefully exit:\n\n</p>\n<pre><code>var readline = require(&#39;readline&#39;);\n\nvar rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout\n});\n\nrl.question(&quot;What do you think of node.js? &quot;, function(answer) {\n  // TODO: Log the answer in a database\n  console.log(&quot;Thank you for your valuable feedback:&quot;, answer);\n\n  rl.close();\n});</code></pre>\n",
      "methods": [
        {
          "textRaw": "readline.createInterface(options)",
          "type": "method",
          "name": "createInterface",
          "desc": "<p>Creates a readline <code>Interface</code> instance. Accepts an &quot;options&quot; Object that takes\nthe following values:\n\n</p>\n<ul>\n<li><p><code>input</code> - the readable stream to listen to (Required).</p>\n</li>\n<li><p><code>output</code> - the writable stream to write readline data to (Required).</p>\n</li>\n<li><p><code>completer</code> - an optional function that is used for Tab autocompletion. See\nbelow for an example of using this.</p>\n</li>\n<li><p><code>terminal</code> - pass <code>true</code> if the <code>input</code> and <code>output</code> streams should be\ntreated like a TTY, and have ANSI/VT100 escape codes written to it.\nDefaults to checking <code>isTTY</code> on the <code>output</code> stream upon instantiation.</p>\n</li>\n</ul>\n<p>The <code>completer</code> function is given the current line entered by the user, and\nis supposed to return an Array with 2 entries:\n\n</p>\n<ol>\n<li><p>An Array with matching entries for the completion.</p>\n</li>\n<li><p>The substring that was used for the matching.</p>\n</li>\n</ol>\n<p>Which ends up looking something like:\n<code>[[substr1, substr2, ...], originalsubstring]</code>.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>function completer(line) {\n  var completions = &#39;.help .error .exit .quit .q&#39;.split(&#39; &#39;)\n  var hits = completions.filter(function(c) { return c.indexOf(line) == 0 })\n  // show all completions if none found\n  return [hits.length ? hits : completions, line]\n}</code></pre>\n<p>Also <code>completer</code> can be run in async mode if it accepts two arguments:\n\n</p>\n<pre><code>function completer(linePartial, callback) {\n  callback(null, [[&#39;123&#39;], linePartial]);\n}</code></pre>\n<p><code>createInterface</code> is commonly used with <code>process.stdin</code> and\n<code>process.stdout</code> in order to accept user input:\n\n</p>\n<pre><code>var readline = require(&#39;readline&#39;);\nvar rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout\n});</code></pre>\n<p>Once you have a readline instance, you most commonly listen for the\n<code>&quot;line&quot;</code> event.\n\n</p>\n<p>If <code>terminal</code> is <code>true</code> for this instance then the <code>output</code> stream will get\nthe best compatibility if it defines an <code>output.columns</code> property, and fires\na <code>&quot;resize&quot;</code> event on the <code>output</code> if/when the columns ever change\n(<code>process.stdout</code> does this automatically when it is a TTY).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "readline.cursorTo(stream, x, y)",
          "type": "method",
          "name": "cursorTo",
          "desc": "<p>Move cursor to the specified position in a given TTY stream.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "stream"
                },
                {
                  "name": "x"
                },
                {
                  "name": "y"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "readline.moveCursor(stream, dx, dy)",
          "type": "method",
          "name": "moveCursor",
          "desc": "<p>Move cursor relative to it&#39;s current position in a given TTY stream.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "stream"
                },
                {
                  "name": "dx"
                },
                {
                  "name": "dy"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "readline.clearLine(stream, dir)",
          "type": "method",
          "name": "clearLine",
          "desc": "<p>Clears current line of given TTY stream in a specified direction.\n<code>dir</code> should have one of following values:\n\n</p>\n<ul>\n<li><code>-1</code> - to the left from cursor</li>\n<li><code>1</code> - to the right from cursor</li>\n<li><code>0</code> - the entire line</li>\n</ul>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "stream"
                },
                {
                  "name": "dir"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "readline.clearScreenDown(stream)",
          "type": "method",
          "name": "clearScreenDown",
          "desc": "<p>Clears the screen from the current position of the cursor down.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "stream"
                }
              ]
            }
          ]
        }
      ],
      "classes": [
        {
          "textRaw": "Class: Interface",
          "type": "class",
          "name": "Interface",
          "desc": "<p>The class that represents a readline interface with an input and output\nstream.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "rl.setPrompt(prompt, length)",
              "type": "method",
              "name": "setPrompt",
              "desc": "<p>Sets the prompt, for example when you run <code>node</code> on the command line, you see\n<code>&gt; </code>, which is node&#39;s prompt.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "prompt"
                    },
                    {
                      "name": "length"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "rl.prompt([preserveCursor])",
              "type": "method",
              "name": "prompt",
              "desc": "<p>Readies readline for input from the user, putting the current <code>setPrompt</code>\noptions on a new line, giving the user a new spot to write. Set <code>preserveCursor</code>\nto <code>true</code> to prevent the cursor placement being reset to <code>0</code>.\n\n</p>\n<p>This will also resume the <code>input</code> stream used with <code>createInterface</code> if it has\nbeen paused.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "preserveCursor",
                      "optional": true
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "rl.question(query, callback)",
              "type": "method",
              "name": "question",
              "desc": "<p>Prepends the prompt with <code>query</code> and invokes <code>callback</code> with the user&#39;s\nresponse. Displays the query to the user, and then invokes <code>callback</code>\nwith the user&#39;s response after it has been typed.\n\n</p>\n<p>This will also resume the <code>input</code> stream used with <code>createInterface</code> if\nit has been paused.\n\n</p>\n<p>Example usage:\n\n</p>\n<pre><code>interface.question(&#39;What is your favorite food?&#39;, function(answer) {\n  console.log(&#39;Oh, so your favorite food is &#39; + answer);\n});</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "query"
                    },
                    {
                      "name": "callback"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "rl.pause()",
              "type": "method",
              "name": "pause",
              "desc": "<p>Pauses the readline <code>input</code> stream, allowing it to be resumed later if needed.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "rl.resume()",
              "type": "method",
              "name": "resume",
              "desc": "<p>Resumes the readline <code>input</code> stream.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "rl.close()",
              "type": "method",
              "name": "close",
              "desc": "<p>Closes the <code>Interface</code> instance, relinquishing control on the <code>input</code> and\n<code>output</code> streams. The &quot;close&quot; event will also be emitted.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "rl.write(data, [key])",
              "type": "method",
              "name": "write",
              "desc": "<p>Writes <code>data</code> to <code>output</code> stream. <code>key</code> is an object literal to represent a key\nsequence; available if the terminal is a TTY.\n\n</p>\n<p>This will also resume the <code>input</code> stream if it has been paused.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>rl.write(&#39;Delete me!&#39;);\n// Simulate ctrl+u to delete the line written previously\nrl.write(null, {ctrl: true, name: &#39;u&#39;});</code></pre>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "data"
                    },
                    {
                      "name": "key",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "modules": [
        {
          "textRaw": "Events",
          "name": "events",
          "events": [
            {
              "textRaw": "Event: 'line'",
              "type": "event",
              "name": "line",
              "desc": "<p><code>function (line) {}</code>\n\n</p>\n<p>Emitted whenever the <code>input</code> stream receives a <code>\\n</code>, usually received when the\nuser hits enter, or return. This is a good hook to listen for user input.\n\n</p>\n<p>Example of listening for <code>line</code>:\n\n</p>\n<pre><code>rl.on(&#39;line&#39;, function (cmd) {\n  console.log(&#39;You just typed: &#39;+cmd);\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'pause'",
              "type": "event",
              "name": "pause",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p>Emitted whenever the <code>input</code> stream is paused.\n\n</p>\n<p>Also emitted whenever the <code>input</code> stream is not paused and receives the\n<code>SIGCONT</code> event. (See events <code>SIGTSTP</code> and <code>SIGCONT</code>)\n\n</p>\n<p>Example of listening for <code>pause</code>:\n\n</p>\n<pre><code>rl.on(&#39;pause&#39;, function() {\n  console.log(&#39;Readline paused.&#39;);\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'resume'",
              "type": "event",
              "name": "resume",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p>Emitted whenever the <code>input</code> stream is resumed.\n\n</p>\n<p>Example of listening for <code>resume</code>:\n\n</p>\n<pre><code>rl.on(&#39;resume&#39;, function() {\n  console.log(&#39;Readline resumed.&#39;);\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p>Emitted when <code>close()</code> is called.\n\n</p>\n<p>Also emitted when the <code>input</code> stream receives its &quot;end&quot; event. The <code>Interface</code>\ninstance should be considered &quot;finished&quot; once this is emitted. For example, when\nthe <code>input</code> stream receives <code>^D</code>, respectively known as <code>EOT</code>.\n\n</p>\n<p>This event is also called if there is no <code>SIGINT</code> event listener present when\nthe <code>input</code> stream receives a <code>^C</code>, respectively known as <code>SIGINT</code>.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'SIGINT'",
              "type": "event",
              "name": "SIGINT",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p>Emitted whenever the <code>input</code> stream receives a <code>^C</code>, respectively known as\n<code>SIGINT</code>. If there is no <code>SIGINT</code> event listener present when the <code>input</code>\nstream receives a <code>SIGINT</code>, <code>pause</code> will be triggered.\n\n</p>\n<p>Example of listening for <code>SIGINT</code>:\n\n</p>\n<pre><code>rl.on(&#39;SIGINT&#39;, function() {\n  rl.question(&#39;Are you sure you want to exit?&#39;, function(answer) {\n    if (answer.match(/^y(es)?$/i)) rl.pause();\n  });\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'SIGTSTP'",
              "type": "event",
              "name": "SIGTSTP",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p><strong>This does not work on Windows.</strong>\n\n</p>\n<p>Emitted whenever the <code>input</code> stream receives a <code>^Z</code>, respectively known as\n<code>SIGTSTP</code>. If there is no <code>SIGTSTP</code> event listener present when the <code>input</code>\nstream receives a <code>SIGTSTP</code>, the program will be sent to the background.\n\n</p>\n<p>When the program is resumed with <code>fg</code>, the <code>pause</code> and <code>SIGCONT</code> events will be\nemitted. You can use either to resume the stream.\n\n</p>\n<p>The <code>pause</code> and <code>SIGCONT</code> events will not be triggered if the stream was paused\nbefore the program was sent to the background.\n\n</p>\n<p>Example of listening for <code>SIGTSTP</code>:\n\n</p>\n<pre><code>rl.on(&#39;SIGTSTP&#39;, function() {\n  // This will override SIGTSTP and prevent the program from going to the\n  // background.\n  console.log(&#39;Caught SIGTSTP.&#39;);\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'SIGCONT'",
              "type": "event",
              "name": "SIGCONT",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p><strong>This does not work on Windows.</strong>\n\n</p>\n<p>Emitted whenever the <code>input</code> stream is sent to the background with <code>^Z</code>,\nrespectively known as <code>SIGTSTP</code>, and then continued with <code>fg(1)</code>. This event\nonly emits if the stream was not paused before sending the program to the\nbackground.\n\n</p>\n<p>Example of listening for <code>SIGCONT</code>:\n\n</p>\n<pre><code>rl.on(&#39;SIGCONT&#39;, function() {\n  // `prompt` will automatically resume the stream\n  rl.prompt();\n});</code></pre>\n<h2>Example: Tiny CLI</h2>\n<p>Here&#39;s an example of how to use all these together to craft a tiny command\nline interface:\n\n</p>\n<pre><code>var readline = require(&#39;readline&#39;),\n    rl = readline.createInterface(process.stdin, process.stdout);\n\nrl.setPrompt(&#39;OHAI&gt; &#39;);\nrl.prompt();\n\nrl.on(&#39;line&#39;, function(line) {\n  switch(line.trim()) {\n    case &#39;hello&#39;:\n      console.log(&#39;world!&#39;);\n      break;\n    default:\n      console.log(&#39;Say what? I might have heard `&#39; + line.trim() + &#39;`&#39;);\n      break;\n  }\n  rl.prompt();\n}).on(&#39;close&#39;, function() {\n  console.log(&#39;Have a great day!&#39;);\n  process.exit(0);\n});</code></pre>\n",
              "params": []
            }
          ],
          "type": "module",
          "displayName": "Events"
        }
      ],
      "type": "module",
      "displayName": "Readline"
    },
    {
      "textRaw": "REPL",
      "name": "repl",
      "desc": "<p>A Read-Eval-Print-Loop (REPL) is available both as a standalone program and\neasily includable in other programs. The REPL provides a way to interactively\nrun JavaScript and see the results.  It can be used for debugging, testing, or\njust trying things out.\n\n</p>\n<p>By executing <code>node</code> without any arguments from the command-line you will be\ndropped into the REPL. It has simplistic emacs line-editing.\n\n</p>\n<pre><code>mjr:~$ node\nType &#39;.help&#39; for options.\n&gt; a = [ 1, 2, 3];\n[ 1, 2, 3 ]\n&gt; a.forEach(function (v) {\n...   console.log(v);\n...   });\n1\n2\n3</code></pre>\n<p>For advanced line-editors, start node with the environmental variable\n<code>NODE_NO_READLINE=1</code>. This will start the main and debugger REPL in canonical\nterminal settings which will allow you to use with <code>rlwrap</code>.\n\n</p>\n<p>For example, you could add this to your bashrc file:\n\n</p>\n<pre><code>alias node=&quot;env NODE_NO_READLINE=1 rlwrap node&quot;</code></pre>\n",
      "methods": [
        {
          "textRaw": "repl.start(options)",
          "type": "method",
          "name": "start",
          "desc": "<p>Returns and starts a <code>REPLServer</code> instance. Accepts an &quot;options&quot; Object that\ntakes the following values:\n\n</p>\n<ul>\n<li><p><code>prompt</code> - the prompt and <code>stream</code> for all I/O. Defaults to <code>&gt; </code>.</p>\n</li>\n<li><p><code>input</code> - the readable stream to listen to. Defaults to <code>process.stdin</code>.</p>\n</li>\n<li><p><code>output</code> - the writable stream to write readline data to. Defaults to\n<code>process.stdout</code>.</p>\n</li>\n<li><p><code>terminal</code> - pass <code>true</code> if the <code>stream</code> should be treated like a TTY, and\nhave ANSI/VT100 escape codes written to it. Defaults to checking <code>isTTY</code>\non the <code>output</code> stream upon instantiation.</p>\n</li>\n<li><p><code>eval</code> - function that will be used to eval each given line. Defaults to\nan async wrapper for <code>eval()</code>. See below for an example of a custom <code>eval</code>.</p>\n</li>\n<li><p><code>useColors</code> - a boolean which specifies whether or not the <code>writer</code> function\nshould output colors. If a different <code>writer</code> function is set then this does\nnothing. Defaults to the repl&#39;s <code>terminal</code> value.</p>\n</li>\n<li><p><code>useGlobal</code> - if set to <code>true</code>, then the repl will use the <code>global</code> object,\ninstead of running scripts in a separate context. Defaults to <code>false</code>.</p>\n</li>\n<li><p><code>ignoreUndefined</code> - if set to <code>true</code>, then the repl will not output the\nreturn value of command if it&#39;s <code>undefined</code>. Defaults to <code>false</code>.</p>\n</li>\n<li><p><code>writer</code> - the function to invoke for each command that gets evaluated which\nreturns the formatting (including coloring) to display. Defaults to\n<code>util.inspect</code>.</p>\n</li>\n</ul>\n<p>You can use your own <code>eval</code> function if it has following signature:\n\n</p>\n<pre><code>function eval(cmd, context, filename, callback) {\n  callback(null, result);\n}</code></pre>\n<p>Multiple REPLs may be started against the same running instance of node.  Each\nwill share the same global object but will have unique I/O.\n\n</p>\n<p>Here is an example that starts a REPL on stdin, a Unix socket, and a TCP socket:\n\n</p>\n<pre><code>var net = require(&quot;net&quot;),\n    repl = require(&quot;repl&quot;);\n\nconnections = 0;\n\nrepl.start({\n  prompt: &quot;node via stdin&gt; &quot;,\n  input: process.stdin,\n  output: process.stdout\n});\n\nnet.createServer(function (socket) {\n  connections += 1;\n  repl.start({\n    prompt: &quot;node via Unix socket&gt; &quot;,\n    input: socket,\n    output: socket\n  }).on(&#39;exit&#39;, function() {\n    socket.end();\n  })\n}).listen(&quot;/tmp/node-repl-sock&quot;);\n\nnet.createServer(function (socket) {\n  connections += 1;\n  repl.start({\n    prompt: &quot;node via TCP socket&gt; &quot;,\n    input: socket,\n    output: socket\n  }).on(&#39;exit&#39;, function() {\n    socket.end();\n  });\n}).listen(5001);</code></pre>\n<p>Running this program from the command line will start a REPL on stdin.  Other\nREPL clients may connect through the Unix socket or TCP socket. <code>telnet</code> is useful\nfor connecting to TCP sockets, and <code>socat</code> can be used to connect to both Unix and\nTCP sockets.\n\n</p>\n<p>By starting a REPL from a Unix socket-based server instead of stdin, you can\nconnect to a long-running node process without restarting it.\n\n</p>\n<p>For an example of running a &quot;full-featured&quot; (<code>terminal</code>) REPL over\na <code>net.Server</code> and <code>net.Socket</code> instance, see: <a href=\"https://gist.github.com/2209310\">https://gist.github.com/2209310</a>\n\n</p>\n<p>For an example of running a REPL instance over <code>curl(1)</code>,\nsee: <a href=\"https://gist.github.com/2053342\">https://gist.github.com/2053342</a>\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event: 'exit'",
              "type": "event",
              "name": "exit",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p>Emitted when the user exits the REPL in any of the defined ways. Namely, typing\n<code>.exit</code> at the repl, pressing Ctrl+C twice to signal SIGINT, or pressing Ctrl+D\nto signal &quot;end&quot; on the <code>input</code> stream.\n\n</p>\n<p>Example of listening for <code>exit</code>:\n\n</p>\n<pre><code>r.on(&#39;exit&#39;, function () {\n  console.log(&#39;Got &quot;exit&quot; event from repl!&#39;);\n  process.exit();\n});</code></pre>\n",
              "params": []
            }
          ],
          "signatures": [
            {
              "params": [
                {
                  "name": "options"
                }
              ]
            }
          ]
        }
      ],
      "miscs": [
        {
          "textRaw": "REPL Features",
          "name": "REPL Features",
          "type": "misc",
          "desc": "<p>Inside the REPL, Control+D will exit.  Multi-line expressions can be input.\nTab completion is supported for both global and local variables.\n\n</p>\n<p>The special variable <code>_</code> (underscore) contains the result of the last expression.\n\n</p>\n<pre><code>&gt; [ &quot;a&quot;, &quot;b&quot;, &quot;c&quot; ]\n[ &#39;a&#39;, &#39;b&#39;, &#39;c&#39; ]\n&gt; _.length\n3\n&gt; _ += 1\n4</code></pre>\n<p>The REPL provides access to any variables in the global scope. You can expose\na variable to the REPL explicitly by assigning it to the <code>context</code> object\nassociated with each <code>REPLServer</code>.  For example:\n\n</p>\n<pre><code>// repl_test.js\nvar repl = require(&quot;repl&quot;),\n    msg = &quot;message&quot;;\n\nrepl.start(&quot;&gt; &quot;).context.m = msg;</code></pre>\n<p>Things in the <code>context</code> object appear as local within the REPL:\n\n</p>\n<pre><code>mjr:~$ node repl_test.js\n&gt; m\n&#39;message&#39;</code></pre>\n<p>There are a few special REPL commands:\n\n</p>\n<ul>\n<li><code>.break</code> - While inputting a multi-line expression, sometimes you get lost\nor just don&#39;t care about completing it. <code>.break</code> will start over.</li>\n<li><code>.clear</code> - Resets the <code>context</code> object to an empty object and clears any\nmulti-line expression.</li>\n<li><code>.exit</code> - Close the I/O stream, which will cause the REPL to exit.</li>\n<li><code>.help</code> - Show this list of special commands.</li>\n<li><code>.save</code> - Save the current REPL session to a file<blockquote>\n<p>.save ./file/to/save.js</p>\n</blockquote>\n</li>\n<li><code>.load</code> - Load a file into the current REPL session.<blockquote>\n<p>.load ./file/to/load.js</p>\n</blockquote>\n</li>\n</ul>\n<p>The following key combinations in the REPL have these special effects:\n\n</p>\n<ul>\n<li><code>&lt;ctrl&gt;C</code> - Similar to the <code>.break</code> keyword.  Terminates the current\ncommand.  Press twice on a blank line to forcibly exit.</li>\n<li><code>&lt;ctrl&gt;D</code> - Similar to the <code>.exit</code> keyword.</li>\n</ul>\n"
        }
      ],
      "type": "module",
      "displayName": "REPL"
    },
    {
      "textRaw": "Executing JavaScript",
      "name": "vm",
      "stability": 2,
      "stabilityText": "Unstable. See Caveats, below.",
      "desc": "<p>You can access this module with:\n\n</p>\n<pre><code>var vm = require(&#39;vm&#39;);</code></pre>\n<p>JavaScript code can be compiled and run immediately or compiled, saved, and run later.\n\n</p>\n",
      "modules": [
        {
          "textRaw": "Caveats",
          "name": "caveats",
          "desc": "<p>The <code>vm</code> module has many known issues and edge cases. If you run into\nissues or unexpected behavior, please consult <a href=\"https://github.com/joyent/node/issues?labels=vm&amp;state=open\">the open issues on\nGitHub</a>.\nSome of the biggest problems are described below.\n\n</p>\n",
          "modules": [
            {
              "textRaw": "Sandboxes",
              "name": "sandboxes",
              "desc": "<p>The <code>sandbox</code> argument to <code>vm.runInNewContext</code> and <code>vm.createContext</code>,\nalong with the <code>initSandbox</code> argument to <code>vm.createContext</code>, do not\nbehave as one might normally expect and their behavior varies\nbetween different versions of Node.\n\n</p>\n<p>The key issue to be aware of is that V8 provides no way to directly\ncontrol the global object used within a context. As a result, while\nproperties of your <code>sandbox</code> object will be available in the context,\nany properties from the <code>prototype</code>s of the <code>sandbox</code> may not be\navailable. Furthermore, the <code>this</code> expression within the global scope\nof the context evaluates to the empty object (<code>{}</code>) instead of to\nyour sandbox.\n\n</p>\n<p>Your sandbox&#39;s properties are also not shared directly with the script.\nInstead, the properties of the sandbox are copied into the context at\nthe beginning of execution, and then after execution, the properties\nare copied back out in an attempt to propagate any changes.\n\n</p>\n",
              "type": "module",
              "displayName": "Sandboxes"
            },
            {
              "textRaw": "Globals",
              "name": "globals",
              "desc": "<p>Properties of the global object, like <code>Array</code> and <code>String</code>, have\ndifferent values inside of a context. This means that common\nexpressions like <code>[] instanceof Array</code> or\n<code>Object.getPrototypeOf([]) === Array.prototype</code> may not produce\nexpected results when used inside of scripts evaluated via the <code>vm</code> module.\n\n</p>\n<p>Some of these problems have known workarounds listed in the issues for\n<code>vm</code> on GitHub. for example, <code>Array.isArray</code> works around\nthe example problem with <code>Array</code>.\n\n</p>\n",
              "type": "module",
              "displayName": "Globals"
            }
          ],
          "type": "module",
          "displayName": "Caveats"
        }
      ],
      "methods": [
        {
          "textRaw": "vm.runInThisContext(code, [filename])",
          "type": "method",
          "name": "runInThisContext",
          "desc": "<p><code>vm.runInThisContext()</code> compiles <code>code</code>, runs it and returns the result. Running\ncode does not have access to local scope. <code>filename</code> is optional, it&#39;s used only\nin stack traces.\n\n</p>\n<p>Example of using <code>vm.runInThisContext</code> and <code>eval</code> to run the same code:\n\n</p>\n<pre><code>var localVar = 123,\n    usingscript, evaled,\n    vm = require(&#39;vm&#39;);\n\nusingscript = vm.runInThisContext(&#39;localVar = 1;&#39;,\n  &#39;myfile.vm&#39;);\nconsole.log(&#39;localVar: &#39; + localVar + &#39;, usingscript: &#39; +\n  usingscript);\nevaled = eval(&#39;localVar = 1;&#39;);\nconsole.log(&#39;localVar: &#39; + localVar + &#39;, evaled: &#39; +\n  evaled);\n\n// localVar: 123, usingscript: 1\n// localVar: 1, evaled: 1</code></pre>\n<p><code>vm.runInThisContext</code> does not have access to the local scope, so <code>localVar</code> is unchanged.\n<code>eval</code> does have access to the local scope, so <code>localVar</code> is changed.\n\n</p>\n<p>In case of syntax error in <code>code</code>, <code>vm.runInThisContext</code> emits the syntax error to stderr\nand throws an exception.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "code"
                },
                {
                  "name": "filename",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "vm.runInNewContext(code, [sandbox], [filename])",
          "type": "method",
          "name": "runInNewContext",
          "desc": "<p><code>vm.runInNewContext</code> compiles <code>code</code>, then runs it in <code>sandbox</code> and returns the\nresult. Running code does not have access to local scope. The object <code>sandbox</code>\nwill be used as the global object for <code>code</code>.\n<code>sandbox</code> and <code>filename</code> are optional, <code>filename</code> is only used in stack traces.\n\n</p>\n<p>Example: compile and execute code that increments a global variable and sets a new one.\nThese globals are contained in the sandbox.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;),\n    vm = require(&#39;vm&#39;),\n    sandbox = {\n      animal: &#39;cat&#39;,\n      count: 2\n    };\n\nvm.runInNewContext(&#39;count += 1; name = &quot;kitty&quot;&#39;, sandbox, &#39;myfile.vm&#39;);\nconsole.log(util.inspect(sandbox));\n\n// { animal: &#39;cat&#39;, count: 3, name: &#39;kitty&#39; }</code></pre>\n<p>Note that running untrusted code is a tricky business requiring great care.  To prevent accidental\nglobal variable leakage, <code>vm.runInNewContext</code> is quite useful, but safely running untrusted code\nrequires a separate process.\n\n</p>\n<p>In case of syntax error in <code>code</code>, <code>vm.runInNewContext</code> emits the syntax error to stderr\nand throws an exception.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "code"
                },
                {
                  "name": "sandbox",
                  "optional": true
                },
                {
                  "name": "filename",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "vm.runInContext(code, context, [filename])",
          "type": "method",
          "name": "runInContext",
          "desc": "<p><code>vm.runInContext</code> compiles <code>code</code>, then runs it in <code>context</code> and returns the\nresult. A (V8) context comprises a global object, together with a set of\nbuilt-in objects and functions. Running code does not have access to local scope\nand the global object held within <code>context</code> will be used as the global object\nfor <code>code</code>.\n<code>filename</code> is optional, it&#39;s used only in stack traces.\n\n</p>\n<p>Example: compile and execute code in a existing context.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;),\n    vm = require(&#39;vm&#39;),\n    initSandbox = {\n      animal: &#39;cat&#39;,\n      count: 2\n    },\n    context = vm.createContext(initSandbox);\n\nvm.runInContext(&#39;count += 1; name = &quot;CATT&quot;&#39;, context, &#39;myfile.vm&#39;);\nconsole.log(util.inspect(context));\n\n// { animal: &#39;cat&#39;, count: 3, name: &#39;CATT&#39; }</code></pre>\n<p>Note that <code>createContext</code> will perform a shallow clone of the supplied sandbox object in order to\ninitialize the global object of the freshly constructed context.\n\n</p>\n<p>Note that running untrusted code is a tricky business requiring great care.  To prevent accidental\nglobal variable leakage, <code>vm.runInContext</code> is quite useful, but safely running untrusted code\nrequires a separate process.\n\n</p>\n<p>In case of syntax error in <code>code</code>, <code>vm.runInContext</code> emits the syntax error to stderr\nand throws an exception.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "code"
                },
                {
                  "name": "context"
                },
                {
                  "name": "filename",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "vm.createContext([initSandbox])",
          "type": "method",
          "name": "createContext",
          "desc": "<p><code>vm.createContext</code> creates a new context which is suitable for use as the 2nd argument of a subsequent\ncall to <code>vm.runInContext</code>. A (V8) context comprises a global object together with a set of\nbuild-in objects and functions. The optional argument <code>initSandbox</code> will be shallow-copied\nto seed the initial contents of the global object used by the context.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "initSandbox",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "vm.createScript(code, [filename])",
          "type": "method",
          "name": "createScript",
          "desc": "<p><code>createScript</code> compiles <code>code</code> but does not run it. Instead, it returns a\n<code>vm.Script</code> object representing this compiled code. This script can be run\nlater many times using methods below. The returned script is not bound to any\nglobal object. It is bound before each run, just for that run. <code>filename</code> is\noptional, it&#39;s only used in stack traces.\n\n</p>\n<p>In case of syntax error in <code>code</code>, <code>createScript</code> prints the syntax error to stderr\nand throws an exception.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "code"
                },
                {
                  "name": "filename",
                  "optional": true
                }
              ]
            }
          ]
        }
      ],
      "classes": [
        {
          "textRaw": "Class: Script",
          "type": "class",
          "name": "Script",
          "desc": "<p>A class for running scripts.  Returned by vm.createScript.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "script.runInThisContext()",
              "type": "method",
              "name": "runInThisContext",
              "desc": "<p>Similar to <code>vm.runInThisContext</code> but a method of a precompiled <code>Script</code> object.\n<code>script.runInThisContext</code> runs the code of <code>script</code> and returns the result.\nRunning code does not have access to local scope, but does have access to the <code>global</code> object\n(v8: in actual context).\n\n</p>\n<p>Example of using <code>script.runInThisContext</code> to compile code once and run it multiple times:\n\n</p>\n<pre><code>var vm = require(&#39;vm&#39;);\n\nglobalVar = 0;\n\nvar script = vm.createScript(&#39;globalVar += 1&#39;, &#39;myfile.vm&#39;);\n\nfor (var i = 0; i &lt; 1000 ; i += 1) {\n  script.runInThisContext();\n}\n\nconsole.log(globalVar);\n\n// 1000</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            },
            {
              "textRaw": "script.runInNewContext([sandbox])",
              "type": "method",
              "name": "runInNewContext",
              "desc": "<p>Similar to <code>vm.runInNewContext</code> a method of a precompiled <code>Script</code> object.\n<code>script.runInNewContext</code> runs the code of <code>script</code> with <code>sandbox</code> as the global object and returns the result.\nRunning code does not have access to local scope. <code>sandbox</code> is optional.\n\n</p>\n<p>Example: compile code that increments a global variable and sets one, then execute this code multiple times.\nThese globals are contained in the sandbox.\n\n</p>\n<pre><code>var util = require(&#39;util&#39;),\n    vm = require(&#39;vm&#39;),\n    sandbox = {\n      animal: &#39;cat&#39;,\n      count: 2\n    };\n\nvar script = vm.createScript(&#39;count += 1; name = &quot;kitty&quot;&#39;, &#39;myfile.vm&#39;);\n\nfor (var i = 0; i &lt; 10 ; i += 1) {\n  script.runInNewContext(sandbox);\n}\n\nconsole.log(util.inspect(sandbox));\n\n// { animal: &#39;cat&#39;, count: 12, name: &#39;kitty&#39; }</code></pre>\n<p>Note that running untrusted code is a tricky business requiring great care.  To prevent accidental\nglobal variable leakage, <code>script.runInNewContext</code> is quite useful, but safely running untrusted code\nrequires a separate process.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "sandbox",
                      "optional": true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "vm"
    },
    {
      "textRaw": "Child Process",
      "name": "child_process",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>Node provides a tri-directional <code>popen(3)</code> facility through the\n<code>child_process</code> module.\n\n</p>\n<p>It is possible to stream data through a child&#39;s <code>stdin</code>, <code>stdout</code>, and\n<code>stderr</code> in a fully non-blocking way.  (Note that some programs use\nline-buffered I/O internally.  That doesn&#39;t affect node.js but it means\ndata you send to the child process is not immediately consumed.)\n\n</p>\n<p>To create a child process use <code>require(&#39;child_process&#39;).spawn()</code> or\n<code>require(&#39;child_process&#39;).fork()</code>.  The semantics of each are slightly\ndifferent, and explained below.\n\n</p>\n",
      "classes": [
        {
          "textRaw": "Class: ChildProcess",
          "type": "class",
          "name": "ChildProcess",
          "desc": "<p><code>ChildProcess</code> is an [EventEmitter][].\n\n</p>\n<p>Child processes always have three streams associated with them. <code>child.stdin</code>,\n<code>child.stdout</code>, and <code>child.stderr</code>.  These may be shared with the stdio\nstreams of the parent process, or they may be separate stream objects\nwhich can be piped to and from.\n\n</p>\n<p>The ChildProcess class is not intended to be used directly.  Use the\n<code>spawn()</code> or <code>fork()</code> methods to create a Child Process instance.\n\n</p>\n",
          "events": [
            {
              "textRaw": "Event:  'error'",
              "type": "event",
              "name": "error",
              "params": [],
              "desc": "<p>Emitted when:\n\n</p>\n<ol>\n<li>The process could not be spawned, or</li>\n<li>The process could not be killed, or</li>\n<li>Sending a message to the child process failed for whatever reason.</li>\n</ol>\n<p>Note that the <code>exit</code>-event may or may not fire after an error has occured. If\nyou are listening on both events to fire a function, remember to guard against\ncalling your function twice.\n\n</p>\n<p>See also <a href=\"#child_process_child_kill_signal\"><code>ChildProcess#kill()</code></a> and\n<a href=\"#child_process_child_send_message_sendhandle\"><code>ChildProcess#send()</code></a>.\n\n</p>\n"
            },
            {
              "textRaw": "Event:  'exit'",
              "type": "event",
              "name": "exit",
              "params": [],
              "desc": "<p>This event is emitted after the child process ends. If the process terminated\nnormally, <code>code</code> is the final exit code of the process, otherwise <code>null</code>. If\nthe process terminated due to receipt of a signal, <code>signal</code> is the string name\nof the signal, otherwise <code>null</code>.\n\n</p>\n<p>Note that the child process stdio streams might still be open.\n\n</p>\n<p>Also, note that node establishes signal handlers for <code>&#39;SIGINT&#39;</code> and <code>&#39;SIGTERM</code>&#39;,\nso it will not terminate due to receipt of those signals, it will exit.\n\n</p>\n<p>See <code>waitpid(2)</code>.\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'close'",
              "type": "event",
              "name": "close",
              "params": [],
              "desc": "<p>This event is emitted when the stdio streams of a child process have all\nterminated.  This is distinct from &#39;exit&#39;, since multiple processes\nmight share the same stdio streams.\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'disconnect'",
              "type": "event",
              "name": "disconnect",
              "desc": "<p>This event is emitted after calling the <code>.disconnect()</code> method in the parent\nor in the child. After disconnecting it is no longer possible to send messages,\nand the <code>.connected</code> property is false.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'message'",
              "type": "event",
              "name": "message",
              "params": [],
              "desc": "<p>Messages send by <code>.send(message, [sendHandle])</code> are obtained using the\n<code>message</code> event.\n\n</p>\n"
            }
          ],
          "properties": [
            {
              "textRaw": "`stdin` {Stream object} ",
              "name": "stdin",
              "desc": "<p>A <code>Writable Stream</code> that represents the child process&#39;s <code>stdin</code>.\nClosing this stream via <code>end()</code> often causes the child process to terminate.\n\n</p>\n<p>If the child stdio streams are shared with the parent, then this will\nnot be set.\n\n</p>\n"
            },
            {
              "textRaw": "`stdout` {Stream object} ",
              "name": "stdout",
              "desc": "<p>A <code>Readable Stream</code> that represents the child process&#39;s <code>stdout</code>.\n\n</p>\n<p>If the child stdio streams are shared with the parent, then this will\nnot be set.\n\n</p>\n"
            },
            {
              "textRaw": "`stderr` {Stream object} ",
              "name": "stderr",
              "desc": "<p>A <code>Readable Stream</code> that represents the child process&#39;s <code>stderr</code>.\n\n</p>\n<p>If the child stdio streams are shared with the parent, then this will\nnot be set.\n\n</p>\n"
            },
            {
              "textRaw": "`pid` {Integer} ",
              "name": "pid",
              "desc": "<p>The PID of the child process.\n\n</p>\n<p>Example:\n\n</p>\n<pre><code>var spawn = require(&#39;child_process&#39;).spawn,\n    grep  = spawn(&#39;grep&#39;, [&#39;ssh&#39;]);\n\nconsole.log(&#39;Spawned child pid: &#39; + grep.pid);\ngrep.stdin.end();</code></pre>\n"
            },
            {
              "textRaw": "`connected` {Boolean} Set to false after `.disconnect' is called ",
              "name": "connected",
              "desc": "<p>If <code>.connected</code> is false, it is no longer possible to send messages.\n\n</p>\n",
              "shortDesc": "Set to false after `.disconnect' is called"
            }
          ],
          "methods": [
            {
              "textRaw": "child.kill([signal])",
              "type": "method",
              "name": "kill",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`signal` {String} ",
                      "name": "signal",
                      "type": "String",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "signal",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>Send a signal to the child process. If no argument is given, the process will\nbe sent <code>&#39;SIGTERM&#39;</code>. See <code>signal(7)</code> for a list of available signals.\n\n</p>\n<pre><code>var spawn = require(&#39;child_process&#39;).spawn,\n    grep  = spawn(&#39;grep&#39;, [&#39;ssh&#39;]);\n\ngrep.on(&#39;close&#39;, function (code, signal) {\n  console.log(&#39;child process terminated due to receipt of signal &#39;+signal);\n});\n\n// send SIGHUP to process\ngrep.kill(&#39;SIGHUP&#39;);</code></pre>\n<p>May emit an <code>&#39;error&#39;</code> event when the signal cannot be delivered. Sending a\nsignal to a child process that has already exited is not an error but may\nhave unforeseen consequences: if the PID (the process ID) has been reassigned\nto another process, the signal will be delivered to that process instead.\nWhat happens next is anyone&#39;s guess.\n\n</p>\n<p>Note that while the function is called <code>kill</code>, the signal delivered to the\nchild process may not actually kill it.  <code>kill</code> really just sends a signal\nto a process.\n\n</p>\n<p>See <code>kill(2)</code>\n\n</p>\n"
            },
            {
              "textRaw": "child.send(message, [sendHandle])",
              "type": "method",
              "name": "send",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`message` {Object} ",
                      "name": "message",
                      "type": "Object"
                    },
                    {
                      "textRaw": "`sendHandle` {Handle object} ",
                      "name": "sendHandle",
                      "type": "Handle object",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "message"
                    },
                    {
                      "name": "sendHandle",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>When using <code>child_process.fork()</code> you can write to the child using\n<code>child.send(message, [sendHandle])</code> and messages are received by\na <code>&#39;message&#39;</code> event on the child.\n\n</p>\n<p>For example:\n\n</p>\n<pre><code>var cp = require(&#39;child_process&#39;);\n\nvar n = cp.fork(__dirname + &#39;/sub.js&#39;);\n\nn.on(&#39;message&#39;, function(m) {\n  console.log(&#39;PARENT got message:&#39;, m);\n});\n\nn.send({ hello: &#39;world&#39; });</code></pre>\n<p>And then the child script, <code>&#39;sub.js&#39;</code> might look like this:\n\n</p>\n<pre><code>process.on(&#39;message&#39;, function(m) {\n  console.log(&#39;CHILD got message:&#39;, m);\n});\n\nprocess.send({ foo: &#39;bar&#39; });</code></pre>\n<p>In the child the <code>process</code> object will have a <code>send()</code> method, and <code>process</code>\nwill emit objects each time it receives a message on its channel.\n\n</p>\n<p>Please note that the <code>send()</code> method on both the parent and child are\nsynchronous - sending large chunks of data is not advised (pipes can be used\ninstead, see\n<a href=\"#child_process_child_process_spawn_command_args_options\"><code>child_process.spawn</code></a>).\n\n</p>\n<p>There is a special case when sending a <code>{cmd: &#39;NODE_foo&#39;}</code> message. All messages\ncontaining a <code>NODE_</code> prefix in its <code>cmd</code> property will not be emitted in\nthe <code>message</code> event, since they are internal messages used by node core.\nMessages containing the prefix are emitted in the <code>internalMessage</code> event, you\nshould by all means avoid using this feature, it is subject to change without notice.\n\n</p>\n<p>The <code>sendHandle</code> option to <code>child.send()</code> is for sending a TCP server or\nsocket object to another process. The child will receive the object as its\nsecond argument to the <code>message</code> event.\n\n</p>\n<p>Emits an <code>&#39;error&#39;</code> event if the message cannot be sent, for example because\nthe child process has already exited.\n\n</p>\n<h4>Example: sending server object</h4>\n<p>Here is an example of sending a server:\n\n</p>\n<pre><code>var child = require(&#39;child_process&#39;).fork(&#39;child.js&#39;);\n\n// Open up the server object and send the handle.\nvar server = require(&#39;net&#39;).createServer();\nserver.on(&#39;connection&#39;, function (socket) {\n  socket.end(&#39;handled by parent&#39;);\n});\nserver.listen(1337, function() {\n  child.send(&#39;server&#39;, server);\n});</code></pre>\n<p>And the child would the receive the server object as:\n\n</p>\n<pre><code>process.on(&#39;message&#39;, function(m, server) {\n  if (m === &#39;server&#39;) {\n    server.on(&#39;connection&#39;, function (socket) {\n      socket.end(&#39;handled by child&#39;);\n    });\n  }\n});</code></pre>\n<p>Note that the server is now shared between the parent and child, this means\nthat some connections will be handled by the parent and some by the child.\n\n</p>\n<p>For <code>dgram</code> servers the workflow is exactly the same.  Here you listen on\na <code>message</code> event instead of <code>connection</code> and use <code>server.bind</code> instead of\n<code>server.listen</code>.  (Currently only supported on UNIX platforms.)\n\n</p>\n<h4>Example: sending socket object</h4>\n<p>Here is an example of sending a socket. It will spawn two children and handle\nconnections with the remote address <code>74.125.127.100</code> as VIP by sending the\nsocket to a &quot;special&quot; child process. Other sockets will go to a &quot;normal&quot; process.\n\n</p>\n<pre><code>var normal = require(&#39;child_process&#39;).fork(&#39;child.js&#39;, [&#39;normal&#39;]);\nvar special = require(&#39;child_process&#39;).fork(&#39;child.js&#39;, [&#39;special&#39;]);\n\n// Open up the server and send sockets to child\nvar server = require(&#39;net&#39;).createServer();\nserver.on(&#39;connection&#39;, function (socket) {\n\n  // if this is a VIP\n  if (socket.remoteAddress === &#39;74.125.127.100&#39;) {\n    special.send(&#39;socket&#39;, socket);\n    return;\n  }\n  // just the usual dudes\n  normal.send(&#39;socket&#39;, socket);\n});\nserver.listen(1337);</code></pre>\n<p>The <code>child.js</code> could look like this:\n\n</p>\n<pre><code>process.on(&#39;message&#39;, function(m, socket) {\n  if (m === &#39;socket&#39;) {\n    socket.end(&#39;You were handled as a &#39; + process.argv[2] + &#39; person&#39;);\n  }\n});</code></pre>\n<p>Note that once a single socket has been sent to a child the parent can no\nlonger keep track of when the socket is destroyed. To indicate this condition\nthe <code>.connections</code> property becomes <code>null</code>.\nIt is also recommended not to use <code>.maxConnections</code> in this condition.\n\n</p>\n"
            },
            {
              "textRaw": "child.disconnect()",
              "type": "method",
              "name": "disconnect",
              "desc": "<p>Close the IPC channel between parent and child, allowing the child to exit\ngracefully once there are no other connections keeping it alive. After calling\nthis method the <code>.connected</code> flag will be set to <code>false</code> in both the parent and\nchild, and it is no longer possible to send messages.\n\n</p>\n<p>The &#39;disconnect&#39; event will be emitted when there are no messages in the process\nof being received, most likely immediately.\n\n</p>\n<p>Note that you can also call <code>process.disconnect()</code> in the child process when the\nchild process has any open IPC channels with the parent (i.e <code>fork()</code>).\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ]
        }
      ],
      "methods": [
        {
          "textRaw": "child_process.spawn(command, [args], [options])",
          "type": "method",
          "name": "spawn",
          "signatures": [
            {
              "return": {
                "textRaw": "return: {ChildProcess object} ",
                "name": "return",
                "type": "ChildProcess object"
              },
              "params": [
                {
                  "textRaw": "`command` {String} The command to run ",
                  "name": "command",
                  "type": "String",
                  "desc": "The command to run"
                },
                {
                  "textRaw": "`args` {Array} List of string arguments ",
                  "name": "args",
                  "type": "Array",
                  "desc": "List of string arguments",
                  "optional": true
                },
                {
                  "textRaw": "`options` {Object} ",
                  "options": [
                    {
                      "textRaw": "`cwd` {String} Current working directory of the child process ",
                      "name": "cwd",
                      "type": "String",
                      "desc": "Current working directory of the child process"
                    },
                    {
                      "textRaw": "`stdio` {Array|String} Child's stdio configuration. (See below) ",
                      "name": "stdio",
                      "type": "Array|String",
                      "desc": "Child's stdio configuration. (See below)"
                    },
                    {
                      "textRaw": "`customFds` {Array} **Deprecated** File descriptors for the child to use for stdio.  (See below) ",
                      "name": "customFds",
                      "type": "Array",
                      "desc": "**Deprecated** File descriptors for the child to use for stdio.  (See below)"
                    },
                    {
                      "textRaw": "`env` {Object} Environment key-value pairs ",
                      "name": "env",
                      "type": "Object",
                      "desc": "Environment key-value pairs"
                    },
                    {
                      "textRaw": "`detached` {Boolean} The child will be a process group leader.  (See below) ",
                      "name": "detached",
                      "type": "Boolean",
                      "desc": "The child will be a process group leader.  (See below)"
                    },
                    {
                      "textRaw": "`uid` {Number} Sets the user identity of the process. (See setuid(2).) ",
                      "name": "uid",
                      "type": "Number",
                      "desc": "Sets the user identity of the process. (See setuid(2).)"
                    },
                    {
                      "textRaw": "`gid` {Number} Sets the group identity of the process. (See setgid(2).) ",
                      "name": "gid",
                      "type": "Number",
                      "desc": "Sets the group identity of the process. (See setgid(2).)"
                    }
                  ],
                  "name": "options",
                  "type": "Object",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "command"
                },
                {
                  "name": "args",
                  "optional": true
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ],
          "desc": "<p>Launches a new process with the given <code>command</code>, with  command line arguments in <code>args</code>.\nIf omitted, <code>args</code> defaults to an empty Array.\n\n</p>\n<p>The third argument is used to specify additional options, which defaults to:\n\n</p>\n<pre><code>{ cwd: undefined,\n  env: process.env\n}</code></pre>\n<p><code>cwd</code> allows you to specify the working directory from which the process is spawned.\nUse <code>env</code> to specify environment variables that will be visible to the new process.\n\n</p>\n<p>Example of running <code>ls -lh /usr</code>, capturing <code>stdout</code>, <code>stderr</code>, and the exit code:\n\n</p>\n<pre><code>var spawn = require(&#39;child_process&#39;).spawn,\n    ls    = spawn(&#39;ls&#39;, [&#39;-lh&#39;, &#39;/usr&#39;]);\n\nls.stdout.on(&#39;data&#39;, function (data) {\n  console.log(&#39;stdout: &#39; + data);\n});\n\nls.stderr.on(&#39;data&#39;, function (data) {\n  console.log(&#39;stderr: &#39; + data);\n});\n\nls.on(&#39;close&#39;, function (code) {\n  console.log(&#39;child process exited with code &#39; + code);\n});</code></pre>\n<p>Example: A very elaborate way to run &#39;ps ax | grep ssh&#39;\n\n</p>\n<pre><code>var spawn = require(&#39;child_process&#39;).spawn,\n    ps    = spawn(&#39;ps&#39;, [&#39;ax&#39;]),\n    grep  = spawn(&#39;grep&#39;, [&#39;ssh&#39;]);\n\nps.stdout.on(&#39;data&#39;, function (data) {\n  grep.stdin.write(data);\n});\n\nps.stderr.on(&#39;data&#39;, function (data) {\n  console.log(&#39;ps stderr: &#39; + data);\n});\n\nps.on(&#39;close&#39;, function (code) {\n  if (code !== 0) {\n    console.log(&#39;ps process exited with code &#39; + code);\n  }\n  grep.stdin.end();\n});\n\ngrep.stdout.on(&#39;data&#39;, function (data) {\n  console.log(&#39;&#39; + data);\n});\n\ngrep.stderr.on(&#39;data&#39;, function (data) {\n  console.log(&#39;grep stderr: &#39; + data);\n});\n\ngrep.on(&#39;close&#39;, function (code) {\n  if (code !== 0) {\n    console.log(&#39;grep process exited with code &#39; + code);\n  }\n});</code></pre>\n<p>Example of checking for failed exec:\n\n</p>\n<pre><code>var spawn = require(&#39;child_process&#39;).spawn,\n    child = spawn(&#39;bad_command&#39;);\n\nchild.stderr.setEncoding(&#39;utf8&#39;);\nchild.stderr.on(&#39;data&#39;, function (data) {\n  if (/^execvp\\(\\)/.test(data)) {\n    console.log(&#39;Failed to start child process.&#39;);\n  }\n});</code></pre>\n<p>Note that if spawn receives an empty options object, it will result in\nspawning the process with an empty environment rather than using\n<code>process.env</code>. This due to backwards compatibility issues with a deprecated\nAPI.\n\n</p>\n<p>The &#39;stdio&#39; option to <code>child_process.spawn()</code> is an array where each\nindex corresponds to a fd in the child.  The value is one of the following:\n\n</p>\n<ol>\n<li><code>&#39;pipe&#39;</code> - Create a pipe between the child process and the parent process.\nThe parent end of the pipe is exposed to the parent as a property on the\n<code>child_process</code> object as <code>ChildProcess.stdio[fd]</code>. Pipes created for\nfds 0 - 2 are also available as ChildProcess.stdin, ChildProcess.stdout\nand ChildProcess.stderr, respectively.</li>\n<li><code>&#39;ipc&#39;</code> - Create an IPC channel for passing messages/file descriptors\nbetween parent and child. A ChildProcess may have at most <em>one</em> IPC stdio\nfile descriptor. Setting this option enables the ChildProcess.send() method.\nIf the child writes JSON messages to this file descriptor, then this will\ntrigger ChildProcess.on(&#39;message&#39;).  If the child is a Node.js program, then\nthe presence of an IPC channel will enable process.send() and\nprocess.on(&#39;message&#39;).</li>\n<li><code>&#39;ignore&#39;</code> - Do not set this file descriptor in the child. Note that Node\nwill always open fd 0 - 2 for the processes it spawns. When any of these is\nignored node will open <code>/dev/null</code> and attach it to the child&#39;s fd.</li>\n<li><code>Stream</code> object - Share a readable or writable stream that refers to a tty,\nfile, socket, or a pipe with the child process. The stream&#39;s underlying\nfile descriptor is duplicated in the child process to the fd that \ncorresponds to the index in the <code>stdio</code> array. Note that the stream must\nhave an underlying descriptor (file streams do not until the <code>&#39;open&#39;</code>\nevent has occurred).</li>\n<li>Positive integer - The integer value is interpreted as a file descriptor \nthat is is currently open in the parent process. It is shared with the child\nprocess, similar to how <code>Stream</code> objects can be shared.</li>\n<li><code>null</code>, <code>undefined</code> - Use default value. For stdio fds 0, 1 and 2 (in other\nwords, stdin, stdout, and stderr) a pipe is created. For fd 3 and up, the\ndefault is <code>&#39;ignore&#39;</code>.</li>\n</ol>\n<p>As a shorthand, the <code>stdio</code> argument may also be one of the following\nstrings, rather than an array:\n\n</p>\n<ul>\n<li><code>ignore</code> - <code>[&#39;ignore&#39;, &#39;ignore&#39;, &#39;ignore&#39;]</code></li>\n<li><code>pipe</code> - <code>[&#39;pipe&#39;, &#39;pipe&#39;, &#39;pipe&#39;]</code></li>\n<li><code>inherit</code> - <code>[process.stdin, process.stdout, process.stderr]</code> or <code>[0,1,2]</code></li>\n</ul>\n<p>Example:\n\n</p>\n<pre><code>var spawn = require(&#39;child_process&#39;).spawn;\n\n// Child will use parent&#39;s stdios\nspawn(&#39;prg&#39;, [], { stdio: &#39;inherit&#39; });\n\n// Spawn child sharing only stderr\nspawn(&#39;prg&#39;, [], { stdio: [&#39;pipe&#39;, &#39;pipe&#39;, process.stderr] });\n\n// Open an extra fd=4, to interact with programs present a\n// startd-style interface.\nspawn(&#39;prg&#39;, [], { stdio: [&#39;pipe&#39;, null, null, null, &#39;pipe&#39;] });</code></pre>\n<p>If the <code>detached</code> option is set, the child process will be made the leader of a\nnew process group.  This makes it possible for the child to continue running \nafter the parent exits.\n\n</p>\n<p>By default, the parent will wait for the detached child to exit.  To prevent\nthe parent from waiting for a given <code>child</code>, use the <code>child.unref()</code> method,\nand the parent&#39;s event loop will not include the child in its reference count.\n\n</p>\n<p>Example of detaching a long-running process and redirecting its output to a\nfile:\n\n</p>\n<pre><code> var fs = require(&#39;fs&#39;),\n     spawn = require(&#39;child_process&#39;).spawn,\n     out = fs.openSync(&#39;./out.log&#39;, &#39;a&#39;),\n     err = fs.openSync(&#39;./out.log&#39;, &#39;a&#39;);\n\n var child = spawn(&#39;prg&#39;, [], {\n   detached: true,\n   stdio: [ &#39;ignore&#39;, out, err ]\n });\n\n child.unref();</code></pre>\n<p>When using the <code>detached</code> option to start a long-running process, the process\nwill not stay running in the background unless it is provided with a <code>stdio</code>\nconfiguration that is not connected to the parent.  If the parent&#39;s <code>stdio</code> is\ninherited, the child will remain attached to the controlling terminal.\n\n</p>\n<p>There is a deprecated option called <code>customFds</code> which allows one to specify\nspecific file descriptors for the stdio of the child process. This API was\nnot portable to all platforms and therefore removed.\nWith <code>customFds</code> it was possible to hook up the new process&#39; <code>[stdin, stdout,\nstderr]</code> to existing streams; <code>-1</code> meant that a new stream should be created.\nUse at your own risk.\n\n</p>\n<p>See also: <code>child_process.exec()</code> and <code>child_process.fork()</code>\n\n</p>\n"
        },
        {
          "textRaw": "child_process.exec(command, [options], callback)",
          "type": "method",
          "name": "exec",
          "signatures": [
            {
              "return": {
                "textRaw": "Return: ChildProcess object ",
                "name": "return",
                "desc": "ChildProcess object"
              },
              "params": [
                {
                  "textRaw": "`command` {String} The command to run, with space-separated arguments ",
                  "name": "command",
                  "type": "String",
                  "desc": "The command to run, with space-separated arguments"
                },
                {
                  "textRaw": "`options` {Object} ",
                  "options": [
                    {
                      "textRaw": "`cwd` {String} Current working directory of the child process ",
                      "name": "cwd",
                      "type": "String",
                      "desc": "Current working directory of the child process"
                    },
                    {
                      "textRaw": "`env` {Object} Environment key-value pairs ",
                      "name": "env",
                      "type": "Object",
                      "desc": "Environment key-value pairs"
                    },
                    {
                      "textRaw": "`encoding` {String} (Default: 'utf8') ",
                      "name": "encoding",
                      "default": "utf8",
                      "type": "String"
                    },
                    {
                      "textRaw": "`timeout` {Number} (Default: 0) ",
                      "name": "timeout",
                      "default": "0",
                      "type": "Number"
                    },
                    {
                      "textRaw": "`maxBuffer` {Number} (Default: `200*1024`) ",
                      "name": "maxBuffer",
                      "default": "200*1024",
                      "type": "Number"
                    },
                    {
                      "textRaw": "`killSignal` {String} (Default: 'SIGTERM') ",
                      "name": "killSignal",
                      "default": "SIGTERM",
                      "type": "String"
                    }
                  ],
                  "name": "options",
                  "type": "Object",
                  "optional": true
                },
                {
                  "textRaw": "`callback` {Function} called with the output when process terminates ",
                  "options": [
                    {
                      "textRaw": "`error` {Error} ",
                      "name": "error",
                      "type": "Error"
                    },
                    {
                      "textRaw": "`stdout` {Buffer} ",
                      "name": "stdout",
                      "type": "Buffer"
                    },
                    {
                      "textRaw": "`stderr` {Buffer} ",
                      "name": "stderr",
                      "type": "Buffer"
                    }
                  ],
                  "name": "callback",
                  "type": "Function",
                  "desc": "called with the output when process terminates"
                }
              ]
            },
            {
              "params": [
                {
                  "name": "command"
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "callback"
                }
              ]
            }
          ],
          "desc": "<p>Runs a command in a shell and buffers the output.\n\n</p>\n<pre><code>var exec = require(&#39;child_process&#39;).exec,\n    child;\n\nchild = exec(&#39;cat *.js bad_file | wc -l&#39;,\n  function (error, stdout, stderr) {\n    console.log(&#39;stdout: &#39; + stdout);\n    console.log(&#39;stderr: &#39; + stderr);\n    if (error !== null) {\n      console.log(&#39;exec error: &#39; + error);\n    }\n});</code></pre>\n<p>The callback gets the arguments <code>(error, stdout, stderr)</code>. On success, <code>error</code>\nwill be <code>null</code>.  On error, <code>error</code> will be an instance of <code>Error</code> and <code>error.code</code>\nwill be the exit code of the child process, and <code>error.signal</code> will be set to the\nsignal that terminated the process.\n\n</p>\n<p>There is a second optional argument to specify several options. The\ndefault options are\n\n</p>\n<pre><code>{ encoding: &#39;utf8&#39;,\n  timeout: 0,\n  maxBuffer: 200*1024,\n  killSignal: &#39;SIGTERM&#39;,\n  cwd: null,\n  env: null }</code></pre>\n<p>If <code>timeout</code> is greater than 0, then it will kill the child process\nif it runs longer than <code>timeout</code> milliseconds. The child process is killed with\n<code>killSignal</code> (default: <code>&#39;SIGTERM&#39;</code>). <code>maxBuffer</code> specifies the largest\namount of data allowed on stdout or stderr - if this value is exceeded then\nthe child process is killed.\n\n\n</p>\n"
        },
        {
          "textRaw": "child_process.execFile(file, [args], [options], [callback])",
          "type": "method",
          "name": "execFile",
          "signatures": [
            {
              "return": {
                "textRaw": "Return: ChildProcess object ",
                "name": "return",
                "desc": "ChildProcess object"
              },
              "params": [
                {
                  "textRaw": "`file` {String} The filename of the program to run ",
                  "name": "file",
                  "type": "String",
                  "desc": "The filename of the program to run"
                },
                {
                  "textRaw": "`args` {Array} List of string arguments ",
                  "name": "args",
                  "type": "Array",
                  "desc": "List of string arguments",
                  "optional": true
                },
                {
                  "textRaw": "`options` {Object} ",
                  "options": [
                    {
                      "textRaw": "`cwd` {String} Current working directory of the child process ",
                      "name": "cwd",
                      "type": "String",
                      "desc": "Current working directory of the child process"
                    },
                    {
                      "textRaw": "`env` {Object} Environment key-value pairs ",
                      "name": "env",
                      "type": "Object",
                      "desc": "Environment key-value pairs"
                    },
                    {
                      "textRaw": "`encoding` {String} (Default: 'utf8') ",
                      "name": "encoding",
                      "default": "utf8",
                      "type": "String"
                    },
                    {
                      "textRaw": "`timeout` {Number} (Default: 0) ",
                      "name": "timeout",
                      "default": "0",
                      "type": "Number"
                    },
                    {
                      "textRaw": "`maxBuffer` {Number} (Default: 200\\*1024) ",
                      "name": "maxBuffer",
                      "default": "200\\*1024",
                      "type": "Number"
                    },
                    {
                      "textRaw": "`killSignal` {String} (Default: 'SIGTERM') ",
                      "name": "killSignal",
                      "default": "SIGTERM",
                      "type": "String"
                    }
                  ],
                  "name": "options",
                  "type": "Object",
                  "optional": true
                },
                {
                  "textRaw": "`callback` {Function} called with the output when process terminates ",
                  "options": [
                    {
                      "textRaw": "`error` {Error} ",
                      "name": "error",
                      "type": "Error"
                    },
                    {
                      "textRaw": "`stdout` {Buffer} ",
                      "name": "stdout",
                      "type": "Buffer"
                    },
                    {
                      "textRaw": "`stderr` {Buffer} ",
                      "name": "stderr",
                      "type": "Buffer"
                    }
                  ],
                  "name": "callback",
                  "type": "Function",
                  "desc": "called with the output when process terminates",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "file"
                },
                {
                  "name": "args",
                  "optional": true
                },
                {
                  "name": "options",
                  "optional": true
                },
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ],
          "desc": "<p>This is similar to <code>child_process.exec()</code> except it does not execute a\nsubshell but rather the specified file directly. This makes it slightly\nleaner than <code>child_process.exec</code>. It has the same options.\n\n\n</p>\n"
        },
        {
          "textRaw": "child_process.fork(modulePath, [args], [options])",
          "type": "method",
          "name": "fork",
          "signatures": [
            {
              "return": {
                "textRaw": "Return: ChildProcess object ",
                "name": "return",
                "desc": "ChildProcess object"
              },
              "params": [
                {
                  "textRaw": "`modulePath` {String} The module to run in the child ",
                  "name": "modulePath",
                  "type": "String",
                  "desc": "The module to run in the child"
                },
                {
                  "textRaw": "`args` {Array} List of string arguments ",
                  "name": "args",
                  "type": "Array",
                  "desc": "List of string arguments",
                  "optional": true
                },
                {
                  "textRaw": "`options` {Object} ",
                  "options": [
                    {
                      "textRaw": "`cwd` {String} Current working directory of the child process ",
                      "name": "cwd",
                      "type": "String",
                      "desc": "Current working directory of the child process"
                    },
                    {
                      "textRaw": "`env` {Object} Environment key-value pairs ",
                      "name": "env",
                      "type": "Object",
                      "desc": "Environment key-value pairs"
                    },
                    {
                      "textRaw": "`encoding` {String} (Default: 'utf8') ",
                      "name": "encoding",
                      "default": "utf8",
                      "type": "String"
                    },
                    {
                      "textRaw": "`execPath` {String} Executable used to create the child process ",
                      "name": "execPath",
                      "type": "String",
                      "desc": "Executable used to create the child process"
                    },
                    {
                      "textRaw": "`execArgv` {Array} List of string arguments passed to the executable (Default: `process.execArgv`) ",
                      "name": "execArgv",
                      "default": "process.execArgv",
                      "type": "Array",
                      "desc": "List of string arguments passed to the executable"
                    },
                    {
                      "textRaw": "`silent` {Boolean} If true, stdin, stdout, and stderr of the child will be piped to the parent, otherwise they will be inherited from the parent, see the \"pipe\" and \"inherit\" options for `spawn()`'s `stdio` for more details (default is false) ",
                      "name": "silent",
                      "type": "Boolean",
                      "desc": "If true, stdin, stdout, and stderr of the child will be piped to the parent, otherwise they will be inherited from the parent, see the \"pipe\" and \"inherit\" options for `spawn()`'s `stdio` for more details (default is false)"
                    }
                  ],
                  "name": "options",
                  "type": "Object",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "modulePath"
                },
                {
                  "name": "args",
                  "optional": true
                },
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ],
          "desc": "<p>This is a special case of the <code>spawn()</code> functionality for spawning Node\nprocesses. In addition to having all the methods in a normal ChildProcess\ninstance, the returned object has a communication channel built-in. See\n<code>child.send(message, [sendHandle])</code> for details.\n\n</p>\n<p>These child Nodes are still whole new instances of V8. Assume at least 30ms\nstartup and 10mb memory for each new Node. That is, you cannot create many\nthousands of them.\n\n</p>\n<p>The <code>execPath</code> property in the <code>options</code> object allows for a process to be\ncreated for the child rather than the current <code>node</code> executable. This should be\ndone with care and by default will talk over the fd represented an\nenvironmental variable <code>NODE_CHANNEL_FD</code> on the child process. The input and\noutput on this fd is expected to be line delimited JSON objects.\n\n</p>\n"
        }
      ],
      "type": "module",
      "displayName": "Child Process"
    },
    {
      "textRaw": "Assert",
      "name": "assert",
      "stability": 5,
      "stabilityText": "Locked",
      "desc": "<p>This module is used for writing unit tests for your applications, you can\naccess it with <code>require(&#39;assert&#39;)</code>.\n\n</p>\n",
      "methods": [
        {
          "textRaw": "assert.fail(actual, expected, message, operator)",
          "type": "method",
          "name": "fail",
          "desc": "<p>Throws an exception that displays the values for <code>actual</code> and <code>expected</code> separated by the provided operator.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "actual"
                },
                {
                  "name": "expected"
                },
                {
                  "name": "message"
                },
                {
                  "name": "operator"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert(value, message), assert.ok(value, [message])",
          "type": "method",
          "name": "ok",
          "desc": "<p>Tests if value is truthy, it is equivalent to <code>assert.equal(true, !!value, message);</code>\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "value"
                },
                {
                  "name": "message)"
                },
                {
                  "name": "assert.ok(value"
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.equal(actual, expected, [message])",
          "type": "method",
          "name": "equal",
          "desc": "<p>Tests shallow, coercive equality with the equal comparison operator ( <code>==</code> ).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "actual"
                },
                {
                  "name": "expected"
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.notEqual(actual, expected, [message])",
          "type": "method",
          "name": "notEqual",
          "desc": "<p>Tests shallow, coercive non-equality with the not equal comparison operator ( <code>!=</code> ).\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "actual"
                },
                {
                  "name": "expected"
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.deepEqual(actual, expected, [message])",
          "type": "method",
          "name": "deepEqual",
          "desc": "<p>Tests for deep equality.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "actual"
                },
                {
                  "name": "expected"
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.notDeepEqual(actual, expected, [message])",
          "type": "method",
          "name": "notDeepEqual",
          "desc": "<p>Tests for any deep inequality.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "actual"
                },
                {
                  "name": "expected"
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.strictEqual(actual, expected, [message])",
          "type": "method",
          "name": "strictEqual",
          "desc": "<p>Tests strict equality, as determined by the strict equality operator ( <code>===</code> )\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "actual"
                },
                {
                  "name": "expected"
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.notStrictEqual(actual, expected, [message])",
          "type": "method",
          "name": "notStrictEqual",
          "desc": "<p>Tests strict non-equality, as determined by the strict not equal operator ( <code>!==</code> )\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "actual"
                },
                {
                  "name": "expected"
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.throws(block, [error], [message])",
          "type": "method",
          "name": "throws",
          "desc": "<p>Expects <code>block</code> to throw an error. <code>error</code> can be constructor, <code>RegExp</code> or\nvalidation function.\n\n</p>\n<p>Validate instanceof using constructor:\n\n</p>\n<pre><code>assert.throws(\n  function() {\n    throw new Error(&quot;Wrong value&quot;);\n  },\n  Error\n);</code></pre>\n<p>Validate error message using RegExp:\n\n</p>\n<pre><code>assert.throws(\n  function() {\n    throw new Error(&quot;Wrong value&quot;);\n  },\n  /value/\n);</code></pre>\n<p>Custom error validation:\n\n</p>\n<pre><code>assert.throws(\n  function() {\n    throw new Error(&quot;Wrong value&quot;);\n  },\n  function(err) {\n    if ( (err instanceof Error) &amp;&amp; /value/.test(err) ) {\n      return true;\n    }\n  },\n  &quot;unexpected error&quot;\n);</code></pre>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "block"
                },
                {
                  "name": "error",
                  "optional": true
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.doesNotThrow(block, [message])",
          "type": "method",
          "name": "doesNotThrow",
          "desc": "<p>Expects <code>block</code> not to throw an error, see <code>assert.throws</code> for details.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "block"
                },
                {
                  "name": "message",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "assert.ifError(value)",
          "type": "method",
          "name": "ifError",
          "desc": "<p>Tests if value is not a false value, throws if it is a true value. Useful when\ntesting the first argument, <code>error</code> in callbacks.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "value"
                }
              ]
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "Assert"
    },
    {
      "textRaw": "TTY",
      "name": "tty",
      "stability": 2,
      "stabilityText": "Unstable",
      "desc": "<p>The <code>tty</code> module houses the <code>tty.ReadStream</code> and <code>tty.WriteStream</code> classes. In\nmost cases, you will not need to use this module directly.\n\n</p>\n<p>When node detects that it is being run inside a TTY context, then <code>process.stdin</code>\nwill be a <code>tty.ReadStream</code> instance and <code>process.stdout</code> will be\na <code>tty.WriteStream</code> instance. The preferred way to check if node is being run in\na TTY context is to check <code>process.stdout.isTTY</code>:\n\n</p>\n<pre><code>$ node -p -e &quot;Boolean(process.stdout.isTTY)&quot;\ntrue\n$ node -p -e &quot;Boolean(process.stdout.isTTY)&quot; | cat\nfalse</code></pre>\n",
      "methods": [
        {
          "textRaw": "tty.isatty(fd)",
          "type": "method",
          "name": "isatty",
          "desc": "<p>Returns <code>true</code> or <code>false</code> depending on if the <code>fd</code> is associated with a\nterminal.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "fd"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "tty.setRawMode(mode)",
          "type": "method",
          "name": "setRawMode",
          "desc": "<p>Deprecated. Use <code>tty.ReadStream#setRawMode()</code>\n(i.e. <code>process.stdin.setRawMode()</code>) instead.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "mode"
                }
              ]
            }
          ]
        }
      ],
      "classes": [
        {
          "textRaw": "Class: ReadStream",
          "type": "class",
          "name": "ReadStream",
          "desc": "<p>A <code>net.Socket</code> subclass that represents the readable portion of a tty. In normal\ncircumstances, <code>process.stdin</code> will be the only <code>tty.ReadStream</code> instance in any\nnode program (only when <code>isatty(0)</code> is true).\n\n</p>\n",
          "properties": [
            {
              "textRaw": "rs.isRaw",
              "name": "isRaw",
              "desc": "<p>A <code>Boolean</code> that is initialized to <code>false</code>. It represents the current &quot;raw&quot; state\nof the <code>tty.ReadStream</code> instance.\n\n</p>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "rs.setRawMode(mode)",
              "type": "method",
              "name": "setRawMode",
              "desc": "<p><code>mode</code> should be <code>true</code> or <code>false</code>. This sets the properties of the\n<code>tty.ReadStream</code> to act either as a raw device or default. <code>isRaw</code> will be set\nto the resulting mode.\n\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "mode"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: WriteStream",
          "type": "class",
          "name": "WriteStream",
          "desc": "<p>A <code>net.Socket</code> subclass that represents the writable portion of a tty. In normal\ncircumstances, <code>process.stdout</code> will be the only <code>tty.WriteStream</code> instance\never created (and only when <code>isatty(1)</code> is true).\n\n</p>\n",
          "properties": [
            {
              "textRaw": "ws.columns",
              "name": "columns",
              "desc": "<p>A <code>Number</code> that gives the number of columns the TTY currently has. This property\ngets updated on &quot;resize&quot; events.\n\n</p>\n"
            },
            {
              "textRaw": "ws.rows",
              "name": "rows",
              "desc": "<p>A <code>Number</code> that gives the number of rows the TTY currently has. This property\ngets updated on &quot;resize&quot; events.\n\n</p>\n"
            }
          ],
          "events": [
            {
              "textRaw": "Event: 'resize'",
              "type": "event",
              "name": "resize",
              "desc": "<p><code>function () {}</code>\n\n</p>\n<p>Emitted by <code>refreshSize()</code> when either of the <code>columns</code> or <code>rows</code> properties\nhas changed.\n\n</p>\n<pre><code>process.stdout.on(&#39;resize&#39;, function() {\n  console.log(&#39;screen size has changed!&#39;);\n  console.log(process.stdout.columns + &#39;x&#39; + process.stdout.rows);\n});</code></pre>\n",
              "params": []
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "TTY"
    },
    {
      "textRaw": "Zlib",
      "name": "zlib",
      "stability": 3,
      "stabilityText": "Stable",
      "desc": "<p>You can access this module with:\n\n</p>\n<pre><code>var zlib = require(&#39;zlib&#39;);</code></pre>\n<p>This provides bindings to Gzip/Gunzip, Deflate/Inflate, and\nDeflateRaw/InflateRaw classes.  Each class takes the same options, and\nis a readable/writable Stream.\n\n</p>\n<h2>Examples</h2>\n<p>Compressing or decompressing a file can be done by piping an\nfs.ReadStream into a zlib stream, then into an fs.WriteStream.\n\n</p>\n<pre><code>var gzip = zlib.createGzip();\nvar fs = require(&#39;fs&#39;);\nvar inp = fs.createReadStream(&#39;input.txt&#39;);\nvar out = fs.createWriteStream(&#39;input.txt.gz&#39;);\n\ninp.pipe(gzip).pipe(out);</code></pre>\n<p>Compressing or decompressing data in one step can be done by using\nthe convenience methods.\n\n</p>\n<pre><code>var input = &#39;.................................&#39;;\nzlib.deflate(input, function(err, buffer) {\n  if (!err) {\n    console.log(buffer.toString(&#39;base64&#39;));\n  }\n});\n\nvar buffer = new Buffer(&#39;eJzT0yMAAGTvBe8=&#39;, &#39;base64&#39;);\nzlib.unzip(buffer, function(err, buffer) {\n  if (!err) {\n    console.log(buffer.toString());\n  }\n});</code></pre>\n<p>To use this module in an HTTP client or server, use the\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3\">accept-encoding</a>\non requests, and the\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11\">content-encoding</a>\nheader on responses.\n\n</p>\n<p><strong>Note: these examples are drastically simplified to show\nthe basic concept.</strong>  Zlib encoding can be expensive, and the results\nought to be cached.  See <a href=\"#zlib_memory_usage_tuning\">Memory Usage Tuning</a>\nbelow for more information on the speed/memory/compression\ntradeoffs involved in zlib usage.\n\n</p>\n<pre><code>// client request example\nvar zlib = require(&#39;zlib&#39;);\nvar http = require(&#39;http&#39;);\nvar fs = require(&#39;fs&#39;);\nvar request = http.get({ host: &#39;izs.me&#39;,\n                         path: &#39;/&#39;,\n                         port: 80,\n                         headers: { &#39;accept-encoding&#39;: &#39;gzip,deflate&#39; } });\nrequest.on(&#39;response&#39;, function(response) {\n  var output = fs.createWriteStream(&#39;izs.me_index.html&#39;);\n\n  switch (response.headers[&#39;content-encoding&#39;]) {\n    // or, just use zlib.createUnzip() to handle both cases\n    case &#39;gzip&#39;:\n      response.pipe(zlib.createGunzip()).pipe(output);\n      break;\n    case &#39;deflate&#39;:\n      response.pipe(zlib.createInflate()).pipe(output);\n      break;\n    default:\n      response.pipe(output);\n      break;\n  }\n});\n\n// server example\n// Running a gzip operation on every request is quite expensive.\n// It would be much more efficient to cache the compressed buffer.\nvar zlib = require(&#39;zlib&#39;);\nvar http = require(&#39;http&#39;);\nvar fs = require(&#39;fs&#39;);\nhttp.createServer(function(request, response) {\n  var raw = fs.createReadStream(&#39;index.html&#39;);\n  var acceptEncoding = request.headers[&#39;accept-encoding&#39;];\n  if (!acceptEncoding) {\n    acceptEncoding = &#39;&#39;;\n  }\n\n  // Note: this is not a conformant accept-encoding parser.\n  // See http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3\n  if (acceptEncoding.match(/\\bdeflate\\b/)) {\n    response.writeHead(200, { &#39;content-encoding&#39;: &#39;deflate&#39; });\n    raw.pipe(zlib.createDeflate()).pipe(response);\n  } else if (acceptEncoding.match(/\\bgzip\\b/)) {\n    response.writeHead(200, { &#39;content-encoding&#39;: &#39;gzip&#39; });\n    raw.pipe(zlib.createGzip()).pipe(response);\n  } else {\n    response.writeHead(200, {});\n    raw.pipe(response);\n  }\n}).listen(1337);</code></pre>\n",
      "methods": [
        {
          "textRaw": "zlib.createGzip([options])",
          "type": "method",
          "name": "createGzip",
          "desc": "<p>Returns a new <a href=\"#zlib_class_zlib_gzip\">Gzip</a> object with an\n<a href=\"#zlib_options\">options</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.createGunzip([options])",
          "type": "method",
          "name": "createGunzip",
          "desc": "<p>Returns a new <a href=\"#zlib_class_zlib_gunzip\">Gunzip</a> object with an\n<a href=\"#zlib_options\">options</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.createDeflate([options])",
          "type": "method",
          "name": "createDeflate",
          "desc": "<p>Returns a new <a href=\"#zlib_class_zlib_deflate\">Deflate</a> object with an\n<a href=\"#zlib_options\">options</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.createInflate([options])",
          "type": "method",
          "name": "createInflate",
          "desc": "<p>Returns a new <a href=\"#zlib_class_zlib_inflate\">Inflate</a> object with an\n<a href=\"#zlib_options\">options</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.createDeflateRaw([options])",
          "type": "method",
          "name": "createDeflateRaw",
          "desc": "<p>Returns a new <a href=\"#zlib_class_zlib_deflateraw\">DeflateRaw</a> object with an\n<a href=\"#zlib_options\">options</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.createInflateRaw([options])",
          "type": "method",
          "name": "createInflateRaw",
          "desc": "<p>Returns a new <a href=\"#zlib_class_zlib_inflateraw\">InflateRaw</a> object with an\n<a href=\"#zlib_options\">options</a>.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.createUnzip([options])",
          "type": "method",
          "name": "createUnzip",
          "desc": "<p>Returns a new <a href=\"#zlib_class_zlib_unzip\">Unzip</a> object with an\n<a href=\"#zlib_options\">options</a>.\n\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "options",
                  "optional": true
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.deflate(buf, callback)",
          "type": "method",
          "name": "deflate",
          "desc": "<p>Compress a string with Deflate.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "buf"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.deflateRaw(buf, callback)",
          "type": "method",
          "name": "deflateRaw",
          "desc": "<p>Compress a string with DeflateRaw.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "buf"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.gzip(buf, callback)",
          "type": "method",
          "name": "gzip",
          "desc": "<p>Compress a string with Gzip.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "buf"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.gunzip(buf, callback)",
          "type": "method",
          "name": "gunzip",
          "desc": "<p>Decompress a raw Buffer with Gunzip.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "buf"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.inflate(buf, callback)",
          "type": "method",
          "name": "inflate",
          "desc": "<p>Decompress a raw Buffer with Inflate.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "buf"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.inflateRaw(buf, callback)",
          "type": "method",
          "name": "inflateRaw",
          "desc": "<p>Decompress a raw Buffer with InflateRaw.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "buf"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        },
        {
          "textRaw": "zlib.unzip(buf, callback)",
          "type": "method",
          "name": "unzip",
          "desc": "<p>Decompress a raw Buffer with Unzip.\n\n</p>\n",
          "signatures": [
            {
              "params": [
                {
                  "name": "buf"
                },
                {
                  "name": "callback"
                }
              ]
            }
          ]
        }
      ],
      "classes": [
        {
          "textRaw": "Class: zlib.Zlib",
          "type": "class",
          "name": "zlib.Zlib",
          "desc": "<p>Not exported by the <code>zlib</code> module. It is documented here because it is the base\nclass of the compressor/decompressor classes.\n\n</p>\n",
          "methods": [
            {
              "textRaw": "zlib.flush(callback)",
              "type": "method",
              "name": "flush",
              "desc": "<p>Flush pending data. Don&#39;t call this frivolously, premature flushes negatively\nimpact the effectiveness of the compression algorithm.\n\n</p>\n",
              "signatures": [
                {
                  "params": [
                    {
                      "name": "callback"
                    }
                  ]
                }
              ]
            },
            {
              "textRaw": "zlib.reset()",
              "type": "method",
              "name": "reset",
              "desc": "<p>Reset the compressor/decompressor to factory defaults. Only applicable to\nthe inflate and deflate algorithms.\n\n</p>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ]
        },
        {
          "textRaw": "Class: zlib.Gzip",
          "type": "class",
          "name": "zlib.Gzip",
          "desc": "<p>Compress data using gzip.\n\n</p>\n"
        },
        {
          "textRaw": "Class: zlib.Gunzip",
          "type": "class",
          "name": "zlib.Gunzip",
          "desc": "<p>Decompress a gzip stream.\n\n</p>\n"
        },
        {
          "textRaw": "Class: zlib.Deflate",
          "type": "class",
          "name": "zlib.Deflate",
          "desc": "<p>Compress data using deflate.\n\n</p>\n"
        },
        {
          "textRaw": "Class: zlib.Inflate",
          "type": "class",
          "name": "zlib.Inflate",
          "desc": "<p>Decompress a deflate stream.\n\n</p>\n"
        },
        {
          "textRaw": "Class: zlib.DeflateRaw",
          "type": "class",
          "name": "zlib.DeflateRaw",
          "desc": "<p>Compress data using deflate, and do not append a zlib header.\n\n</p>\n"
        },
        {
          "textRaw": "Class: zlib.InflateRaw",
          "type": "class",
          "name": "zlib.InflateRaw",
          "desc": "<p>Decompress a raw deflate stream.\n\n</p>\n"
        },
        {
          "textRaw": "Class: zlib.Unzip",
          "type": "class",
          "name": "zlib.Unzip",
          "desc": "<p>Decompress either a Gzip- or Deflate-compressed stream by auto-detecting\nthe header.\n\n</p>\n"
        }
      ],
      "miscs": [
        {
          "textRaw": "Convenience Methods",
          "name": "Convenience Methods",
          "type": "misc",
          "desc": "<p>All of these take a string or buffer as the first argument, and call the\nsupplied callback with <code>callback(error, result)</code>.  The\ncompression/decompression engine is created using the default settings\nin all convenience methods.  To supply different options, use the\nzlib classes directly.\n\n</p>\n"
        },
        {
          "textRaw": "Options",
          "name": "Options",
          "type": "misc",
          "desc": "<p>Each class takes an options object.  All options are optional.  (The\nconvenience methods use the default settings for all options.)\n\n</p>\n<p>Note that some options are only relevant when compressing, and are\nignored by the decompression classes.\n\n</p>\n<ul>\n<li>flush (default: <code>zlib.Z_NO_FLUSH</code>)</li>\n<li>chunkSize (default: 16*1024)</li>\n<li>windowBits</li>\n<li>level (compression only)</li>\n<li>memLevel (compression only)</li>\n<li>strategy (compression only)</li>\n<li>dictionary (deflate/inflate only, empty dictionary by default)</li>\n</ul>\n<p>See the description of <code>deflateInit2</code> and <code>inflateInit2</code> at\n</p>\n<p><a href=\"http://zlib.net/manual.html#Advanced\">http://zlib.net/manual.html#Advanced</a> for more information on these.\n\n</p>\n"
        },
        {
          "textRaw": "Memory Usage Tuning",
          "name": "Memory Usage Tuning",
          "type": "misc",
          "desc": "<p>From <code>zlib/zconf.h</code>, modified to node&#39;s usage:\n\n</p>\n<p>The memory requirements for deflate are (in bytes):\n\n</p>\n<pre><code>(1 &lt;&lt; (windowBits+2)) +  (1 &lt;&lt; (memLevel+9))</code></pre>\n<p>that is: 128K for windowBits=15  +  128K for memLevel = 8\n(default values) plus a few kilobytes for small objects.\n\n</p>\n<p>For example, if you want to reduce\nthe default memory requirements from 256K to 128K, set the options to:\n\n</p>\n<pre><code>{ windowBits: 14, memLevel: 7 }</code></pre>\n<p>Of course this will generally degrade compression (there&#39;s no free lunch).\n\n</p>\n<p>The memory requirements for inflate are (in bytes)\n\n</p>\n<pre><code>1 &lt;&lt; windowBits</code></pre>\n<p>that is, 32K for windowBits=15 (default value) plus a few kilobytes\nfor small objects.\n\n</p>\n<p>This is in addition to a single internal output slab buffer of size\n<code>chunkSize</code>, which defaults to 16K.\n\n</p>\n<p>The speed of zlib compression is affected most dramatically by the\n<code>level</code> setting.  A higher level will result in better compression, but\nwill take longer to complete.  A lower level will result in less\ncompression, but will be much faster.\n\n</p>\n<p>In general, greater memory usage options will mean that node has to make\nfewer calls to zlib, since it&#39;ll be able to process more data in a\nsingle <code>write</code> operation.  So, this is another factor that affects the\nspeed, at the cost of memory usage.\n\n</p>\n"
        },
        {
          "textRaw": "Constants",
          "name": "Constants",
          "type": "misc",
          "desc": "<p>All of the constants defined in zlib.h are also defined on\n<code>require(&#39;zlib&#39;)</code>.\nIn the normal course of operations, you will not need to ever set any of\nthese.  They are documented here so that their presence is not\nsurprising.  This section is taken almost directly from the <a href=\"http://zlib.net/manual.html#Constants\">zlib\ndocumentation</a>.  See\n</p>\n<p><a href=\"http://zlib.net/manual.html#Constants\">http://zlib.net/manual.html#Constants</a> for more details.\n\n</p>\n<p>Allowed flush values.\n\n</p>\n<ul>\n<li><code>zlib.Z_NO_FLUSH</code></li>\n<li><code>zlib.Z_PARTIAL_FLUSH</code></li>\n<li><code>zlib.Z_SYNC_FLUSH</code></li>\n<li><code>zlib.Z_FULL_FLUSH</code></li>\n<li><code>zlib.Z_FINISH</code></li>\n<li><code>zlib.Z_BLOCK</code></li>\n<li><code>zlib.Z_TREES</code></li>\n</ul>\n<p>Return codes for the compression/decompression functions. Negative\nvalues are errors, positive values are used for special but normal\nevents.\n\n</p>\n<ul>\n<li><code>zlib.Z_OK</code></li>\n<li><code>zlib.Z_STREAM_END</code></li>\n<li><code>zlib.Z_NEED_DICT</code></li>\n<li><code>zlib.Z_ERRNO</code></li>\n<li><code>zlib.Z_STREAM_ERROR</code></li>\n<li><code>zlib.Z_DATA_ERROR</code></li>\n<li><code>zlib.Z_MEM_ERROR</code></li>\n<li><code>zlib.Z_BUF_ERROR</code></li>\n<li><code>zlib.Z_VERSION_ERROR</code></li>\n</ul>\n<p>Compression levels.\n\n</p>\n<ul>\n<li><code>zlib.Z_NO_COMPRESSION</code></li>\n<li><code>zlib.Z_BEST_SPEED</code></li>\n<li><code>zlib.Z_BEST_COMPRESSION</code></li>\n<li><code>zlib.Z_DEFAULT_COMPRESSION</code></li>\n</ul>\n<p>Compression strategy.\n\n</p>\n<ul>\n<li><code>zlib.Z_FILTERED</code></li>\n<li><code>zlib.Z_HUFFMAN_ONLY</code></li>\n<li><code>zlib.Z_RLE</code></li>\n<li><code>zlib.Z_FIXED</code></li>\n<li><code>zlib.Z_DEFAULT_STRATEGY</code></li>\n</ul>\n<p>Possible values of the data_type field.\n\n</p>\n<ul>\n<li><code>zlib.Z_BINARY</code></li>\n<li><code>zlib.Z_TEXT</code></li>\n<li><code>zlib.Z_ASCII</code></li>\n<li><code>zlib.Z_UNKNOWN</code></li>\n</ul>\n<p>The deflate compression method (the only one supported in this version).\n\n</p>\n<ul>\n<li><code>zlib.Z_DEFLATED</code></li>\n</ul>\n<p>For initializing zalloc, zfree, opaque.\n\n</p>\n<ul>\n<li><code>zlib.Z_NULL</code></li>\n</ul>\n"
        }
      ],
      "type": "module",
      "displayName": "Zlib"
    },
    {
      "textRaw": "os",
      "name": "os",
      "stability": 4,
      "stabilityText": "API Frozen",
      "desc": "<p>Provides a few basic operating-system related utility functions.\n\n</p>\n<p>Use <code>require(&#39;os&#39;)</code> to access this module.\n\n</p>\n",
      "methods": [
        {
          "textRaw": "os.tmpdir()",
          "type": "method",
          "name": "tmpdir",
          "desc": "<p>Returns the operating system&#39;s default directory for temp files.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.endianness()",
          "type": "method",
          "name": "endianness",
          "desc": "<p>Returns the endianness of the CPU. Possible values are <code>&quot;BE&quot;</code> or <code>&quot;LE&quot;</code>.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.hostname()",
          "type": "method",
          "name": "hostname",
          "desc": "<p>Returns the hostname of the operating system.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.type()",
          "type": "method",
          "name": "type",
          "desc": "<p>Returns the operating system name.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.platform()",
          "type": "method",
          "name": "platform",
          "desc": "<p>Returns the operating system platform.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.arch()",
          "type": "method",
          "name": "arch",
          "desc": "<p>Returns the operating system CPU architecture.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.release()",
          "type": "method",
          "name": "release",
          "desc": "<p>Returns the operating system release.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.uptime()",
          "type": "method",
          "name": "uptime",
          "desc": "<p>Returns the system uptime in seconds.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.loadavg()",
          "type": "method",
          "name": "loadavg",
          "desc": "<p>Returns an array containing the 1, 5, and 15 minute load averages.\n\n</p>\n<p>The load average is a measure of system activity, calculated by the operating\nsystem and expressed as a fractional number.  As a rule of thumb, the load\naverage should ideally be less than the number of logical CPUs in the system.\n\n</p>\n<p>The load average is a very UNIX-y concept; there is no real equivalent on\nWindows platforms.  That is why this function always returns <code>[0, 0, 0]</code> on\nWindows.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.totalmem()",
          "type": "method",
          "name": "totalmem",
          "desc": "<p>Returns the total amount of system memory in bytes.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.freemem()",
          "type": "method",
          "name": "freemem",
          "desc": "<p>Returns the amount of free system memory in bytes.\n\n</p>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.cpus()",
          "type": "method",
          "name": "cpus",
          "desc": "<p>Returns an array of objects containing information about each CPU/core\ninstalled: model, speed (in MHz), and times (an object containing the number of\nmilliseconds the CPU/core spent in: user, nice, sys, idle, and irq).\n\n</p>\n<p>Example inspection of os.cpus:\n\n</p>\n<pre><code>[ { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,\n    speed: 2926,\n    times:\n     { user: 252020,\n       nice: 0,\n       sys: 30340,\n       idle: 1070356870,\n       irq: 0 } },\n  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,\n    speed: 2926,\n    times:\n     { user: 306960,\n       nice: 0,\n       sys: 26980,\n       idle: 1071569080,\n       irq: 0 } },\n  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,\n    speed: 2926,\n    times:\n     { user: 248450,\n       nice: 0,\n       sys: 21750,\n       idle: 1070919370,\n       irq: 0 } },\n  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,\n    speed: 2926,\n    times:\n     { user: 256880,\n       nice: 0,\n       sys: 19430,\n       idle: 1070905480,\n       irq: 20 } },\n  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,\n    speed: 2926,\n    times:\n     { user: 511580,\n       nice: 20,\n       sys: 40900,\n       idle: 1070842510,\n       irq: 0 } },\n  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,\n    speed: 2926,\n    times:\n     { user: 291660,\n       nice: 0,\n       sys: 34360,\n       idle: 1070888000,\n       irq: 10 } },\n  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,\n    speed: 2926,\n    times:\n     { user: 308260,\n       nice: 0,\n       sys: 55410,\n       idle: 1071129970,\n       irq: 880 } },\n  { model: &#39;Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz&#39;,\n    speed: 2926,\n    times:\n     { user: 266450,\n       nice: 1480,\n       sys: 34920,\n       idle: 1072572010,\n       irq: 30 } } ]</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        },
        {
          "textRaw": "os.networkInterfaces()",
          "type": "method",
          "name": "networkInterfaces",
          "desc": "<p>Get a list of network interfaces:\n\n</p>\n<pre><code>{ lo0: \n   [ { address: &#39;::1&#39;, family: &#39;IPv6&#39;, internal: true },\n     { address: &#39;fe80::1&#39;, family: &#39;IPv6&#39;, internal: true },\n     { address: &#39;127.0.0.1&#39;, family: &#39;IPv4&#39;, internal: true } ],\n  en1: \n   [ { address: &#39;fe80::cabc:c8ff:feef:f996&#39;, family: &#39;IPv6&#39;,\n       internal: false },\n     { address: &#39;10.0.1.123&#39;, family: &#39;IPv4&#39;, internal: false } ],\n  vmnet1: [ { address: &#39;10.99.99.254&#39;, family: &#39;IPv4&#39;, internal: false } ],\n  vmnet8: [ { address: &#39;10.88.88.1&#39;, family: &#39;IPv4&#39;, internal: false } ],\n  ppp0: [ { address: &#39;10.2.0.231&#39;, family: &#39;IPv4&#39;, internal: false } ] }</code></pre>\n",
          "signatures": [
            {
              "params": []
            }
          ]
        }
      ],
      "properties": [
        {
          "textRaw": "os.EOL",
          "name": "EOL",
          "desc": "<p>A constant defining the appropriate End-of-line marker for the operating system.\n\n</p>\n"
        }
      ],
      "type": "module",
      "displayName": "os"
    },
    {
      "textRaw": "Cluster",
      "name": "cluster",
      "stability": 1,
      "stabilityText": "Experimental",
      "desc": "<p>A single instance of Node runs in a single thread. To take advantage of\nmulti-core systems the user will sometimes want to launch a cluster of Node\nprocesses to handle the load.\n\n</p>\n<p>The cluster module allows you to easily create child processes that\nall share server ports.\n\n</p>\n<pre><code>var cluster = require(&#39;cluster&#39;);\nvar http = require(&#39;http&#39;);\nvar numCPUs = require(&#39;os&#39;).cpus().length;\n\nif (cluster.isMaster) {\n  // Fork workers.\n  for (var i = 0; i &lt; numCPUs; i++) {\n    cluster.fork();\n  }\n\n  cluster.on(&#39;exit&#39;, function(worker, code, signal) {\n    console.log(&#39;worker &#39; + worker.process.pid + &#39; died&#39;);\n  });\n} else {\n  // Workers can share any TCP connection\n  // In this case its a HTTP server\n  http.createServer(function(req, res) {\n    res.writeHead(200);\n    res.end(&quot;hello world\\n&quot;);\n  }).listen(8000);\n}</code></pre>\n<p>Running node will now share port 8000 between the workers:\n\n</p>\n<pre><code>% NODE_DEBUG=cluster node server.js\n23521,Master Worker 23524 online\n23521,Master Worker 23526 online\n23521,Master Worker 23523 online\n23521,Master Worker 23528 online</code></pre>\n<p>This feature was introduced recently, and may change in future versions.\nPlease try it out and provide feedback.\n\n</p>\n<p>Also note that, on Windows, it is not yet possible to set up a named pipe\nserver in a worker.\n\n</p>\n",
      "miscs": [
        {
          "textRaw": "How It Works",
          "name": "How It Works",
          "type": "misc",
          "desc": "<p>The worker processes are spawned using the <code>child_process.fork</code> method,\nso that they can communicate with the parent via IPC and pass server\nhandles back and forth.\n\n</p>\n<p>When you call <code>server.listen(...)</code> in a worker, it serializes the\narguments and passes the request to the master process.  If the master\nprocess already has a listening server matching the worker&#39;s\nrequirements, then it passes the handle to the worker.  If it does not\nalready have a listening server matching that requirement, then it will\ncreate one, and pass the handle to the worker.\n\n</p>\n<p>This causes potentially surprising behavior in three edge cases:\n\n</p>\n<ol>\n<li><code>server.listen({fd: 7})</code> Because the message is passed to the master,\nfile descriptor 7 <strong>in the parent</strong> will be listened on, and the\nhandle passed to the worker, rather than listening to the worker&#39;s\nidea of what the number 7 file descriptor references.</li>\n<li><code>server.listen(handle)</code> Listening on handles explicitly will cause\nthe worker to use the supplied handle, rather than talk to the master\nprocess.  If the worker already has the handle, then it&#39;s presumed\nthat you know what you are doing.</li>\n<li><code>server.listen(0)</code> Normally, this will cause servers to listen on a\nrandom port.  However, in a cluster, each worker will receive the\nsame &quot;random&quot; port each time they do <code>listen(0)</code>.  In essence, the\nport is random the first time, but predictable thereafter.  If you\nwant to listen on a unique port, generate a port number based on the\ncluster worker ID.</li>\n</ol>\n<p>When multiple processes are all <code>accept()</code>ing on the same underlying\nresource, the operating system load-balances across them very\nefficiently.  There is no routing logic in Node.js, or in your program,\nand no shared state between the workers.  Therefore, it is important to\ndesign your program such that it does not rely too heavily on in-memory\ndata objects for things like sessions and login.\n\n</p>\n<p>Because workers are all separate processes, they can be killed or\nre-spawned depending on your program&#39;s needs, without affecting other\nworkers.  As long as there are some workers still alive, the server will\ncontinue to accept connections.  Node does not automatically manage the\nnumber of workers for you, however.  It is your responsibility to manage\nthe worker pool for your application&#39;s needs.\n\n</p>\n"
        }
      ],
      "properties": [
        {
          "textRaw": "`settings` {Object} ",
          "name": "settings",
          "options": [
            {
              "textRaw": "`execArgv` {Array} list of string arguments passed to the node executable.  (Default=`process.execArgv`) ",
              "name": "execArgv",
              "default": "process.execArgv",
              "type": "Array",
              "desc": "list of string arguments passed to the node executable."
            },
            {
              "textRaw": "`exec` {String} file path to worker file.  (Default=`process.argv[1]`) ",
              "name": "exec",
              "default": "process.argv[1]",
              "type": "String",
              "desc": "file path to worker file."
            },
            {
              "textRaw": "`args` {Array} string arguments passed to worker. (Default=`process.argv.slice(2)`) ",
              "name": "args",
              "default": "process.argv.slice(2)",
              "type": "Array",
              "desc": "string arguments passed to worker."
            },
            {
              "textRaw": "`silent` {Boolean} whether or not to send output to parent's stdio. (Default=`false`) ",
              "name": "silent",
              "default": "false",
              "type": "Boolean",
              "desc": "whether or not to send output to parent's stdio."
            }
          ],
          "desc": "<p>After calling <code>.setupMaster()</code> (or <code>.fork()</code>) this settings object will contain\nthe settings, including the default values.\n\n</p>\n<p>It is effectively frozen after being set, because <code>.setupMaster()</code> can\nonly be called once.\n\n</p>\n<p>This object is not supposed to be changed or set manually, by you.\n\n</p>\n"
        },
        {
          "textRaw": "`isMaster` {Boolean} ",
          "name": "isMaster",
          "desc": "<p>True if the process is a master. This is determined\nby the <code>process.env.NODE_UNIQUE_ID</code>. If <code>process.env.NODE_UNIQUE_ID</code> is\nundefined, then <code>isMaster</code> is <code>true</code>.\n\n</p>\n"
        },
        {
          "textRaw": "`isWorker` {Boolean} ",
          "name": "isWorker",
          "desc": "<p>True if the process is not a master (it is the negation of <code>cluster.isMaster</code>).\n\n</p>\n"
        },
        {
          "textRaw": "`worker` {Object} ",
          "name": "worker",
          "desc": "<p>A reference to the current worker object. Not available in the master process.\n\n</p>\n<pre><code>var cluster = require(&#39;cluster&#39;);\n\nif (cluster.isMaster) {\n  console.log(&#39;I am master&#39;);\n  cluster.fork();\n  cluster.fork();\n} else if (cluster.isWorker) {\n  console.log(&#39;I am worker #&#39; + cluster.worker.id);\n}</code></pre>\n"
        },
        {
          "textRaw": "`workers` {Object} ",
          "name": "workers",
          "desc": "<p>A hash that stores the active worker objects, keyed by <code>id</code> field. Makes it\neasy to loop through all the workers. It is only available in the master\nprocess.\n\n</p>\n<p>A worker is removed from cluster.workers just before the <code>&#39;disconnect&#39;</code> or\n<code>&#39;exit&#39;</code> event is emitted.\n\n</p>\n<pre><code>// Go through all workers\nfunction eachWorker(callback) {\n  for (var id in cluster.workers) {\n    callback(cluster.workers[id]);\n  }\n}\neachWorker(function(worker) {\n  worker.send(&#39;big announcement to all workers&#39;);\n});</code></pre>\n<p>Should you wish to reference a worker over a communication channel, using\nthe worker&#39;s unique id is the easiest way to find the worker.\n\n</p>\n<pre><code>socket.on(&#39;data&#39;, function(id) {\n  var worker = cluster.workers[id];\n});</code></pre>\n"
        }
      ],
      "events": [
        {
          "textRaw": "Event: 'fork'",
          "type": "event",
          "name": "fork",
          "params": [],
          "desc": "<p>When a new worker is forked the cluster module will emit a &#39;fork&#39; event.\nThis can be used to log worker activity, and create your own timeout.\n\n</p>\n<pre><code>var timeouts = [];\nfunction errorMsg() {\n  console.error(&quot;Something must be wrong with the connection ...&quot;);\n}\n\ncluster.on(&#39;fork&#39;, function(worker) {\n  timeouts[worker.id] = setTimeout(errorMsg, 2000);\n});\ncluster.on(&#39;listening&#39;, function(worker, address) {\n  clearTimeout(timeouts[worker.id]);\n});\ncluster.on(&#39;exit&#39;, function(worker, code, signal) {\n  clearTimeout(timeouts[worker.id]);\n  errorMsg();\n});</code></pre>\n"
        },
        {
          "textRaw": "Event: 'online'",
          "type": "event",
          "name": "online",
          "params": [],
          "desc": "<p>After forking a new worker, the worker should respond with an online message.\nWhen the master receives an online message it will emit this event.\nThe difference between &#39;fork&#39; and &#39;online&#39; is that fork is emitted when the\nmaster forks a worker, and &#39;online&#39; is emitted when the worker is running.\n\n</p>\n<pre><code>cluster.on(&#39;online&#39;, function(worker) {\n  console.log(&quot;Yay, the worker responded after it was forked&quot;);\n});</code></pre>\n"
        },
        {
          "textRaw": "Event: 'listening'",
          "type": "event",
          "name": "listening",
          "params": [],
          "desc": "<p>After calling <code>listen()</code> from a worker, when the &#39;listening&#39; event is emitted on\nthe server, a listening event will also be emitted on <code>cluster</code> in the master.\n\n</p>\n<p>The event handler is executed with two arguments, the <code>worker</code> contains the worker\nobject and the <code>address</code> object contains the following connection properties:\n<code>address</code>, <code>port</code> and <code>addressType</code>. This is very useful if the worker is listening\non more than one address.\n\n</p>\n<pre><code>cluster.on(&#39;listening&#39;, function(worker, address) {\n  console.log(&quot;A worker is now connected to &quot; + address.address + &quot;:&quot; + address.port);\n});</code></pre>\n<p>The <code>addressType</code> is one of:\n\n</p>\n<ul>\n<li><code>4</code> (TCPv4)</li>\n<li><code>6</code> (TCPv6)</li>\n<li><code>-1</code> (unix domain socket)</li>\n<li><code>&quot;udp4&quot;</code> or <code>&quot;udp6&quot;</code> (UDP v4 or v6)</li>\n</ul>\n"
        },
        {
          "textRaw": "Event: 'disconnect'",
          "type": "event",
          "name": "disconnect",
          "params": [],
          "desc": "<p>Emitted after the worker IPC channel has disconnected. This can occur when a\nworker exits gracefully, is killed, or is disconnected manually (such as with\nworker.disconnect()).\n\n</p>\n<p>There may be a delay between the <code>disconnect</code> and <code>exit</code> events.  These events\ncan be used to detect if the process is stuck in a cleanup or if there are\nlong-living connections.\n\n</p>\n<pre><code>cluster.on(&#39;disconnect&#39;, function(worker) {\n  console.log(&#39;The worker #&#39; + worker.id + &#39; has disconnected&#39;);\n});</code></pre>\n"
        },
        {
          "textRaw": "Event: 'exit'",
          "type": "event",
          "name": "exit",
          "params": [],
          "desc": "<p>When any of the workers die the cluster module will emit the &#39;exit&#39; event.\n\n</p>\n<p>This can be used to restart the worker by calling <code>.fork()</code> again.\n\n</p>\n<pre><code>cluster.on(&#39;exit&#39;, function(worker, code, signal) {\n  console.log(&#39;worker %d died (%s). restarting...&#39;,\n    worker.process.pid, signal || code);\n  cluster.fork();\n});</code></pre>\n<p>See <a href=\"child_process.html#child_process_event_exit\">child_process event: &#39;exit&#39;</a>.\n\n</p>\n"
        },
        {
          "textRaw": "Event: 'setup'",
          "type": "event",
          "name": "setup",
          "desc": "<p>Emitted the first time that <code>.setupMaster()</code> is called.\n\n</p>\n",
          "params": []
        }
      ],
      "methods": [
        {
          "textRaw": "cluster.setupMaster([settings])",
          "type": "method",
          "name": "setupMaster",
          "signatures": [
            {
              "params": [
                {
                  "textRaw": "`settings` {Object} ",
                  "options": [
                    {
                      "textRaw": "`exec` {String} file path to worker file.  (Default=`process.argv[1]`) ",
                      "name": "exec",
                      "default": "process.argv[1]",
                      "type": "String",
                      "desc": "file path to worker file."
                    },
                    {
                      "textRaw": "`args` {Array} string arguments passed to worker. (Default=`process.argv.slice(2)`) ",
                      "name": "args",
                      "default": "process.argv.slice(2)",
                      "type": "Array",
                      "desc": "string arguments passed to worker."
                    },
                    {
                      "textRaw": "`silent` {Boolean} whether or not to send output to parent's stdio. (Default=`false`) ",
                      "name": "silent",
                      "default": "false",
                      "type": "Boolean",
                      "desc": "whether or not to send output to parent's stdio."
                    }
                  ],
                  "name": "settings",
                  "type": "Object",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "settings",
                  "optional": true
                }
              ]
            }
          ],
          "desc": "<p><code>setupMaster</code> is used to change the default &#39;fork&#39; behavior. Once called,\nthe settings will be present in <code>cluster.settings</code>.\n\n</p>\n<p>Note that:\n\n</p>\n<ul>\n<li>Only the first call to <code>.setupMaster()</code> has any effect, subsequent calls are\nignored</li>\n<li>That because of the above, the <em>only</em> attribute of a worker that may be\ncustomized per-worker is the <code>env</code> passed to <code>.fork()</code></li>\n<li><code>.fork()</code> calls <code>.setupMaster()</code> internally to establish the defaults, so to\nhave any effect, <code>.setupMaster()</code> must be called <em>before</em> any calls to\n<code>.fork()</code></li>\n</ul>\n<p>Example:\n\n</p>\n<pre><code>var cluster = require(&quot;cluster&quot;);\ncluster.setupMaster({\n  exec : &quot;worker.js&quot;,\n  args : [&quot;--use&quot;, &quot;https&quot;],\n  silent : true\n});\ncluster.fork();</code></pre>\n<p>This can only be called from the master process.\n\n</p>\n"
        },
        {
          "textRaw": "cluster.fork([env])",
          "type": "method",
          "name": "fork",
          "signatures": [
            {
              "return": {
                "textRaw": "return {Worker object} ",
                "name": "return",
                "type": "Worker object"
              },
              "params": [
                {
                  "textRaw": "`env` {Object} Key/value pairs to add to worker process environment. ",
                  "name": "env",
                  "type": "Object",
                  "desc": "Key/value pairs to add to worker process environment.",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "env",
                  "optional": true
                }
              ]
            }
          ],
          "desc": "<p>Spawn a new worker process.\n\n</p>\n<p>This can only be called from the master process.\n\n</p>\n"
        },
        {
          "textRaw": "cluster.disconnect([callback])",
          "type": "method",
          "name": "disconnect",
          "signatures": [
            {
              "params": [
                {
                  "textRaw": "`callback` {Function} called when all workers are disconnected and handles are closed ",
                  "name": "callback",
                  "type": "Function",
                  "desc": "called when all workers are disconnected and handles are closed",
                  "optional": true
                }
              ]
            },
            {
              "params": [
                {
                  "name": "callback",
                  "optional": true
                }
              ]
            }
          ],
          "desc": "<p>Calls <code>.disconnect()</code> on each worker in <code>cluster.workers</code>.\n\n</p>\n<p>When they are disconnected all internal handles will be closed, allowing the\nmaster process to die gracefully if no other event is waiting.\n\n</p>\n<p>The method takes an optional callback argument which will be called when finished.\n\n</p>\n<p>This can only be called from the master process.\n\n</p>\n"
        }
      ],
      "classes": [
        {
          "textRaw": "Class: Worker",
          "type": "class",
          "name": "Worker",
          "desc": "<p>A Worker object contains all public information and method about a worker.\nIn the master it can be obtained using <code>cluster.workers</code>. In a worker\nit can be obtained using <code>cluster.worker</code>.\n\n</p>\n",
          "properties": [
            {
              "textRaw": "`id` {String} ",
              "name": "id",
              "desc": "<p>Each new worker is given its own unique id, this id is stored in the\n<code>id</code>.\n\n</p>\n<p>While a worker is alive, this is the key that indexes it in\ncluster.workers\n\n</p>\n"
            },
            {
              "textRaw": "`process` {ChildProcess object} ",
              "name": "process",
              "desc": "<p>All workers are created using <code>child_process.fork()</code>, the returned object\nfrom this function is stored as <code>.process</code>. In a worker, the global <code>process</code>\nis stored.\n\n</p>\n<p>See: <a href=\"child_process.html#child_process_child_process_fork_modulepath_args_options\">Child Process module</a>\n\n</p>\n<p>Note that workers will call <code>process.exit(0)</code> if the <code>&#39;disconnect&#39;</code> event occurs\non <code>process</code> and <code>.suicide</code> is not <code>true</code>. This protects against accidental\ndisconnection.\n\n</p>\n"
            },
            {
              "textRaw": "`suicide` {Boolean} ",
              "name": "suicide",
              "desc": "<p>Set by calling <code>.kill()</code> or <code>.disconnect()</code>, until then it is <code>undefined</code>.\n\n</p>\n<p>The boolean <code>worker.suicide</code> lets you distinguish between voluntary and accidental\nexit, the master may choose not to respawn a worker based on this value.\n\n</p>\n<pre><code>cluster.on(&#39;exit&#39;, function(worker, code, signal) {\n  if (worker.suicide === true) {\n    console.log(&#39;Oh, it was just suicide\\&#39; â€“ no need to worry&#39;).\n  }\n});\n\n// kill worker\nworker.kill();</code></pre>\n"
            }
          ],
          "methods": [
            {
              "textRaw": "worker.send(message, [sendHandle])",
              "type": "method",
              "name": "send",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`message` {Object} ",
                      "name": "message",
                      "type": "Object"
                    },
                    {
                      "textRaw": "`sendHandle` {Handle object} ",
                      "name": "sendHandle",
                      "type": "Handle object",
                      "optional": true
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "message"
                    },
                    {
                      "name": "sendHandle",
                      "optional": true
                    }
                  ]
                }
              ],
              "desc": "<p>This function is equal to the send methods provided by\n<code>child_process.fork()</code>.  In the master you should use this function to\nsend a message to a specific worker.\n\n</p>\n<p>In a worker you can also use <code>process.send(message)</code>, it is the same function.\n\n</p>\n<p>This example will echo back all messages from the master:\n\n</p>\n<pre><code>if (cluster.isMaster) {\n  var worker = cluster.fork();\n  worker.send(&#39;hi there&#39;);\n\n} else if (cluster.isWorker) {\n  process.on(&#39;message&#39;, function(msg) {\n    process.send(msg);\n  });\n}</code></pre>\n"
            },
            {
              "textRaw": "worker.kill([signal='SIGTERM'])",
              "type": "method",
              "name": "kill",
              "signatures": [
                {
                  "params": [
                    {
                      "textRaw": "`signal` {String} Name of the kill signal to send to the worker process. ",
                      "name": "signal",
                      "type": "String",
                      "desc": "Name of the kill signal to send to the worker process.",
                      "optional": true,
                      "default": "'SIGTERM'"
                    }
                  ]
                },
                {
                  "params": [
                    {
                      "name": "signal",
                      "optional": true,
                      "default": "'SIGTERM'"
                    }
                  ]
                }
              ],
              "desc": "<p>This function will kill the worker. In the master, it does this by disconnecting\nthe <code>worker.process</code>, and once disconnected, killing with <code>signal</code>. In the\nworker, it does it by disconnecting the channel, and then exiting with code <code>0</code>.\n\n</p>\n<p>Causes <code>.suicide</code> to be set.\n\n</p>\n<p>This method is aliased as <code>worker.destroy()</code> for backwards compatibility.\n\n</p>\n<p>Note that in a worker, <code>process.kill()</code> exists, but it is not this function,\nit is <a href=\"process.html#process_process_kill_pid_signal\">kill</a>.\n\n</p>\n"
            },
            {
              "textRaw": "worker.disconnect()",
              "type": "method",
              "name": "disconnect",
              "desc": "<p>In a worker, this function will close all servers, wait for the &#39;close&#39; event on\nthose servers, and then disconnect the IPC channel.\n\n</p>\n<p>In the master, an internal message is sent to the worker causing it to call\n<code>.disconnect()</code> on itself.\n\n</p>\n<p>Causes <code>.suicide</code> to be set.\n\n</p>\n<p>Note that after a server is closed, it will no longer accept new connections,\nbut connections may be accepted by any other listening worker. Existing\nconnections will be allowed to close as usual. When no more connections exist,\nsee <a href=\"net.html#net_event_close\">server.close()</a>, the IPC channel to the worker\nwill close allowing it to die gracefully.\n\n</p>\n<p>The above applies <em>only</em> to server connections, client connections are not\nautomatically closed by workers, and disconnect does not wait for them to close\nbefore exiting.\n\n</p>\n<p>Note that in a worker, <code>process.disconnect</code> exists, but it is not this function,\nit is <a href=\"child_process.html#child_process_child_disconnect\">disconnect</a>.\n\n</p>\n<p>Because long living server connections may block workers from disconnecting, it\nmay be useful to send a message, so application specific actions may be taken to\nclose them. It also may be useful to implement a timeout, killing a worker if\nthe <code>disconnect</code> event has not been emitted after some time.\n\n</p>\n<pre><code>if (cluster.isMaster) {\n  var worker = cluster.fork();\n  var timeout;\n\n  worker.on(&#39;listening&#39;, function(address) {\n    worker.send(&#39;shutdown&#39;);\n    worker.disconnect();\n    timeout = setTimeout(function() {\n      worker.kill();\n    }, 2000);\n  });\n\n  worker.on(&#39;disconnect&#39;, function() {\n    clearTimeout(timeout);\n  });\n\n} else if (cluster.isWorker) {\n  var net = require(&#39;net&#39;);\n  var server = net.createServer(function(socket) {\n    // connections never end\n  });\n\n  server.listen(8000);\n\n  process.on(&#39;message&#39;, function(msg) {\n    if(msg === &#39;shutdown&#39;) {\n      // initiate graceful close of any connections to server\n    }\n  });\n}</code></pre>\n",
              "signatures": [
                {
                  "params": []
                }
              ]
            }
          ],
          "events": [
            {
              "textRaw": "Event: 'message'",
              "type": "event",
              "name": "message",
              "params": [],
              "desc": "<p>This event is the same as the one provided by <code>child_process.fork()</code>.\n\n</p>\n<p>In a worker you can also use <code>process.on(&#39;message&#39;)</code>.\n\n</p>\n<p>As an example, here is a cluster that keeps count of the number of requests\nin the master process using the message system:\n\n</p>\n<pre><code>var cluster = require(&#39;cluster&#39;);\nvar http = require(&#39;http&#39;);\n\nif (cluster.isMaster) {\n\n  // Keep track of http requests\n  var numReqs = 0;\n  setInterval(function() {\n    console.log(&quot;numReqs =&quot;, numReqs);\n  }, 1000);\n\n  // Count requestes\n  function messageHandler(msg) {\n    if (msg.cmd &amp;&amp; msg.cmd == &#39;notifyRequest&#39;) {\n      numReqs += 1;\n    }\n  }\n\n  // Start workers and listen for messages containing notifyRequest\n  var numCPUs = require(&#39;os&#39;).cpus().length;\n  for (var i = 0; i &lt; numCPUs; i++) {\n    cluster.fork();\n  }\n\n  Object.keys(cluster.workers).forEach(function(id) {\n    cluster.workers[id].on(&#39;message&#39;, messageHandler);\n  });\n\n} else {\n\n  // Worker processes have a http server.\n  http.Server(function(req, res) {\n    res.writeHead(200);\n    res.end(&quot;hello world\\n&quot;);\n\n    // notify master about the request\n    process.send({ cmd: &#39;notifyRequest&#39; });\n  }).listen(8000);\n}</code></pre>\n"
            },
            {
              "textRaw": "Event: 'online'",
              "type": "event",
              "name": "online",
              "desc": "<p>Similar to the <code>cluster.on(&#39;online&#39;)</code> event, but specific to this worker.\n\n</p>\n<pre><code>cluster.fork().on(&#39;online&#39;, function() {\n  // Worker is online\n});</code></pre>\n<p>It is not emitted in the worker.\n\n</p>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'listening'",
              "type": "event",
              "name": "listening",
              "params": [],
              "desc": "<p>Similar to the <code>cluster.on(&#39;listening&#39;)</code> event, but specific to this worker.\n\n</p>\n<pre><code>cluster.fork().on(&#39;listening&#39;, function(address) {\n  // Worker is listening\n});</code></pre>\n<p>It is not emitted in the worker.\n\n</p>\n"
            },
            {
              "textRaw": "Event: 'disconnect'",
              "type": "event",
              "name": "disconnect",
              "desc": "<p>Similar to the <code>cluster.on(&#39;disconnect&#39;)</code> event, but specfic to this worker.\n\n</p>\n<pre><code>cluster.fork().on(&#39;disconnect&#39;, function() {\n  // Worker has disconnected\n});</code></pre>\n",
              "params": []
            },
            {
              "textRaw": "Event: 'exit'",
              "type": "event",
              "name": "exit",
              "params": [],
              "desc": "<p>Similar to the <code>cluster.on(&#39;exit&#39;)</code> event, but specific to this worker.\n\n</p>\n<pre><code>var worker = cluster.fork();\nworker.on(&#39;exit&#39;, function(code, signal) {\n  if( signal ) {\n    console.log(&quot;worker was killed by signal: &quot;+signal);\n  } else if( code !== 0 ) {\n    console.log(&quot;worker exited with error code: &quot;+code);\n  } else {\n    console.log(&quot;worker success!&quot;);\n  }\n});</code></pre>\n"
            },
            {
              "textRaw": "Event: 'error'",
              "type": "event",
              "name": "error",
              "desc": "<p>This event is the same as the one provided by <code>child_process.fork()</code>.\n\n</p>\n<p>In a worker you can also use <code>process.on(&#39;error&#39;)</code>.\n\n</p>\n",
              "params": []
            }
          ]
        }
      ],
      "type": "module",
      "displayName": "Cluster"
    }
  ],
  "stability": 3,
  "stabilityText": "Stable"
}

map(json);

console.log(find(['fs'], stuff));