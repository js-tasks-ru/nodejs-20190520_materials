(window.webpackJsonp=window.webpackJsonp||[]).push([[0], {111: function(e, t) {}, 114: function(e, t, a) {}, 120: function(e, t, a) {
  'use strict'; a.r(t); const n=a(0); const r=a.n(n); const c=a(52); const o=a.n(c); const s=a(3); const l=a(7); const i=a(12); Boolean('localhost'===window.location.hostname||'[::1]'===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); const m=a(11); const u=a(54); const b=a(1); const f=a(55); const d=a.n(f).a.create(); const p=Symbol('LoginRequest'); const g=Symbol('LoginFailure'); const h=Symbol('LoginSuccess'); const v=Symbol('RegisterRequest'); const E=Symbol('RegisterFailure'); const k=Symbol('RegisterSuccess'); const y=Symbol('ConfirmRequest'); const j=Symbol('ConfirmFailure'); const O=Symbol('ConfirmSuccess'); const N=Symbol('OAuthRequest'); const S=Symbol('OAuthFailure'); const w=Symbol('OAuthCallbackRequest'); const C=Symbol('OAuthCallbackFailure'); const x=Symbol('OAuthCallbackSuccess'); const F=Symbol('FetchMeRequest'); const A=Symbol('FetchMeSuccess'); const R=Symbol('FetchMeRequest'); function M() {
    return function(e, t) {
      e({type: F}); const a=t().token; d.get('/api/me', {headers: {Authorization: 'Bearer '.concat(a)}}).then(function(t) {
        e({type: A, data: t.data});
      }).catch(function(t) {
        if (401===t.response.status) return localStorage.removeItem('token'), void window.location.reload(!0); console.error(t.response.data), e({type: R});
      });
    };
  } const W=Symbol('FetchMessagesRequest'); const q=Symbol('FetchMessagesSuccess'); const I=Symbol('FetchMessagesFailure'); function D() {
    return function(e, t) {
      e({type: W}); const a=t().token; d.get('/api/messages', {headers: {Authorization: 'Bearer '.concat(a)}}).then(function(t) {
        e({type: q, messages: t.data.messages});
      }).catch(function(t) {
        if (401===t.response.status) return localStorage.removeItem('token'), void window.location.reload(!0); console.error(t.response.data), e({type: I});
      });
    };
  } const T=a(25); const B=a(56); const L=a.n(B); const H=(a(114), Symbol('WebsocketConnected')); const z=Symbol('WebsocketDisconnected'); const J=Symbol('NewMessage'); let V=null; const _=Object(s.b)(function(e) {
    return {token: e.token, me: e.me, messages: e.messages, isWebsocketConnected: e.isWebsocketConnected};
  }, function(e) {
    return Object(b.a)({dispatch: e}, Object(m.b)({fetchMessages: D, fetchMe: M}, e));
  })(function(e) {
    const t=e.token; const a=e.me; const c=e.messages; const o=e.isWebsocketConnected; const s=e.dispatch; const l=e.fetchMessages; const i=e.fetchMe; const m=Object(n.useState)(''); const u=Object(T.a)(m, 2); const b=u[0]; const f=u[1]; const d=Object(n.useRef)(null); const p=Object(n.useRef)(null); return Object(n.useEffect)(function() {
      V=L()('?token='.concat(t)), l(), i(), V.on('connect', function() {
        s({type: H});
      }), V.on('disconnect', function() {
        s({type: z});
      }), V.on('user_message', function(e) {
        s({type: J, message: e});
      });
    }, []), Object(n.useEffect)(function() {
      d.current.scrollTop=p.current.scrollHeight;
    }, [c]), r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {style: {minHeight: '100vh'}, className: 'row justify-content-center'}, r.a.createElement('div', {className: 'col', style: {display: 'flex', flexDirection: 'column'}}, r.a.createElement('div', {className: 'alert alert-info'}, '\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435:', r.a.createElement('span', null, o?' \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d':' \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d')), !a.fetching&&r.a.createElement('p', null, 'name: ', a.data.displayName), r.a.createElement('div', {className: 'chat'}, r.a.createElement('div', {className: 'chat-history', ref: d}, r.a.createElement('ul', {className: 'messages', ref: p}, c.fetching&&r.a.createElement('div', {className: 'spinner-border', role: 'status'}), !c.fetching&&0===c.list.length&&r.a.createElement('p', {className: 'text-muted'}, '\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442'), c.list.map(function(e) {
      return r.a.createElement('li', {className: 'clearfix'}, r.a.createElement('div', {className: 'message-data'}, r.a.createElement('span', {className: 'message-data-time'}, function(e) {
        const t=new Date(e); return ''.concat(t.getHours(), ':').concat(t.getMinutes());
      }(e.date)), r.a.createElement('span', {class: 'message-data-name'}, e.user)), r.a.createElement('div', {className: 'message message-my'}, e.text));
    })), r.a.createElement('form', {className: 'chat-message clearfix', onSubmit: function(e) {
      e.preventDefault(), o&&b&&(V.emit('message', b), f(''));
    }}, r.a.createElement('textarea', {disabled: !o, value: b, onChange: function(e) {
      return f(e.target.value);
    }, placeholder: '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435', rows: '3'}), r.a.createElement('button', {type: 'submit', disabled: !o}, '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c')))))));
  }); const G={token: localStorage.getItem('token')||null, login: {error: null, processing: !1}, registration: {errors: null, processing: !1, complete: !1}, confirmation: {error: null, processing: !1}, oauth: {error: null, processing: !1}, oauthCallback: {error: null, processing: !1}, isWebsocketConnected: !1, messages: {fetching: !1, list: []}, me: {data: {}, fetching: !1}}; const K=Object(m.c)(function() {
    const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G; const t=arguments.length>1?arguments[1]:void 0; switch (t.type) {
      case p: return Object(b.a)({}, e, {login: Object(b.a)({}, G.login, {processing: !0})}); case h: return localStorage.setItem('token', t.token), Object(b.a)({}, e, {login: G.login, token: t.token}); case g: return Object(b.a)({}, e, {login: Object(b.a)({}, G.login, {error: t.error, processing: !1})}); case v: return Object(b.a)({}, e, {registration: Object(b.a)({}, G.registration, {processing: !0})}); case k: return Object(b.a)({}, e, {registration: Object(b.a)({}, G.registration, {processing: !1, complete: !0})}); case E: return Object(b.a)({}, e, {registration: Object(b.a)({}, G.registration, {errors: t.errors, processing: !1})}); case y: return Object(b.a)({}, e, {confirmation: Object(b.a)({}, G.confirmation, {processing: !0})}); case O: return localStorage.setItem('token', t.token), Object(b.a)({}, e, {confirmation: G.confirmation, token: t.token}); case j: return Object(b.a)({}, e, {confirmation: Object(b.a)({}, G.confirmation, {error: t.error, processing: !1})}); case N: return Object(b.a)({}, e, {oauth: Object(b.a)({}, G.oauth, {processing: !0})}); case S: return Object(b.a)({}, e, {oauth: Object(b.a)({}, G.oauth, {error: t.error, processing: !1})}); case w: return Object(b.a)({}, e, {oauthCallback: Object(b.a)({}, G.oauthCallback, {processing: !0})}); case C: return Object(b.a)({}, e, {oauthCallback: Object(b.a)({}, G.oauthCallback, {error: t.error, processing: !1})}); case x: return localStorage.setItem('token', t.token), Object(b.a)({}, e, {oauthCallback: G.oauthCallback, token: t.token}); case W: return Object(b.a)({}, e, {messages: Object(b.a)({}, e.messages, {fetching: !0})}); case q: return Object(b.a)({}, e, {messages: Object(b.a)({}, e.messages, {list: t.messages.concat(e.messages.list), fetching: !1})}); case I: return Object(b.a)({}, e, {messages: Object(b.a)({}, e.messages, {fetching: !1})}); case F: return Object(b.a)({}, e, {me: Object(b.a)({}, e.me, {data: {}, fetching: !0})}); case A: return Object(b.a)({}, e, {me: Object(b.a)({}, e.me, {data: t.data, fetching: !1})}); case R: return Object(b.a)({}, e, {me: Object(b.a)({}, e.me, {data: {}, fetching: !1})}); case H: return Object(b.a)({}, e, {isWebsocketConnected: !0}); case z: return Object(b.a)({}, e, {isWebsocketConnected: !1}); case J: return Object(b.a)({}, e, {messages: Object(b.a)({}, e.messages, {list: e.messages.list.concat(t.message), fetching: !1})}); default: return e;
    }
  }, Object(m.a)(u.a)); const P=a(58); const U=Object(s.b)(function(e) {
    return {token: e.token};
  })(function(e) {
    const t=e.token; const a=Object(P.a)(e, ['token']); return r.a.createElement(i.b, Object.assign({}, a, {render: function() {
      return t?r.a.createElement(_, null):r.a.createElement(i.a, {to: '/login'});
    }}));
  }); const $=a(24); const Q={oauthAction: function(e) {
    const t=e.provider; return function(e, a) {
      e({type: N}), d.get('/api/oauth/'.concat(t)).then(function(e) {
        window.location.href=e.data.location;
      }).catch(function(t) {
        e({type: S, error: t.response.data.error});
      });
    };
  }}; const X=Object(s.b)(function(e) {
    return {oauth: e.oauth};
  }, Q)(function(e) {
    e.oauth; const t=e.oauthAction; function a(e) {
      return function() {
        return t({provider: e});
      };
    } return r.a.createElement('div', {className: 'text-center'}, r.a.createElement('p', null, '\u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438:'), r.a.createElement('button', {className: 'btn btn-link btn-lg text-info mx-2', onClick: a('facebook')}, r.a.createElement('i', {className: 'fab fa-facebook-f'})), r.a.createElement('button', {className: 'btn btn-link btn-lg text-info mx-2', onClick: a('vkontakte')}, r.a.createElement('i', {className: 'fab fa-vk'})), r.a.createElement('button', {className: 'btn btn-link btn-lg text-info mx-2', onClick: a('github')}, r.a.createElement('i', {className: 'fab fa-github'})));
  }); function Y(e) {
    const t=Object(n.useState)({}); const a=Object(T.a)(t, 2); const c=a[0]; const o=a[1]; function s(e) {
      o(Object(b.a)({}, c, Object($.a)({}, e.target.name, e.target.value)));
    } return r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {className: 'row justify-content-center align-items-center'}, r.a.createElement('div', {className: 'col col-md-6'}, r.a.createElement('form', {onSubmit: function(t) {
      return e.onSubmit(t, c);
    }, className: 'text-center border border-light p-5', noValidate: !0}, r.a.createElement('p', {className: 'h4 mb-4'}, e.title), e.error&&r.a.createElement('p', {className: 'text-left text-danger'}, e.error), e.fields.map(function(t) {
      let a='form-control'; return e.errors&&(e.errors[t.name]?a+=' is-invalid':a+=' is-valid'), r.a.createElement('div', {className: 'form-row mb-4', key: t.name}, r.a.createElement('input', {value: c[t.name]||'', onChange: s, type: t.type, name: t.name, required: !0, className: a, disabled: e.disabled, placeholder: t.placeholder}), e.errors&&e.errors[t.name]&&r.a.createElement('div', {className: 'invalid-feedback text-left'}, e.errors[t.name]));
    }), r.a.createElement('button', {disabled: e.disabled, className: 'btn btn-info btn-block my-4', type: 'submit'}, e.button), r.a.createElement(e.Footer, null)), r.a.createElement(X, null))));
  } const Z=[{type: 'email', name: 'email', placeholder: 'email', icon: 'fa-at'}, {type: 'password', name: 'password', placeholder: '\u043f\u0430\u0440\u043e\u043b\u044c', icon: 'fa-key'}]; const ee={loginAction: function(e) {
    const t=e.email; const a=e.password; return function(e, n) {
      e({type: p}), d.post('/api/login', {email: t, password: a}).then(function(t) {
        e({type: h, token: t.data.token});
      }).catch(function(t) {
        e({type: g, error: t.response.data.error});
      });
    };
  }}; const te=Object(s.b)(function(e) {
    return {login: e.login, token: e.token};
  }, ee)(function(e) {
    const t=e.token; const a=e.login; const n=e.loginAction; return t?r.a.createElement(i.a, {to: '/'}):r.a.createElement(Y, {disabled: a.processing, title: '\u0412\u0445\u043e\u0434', validated: a.errors, error: a.error, onSubmit: function(e, t) {
      e.preventDefault(), a.processing||n(t);
    }, fields: Z, button: '\u0412\u043e\u0439\u0442\u0438', Footer: function() {
      return r.a.createElement('p', null, '\u0415\u0449\u0435 \u043d\u0435\u0442 \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430?\xa0', r.a.createElement(l.b, {to: '/register'}, '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f'));
    }});
  }); const ae={vkontakte: 'VK', fb: 'Facebook', github: 'Github'}; const ne={oauthCallbackAction: function(e) {
    const t=e.provider; const a=e.code; return function(e, n) {
      e({type: w}), d.post('/api/oauth_callback', {provider: t}, {params: {code: a}}).then(function(t) {
        e({type: x, token: t.data.token});
      }).catch(function(t) {
        e({type: C, error: t.response.data.error});
      });
    };
  }}; const re=Object(s.b)(function(e) {
    return {oauthCallback: e.oauthCallback, token: e.token};
  }, ne)(function(e) {
    const t=e.token; const a=e.oauthCallback; const c=e.oauthCallbackAction; const o=e.match; const s=e.location; if (t) return r.a.createElement(i.a, {to: '/'}); const m=new URLSearchParams(s.search); const u=o.params.provider; return Object(n.useEffect)(function() {
      m.get('error')||c({code: m.get('code'), provider: u});
    }, []), r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {className: 'row login-form justify-content-center align-items-center'}, r.a.createElement('div', {className: 'col col-md-6'}, r.a.createElement('div', {className: 'text-center border border-light p-5'}, r.a.createElement('p', {className: 'h4 mb-4'}, '\u041b\u043e\u0433\u0438\u043d \u0447\u0435\u0440\u0435\u0437 ', ae[u]), a.error||m.get('error')?r.a.createElement(r.a.Fragment, null, r.a.createElement('p', {className: 'text-danger'}, '\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.'), r.a.createElement('p', {className: 'text-danger'}, a.error||''), r.a.createElement(l.b, {to: '/'}, '\u0412\u0445\u043e\u0434')):r.a.createElement(r.a.Fragment, null, r.a.createElement('p', null, '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435.'), r.a.createElement('div', {className: 'spinner-border', role: 'status'}, r.a.createElement('span', {className: 'sr-only'}, '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...')))))));
  }); const ce=[{type: 'email', name: 'email', placeholder: 'email', icon: 'fa-at'}, {type: 'text', name: 'displayName', placeholder: '\u0438\u043c\u044f', icon: 'fa-user'}, {type: 'password', name: 'password', placeholder: '\u043f\u0430\u0440\u043e\u043b\u044c', icon: 'fa-key'}]; const oe={registerAction: function(e) {
    const t=e.email; const a=e.displayName; const n=e.password; return function(e, r) {
      e({type: v}), d.post('/api/register', {email: t, displayName: a, password: n}).then(function(t) {
        e({type: k});
      }).catch(function(t) {
        e({type: E, errors: t.response.data.errors});
      });
    };
  }}; const se=Object(s.b)(function(e) {
    return {registration: e.registration};
  }, oe)(function(e) {
    const t=e.registration; const a=e.registerAction; return t.complete?r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {className: 'row login-form justify-content-center align-items-center'}, r.a.createElement('div', {className: 'col col-md-6'}, r.a.createElement('div', {className: 'text-center border border-light p-5'}, r.a.createElement('p', {className: 'h4 mb-4'}, '\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c, \u0432\u044b \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b!'), r.a.createElement('p', null, '\u041d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u0443\u044e \u0432\u0430\u043c\u0438 \u043f\u043e\u0447\u0442\u0443 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e \u043f\u0438\u0441\u044c\u043c\u043e.'), r.a.createElement('p', null, '\u0414\u043b\u044f \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435 \u0438\u0437 \u044d\u0442\u043e\u0433\u043e \u043f\u0438\u0441\u044c\u043c\u0430.'))))):r.a.createElement(Y, {disabled: t.processing, title: '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f', validated: t.errors, errors: t.errors, onSubmit: function(e, n) {
      e.preventDefault(), t.processing||a(n);
    }, fields: ce, button: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442', Footer: function() {
      return r.a.createElement('p', null, '\u0423\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442?\xa0', r.a.createElement(l.b, {to: '/login'}, '\u0412\u0445\u043e\u0434'));
    }});
  }); const le={confirmAction: function(e) {
    const t=e.verificationToken; return function(e, a) {
      e({type: y}), d.post('/api/confirm', {verificationToken: t}).then(function(t) {
        e({type: O, token: t.data.token});
      }).catch(function(t) {
        e({type: j, error: t.response.data.error});
      });
    };
  }}; const ie=Object(s.b)(function(e) {
    return {confirmation: e.confirmation, token: e.token};
  }, le)(function(e) {
    const t=e.token; const a=e.confirmation; const c=e.confirmAction; const o=e.match; return t?r.a.createElement(i.a, {to: '/'}):(Object(n.useEffect)(function() {
      c({verificationToken: o.params.verificationToken});
    }, []), r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {className: 'row login-form justify-content-center align-items-center'}, r.a.createElement('div', {className: 'col col-md-6'}, r.a.createElement('div', {className: 'text-center border border-light p-5'}, r.a.createElement('p', {className: 'h4 mb-4'}, '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043f\u043e\u0447\u0442\u043e\u0432\u043e\u0433\u043e \u0430\u0434\u0440\u0435\u0441\u0430'), a.error?r.a.createElement(r.a.Fragment, null, r.a.createElement('p', {className: 'text-danger'}, '\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.'), r.a.createElement('p', {className: 'text-danger'}, a.error), r.a.createElement(l.b, {to: '/'}, '\u0412\u0445\u043e\u0434')):r.a.createElement(r.a.Fragment, null, r.a.createElement('p', null, '\u041f\u043e\u0447\u0442\u043e\u0432\u044b\u0439 \u0430\u0434\u0440\u0435\u0441 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0430\u0435\u0442\u0441\u044f, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435.'), r.a.createElement('div', {className: 'spinner-border', role: 'status'}, r.a.createElement('span', {className: 'sr-only'}, '\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...'))))))));
  }); o.a.render(r.a.createElement(s.a, {store: K}, r.a.createElement(l.a, null, r.a.createElement(i.b, {exact: !0, path: '/', component: U}), r.a.createElement(i.b, {path: '/login', component: te}), r.a.createElement(i.b, {path: '/oauth/:provider', component: re}), r.a.createElement(i.b, {path: '/register', component: se}), r.a.createElement(i.b, {path: '/confirm/:verificationToken', component: ie}))), document.getElementById('root')), 'serviceWorker'in navigator&&navigator.serviceWorker.ready.then(function(e) {
    e.unregister();
  });
}, 59: function(e, t, a) {
  e.exports=a(120);
}}, [[59, 1, 2]]]);
// # sourceMappingURL=main.d4ac0962.chunk.js.map
