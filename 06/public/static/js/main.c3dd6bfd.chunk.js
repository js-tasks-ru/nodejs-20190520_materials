(window.webpackJsonp=window.webpackJsonp||[]).push([[0], {112: function(e, t) {}, 120: function(e, t, a) {
  'use strict'; a.r(t); const n=a(0); const r=a.n(n); const o=a(52); const c=a.n(o); const s=a(5); const l=a(15); const i=a(11); Boolean('localhost'===window.location.hostname||'[::1]'===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)); const m=a(10); const u=a(54); const b=a(55); const g=a(1); const d=a(56); const f=a.n(d).a.create(); const p=Symbol('LoginRequest'); const h=Symbol('LoginFailure'); const k=Symbol('LoginSuccess'); const v=Symbol('RegisterRequest'); const E=Symbol('RegisterFailure'); const y=Symbol('RegisterSuccess'); const O=Symbol('ConfirmRequest'); const j=Symbol('ConfirmFailure'); const N=Symbol('ConfirmSuccess'); const S=Symbol('OAuthRequest'); const C=Symbol('OAuthFailure'); const w=Symbol('OAuthCallbackRequest'); const x=Symbol('OAuthCallbackFailure'); const A=Symbol('OAuthCallbackSuccess'); const F=Symbol('FetchMessagesRequest'); const R=Symbol('FetchMessagesSuccess'); function W() {
    return function(e, t) {
      e({type: F}); const a=t().token; f.get('/api/messages', {headers: {Authorization: 'Bearer '.concat(a)}}).then(function(t) {
        e({type: R, messages: t.data.messages});
      }).catch(function(e) {
        console.error(e.response.data);
      });
    };
  } const q=a(25); const L=a(57); const I=a.n(L); const M=Symbol('WebsocketConnected'); const _=Symbol('WebsocketDisconnected'); const D=Symbol('NewMessage'); let B=null; Object(s.b)(function(e) {
    return {token: e.token, messages: e.messages, isWebsocketConnected: e.isWebsocketConnected};
  }, function(e) {
    return Object(g.a)({dispatch: e}, Object(m.b)({fetchMessages: W}, e));
  })(function(e) {
    const t=e.token; const a=e.messages; const o=e.isWebsocketConnected; const c=e.dispatch; const s=e.fetchMessages; const l=Object(n.useState)(''); const i=Object(q.a)(l, 2); const m=i[0]; const u=i[1]; return Object(n.useEffect)(function() {
      B=I()('http://localhost:3001?token='.concat(t)), s(), B.on('connect', function() {
        console.log('connect'), c({type: M});
      }), B.on('disconnect', function() {
        console.log('disconnect'), c({type: _});
      }), B.on('system_message', function(e) {
        console.log('system_message', e), c({type: D, message: e});
      }), B.on('user_message', function(e) {
        console.log('user_message', e), c({type: D, message: e});
      });
    }, []), r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {style: {minHeight: '100vh'}, className: 'row justify-content-center'}, r.a.createElement('div', {className: 'col col-md-6', style: {display: 'flex', flexDirection: 'column'}}, r.a.createElement('div', {className: 'my-4', style: {flexGrow: 1}}, a.fetching&&r.a.createElement('div', {className: 'spinner-border', role: 'status'}, r.a.createElement('span', {className: 'sr-only'}, 'Loading...')), !a.fetching&&0===a.list.length&&r.a.createElement('p', {className: 'text-muted'}, '\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442'), a.list.map(function(e) {
      return r.a.createElement('div', {className: 'card'}, r.a.createElement('div', {className: 'card-body'}, r.a.createElement('p', {className: 'card-text'}, e.text), r.a.createElement('p', {className: 'card-text text-muted'}, 'Timothy, 10:29')));
    })), r.a.createElement('form', {onSubmit: function(e) {
      e.preventDefault(), o&&m&&(B.emit('message', m), u(''));
    }, className: 'form-inline form-row text-center my-4'}, r.a.createElement('input', {type: 'text', value: m, disabled: !o, onChange: function(e) {
      return u(e.target.value);
    }, className: 'form-control col', placeholder: 'message'}), r.a.createElement('button', {disabled: !o, type: 'submit', className: 'btn btn-info'}, 'Send')))));
  }); const G={token: localStorage.getItem('token')||null, login: {error: null, processing: !1}, registration: {errors: null, processing: !1, complete: !1}, confirmation: {error: null, processing: !1}, oauth: {error: null, processing: !1}, oauthCallback: {error: null, processing: !1}, isWebsocketConnected: !1, messages: {fetching: !0, list: []}}; const J=Object(b.createLogger)(); const V=Object(m.c)(function() {
    const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G; const t=arguments.length>1?arguments[1]:void 0; switch (t.type) {
      case p: return Object(g.a)({}, e, {login: Object(g.a)({}, G.login, {processing: !0})}); case k: return localStorage.setItem('token', t.token), Object(g.a)({}, e, {login: G.login, token: t.token}); case h: return Object(g.a)({}, e, {login: Object(g.a)({}, G.login, {error: t.error, processing: !1})}); case v: return Object(g.a)({}, e, {registration: Object(g.a)({}, G.registration, {processing: !0})}); case y: return Object(g.a)({}, e, {registration: Object(g.a)({}, G.registration, {processing: !1, complete: !0})}); case E: return Object(g.a)({}, e, {registration: Object(g.a)({}, G.registration, {errors: t.errors, processing: !1})}); case O: return Object(g.a)({}, e, {confirmation: Object(g.a)({}, G.confirmation, {processing: !0})}); case N: return localStorage.setItem('token', t.token), Object(g.a)({}, e, {confirmation: G.confirmation, token: t.token}); case j: return Object(g.a)({}, e, {confirmation: Object(g.a)({}, G.confirmation, {error: t.error, processing: !1})}); case S: return Object(g.a)({}, e, {oauth: Object(g.a)({}, G.oauth, {processing: !0})}); case C: return Object(g.a)({}, e, {oauth: Object(g.a)({}, G.oauth, {error: t.error, processing: !1})}); case w: return Object(g.a)({}, e, {oauthCallback: Object(g.a)({}, G.oauthCallback, {processing: !0})}); case x: return Object(g.a)({}, e, {oauthCallback: Object(g.a)({}, G.oauthCallback, {error: t.error, processing: !1})}); case A: return localStorage.setItem('token', t.token), Object(g.a)({}, e, {oauthCallback: G.oauthCallback, token: t.token}); case F: return Object(g.a)({}, e, {messages: Object(g.a)({}, e.messages, {fetching: !0})}); case R: return Object(g.a)({}, e, {messages: Object(g.a)({}, e.messages, {list: t.messages.concat(e.messages), fetching: !1})}); case M: return Object(g.a)({}, e, {isWebsocketConnected: !0}); case _: return Object(g.a)({}, e, {isWebsocketConnected: !1}); default: return e;
    }
  }, Object(m.a)(u.a, J)); const z=a(59); function H() {
    return r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {className: 'row login-form justify-content-center align-items-center'}, r.a.createElement('div', {className: 'col col-md-6'}, r.a.createElement('div', {className: 'text-center border border-light p-5'}, r.a.createElement('p', {className: 'h4 mb-4'}, '\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c, \u0432\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0432\u043e\u0448\u043b\u0438 \u043d\u0430 \u0441\u0430\u0439\u0442')))));
  } const K=Object(s.b)(function(e) {
    return {token: e.token};
  })(function(e) {
    const t=e.token; const a=Object(z.a)(e, ['token']); return r.a.createElement(i.b, Object.assign({}, a, {render: function() {
      return t?r.a.createElement(H, null):r.a.createElement(i.a, {to: '/login'});
    }}));
  }); const P=a(24); const T={oauthAction: function(e) {
    const t=e.provider; return function(e, a) {
      e({type: S}), f.get('/api/oauth/'.concat(t)).then(function(e) {
        window.location.href=e.data.location;
      }).catch(function(t) {
        e({type: C, error: t.response.data.error});
      });
    };
  }}; const U=Object(s.b)(function(e) {
    return {oauth: e.oauth};
  }, T)(function(e) {
    e.oauth; const t=e.oauthAction; function a(e) {
      return function() {
        return t({provider: e});
      };
    } return r.a.createElement('div', {className: 'text-center'}, r.a.createElement('p', null, '\u0438\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438:'), r.a.createElement('button', {className: 'btn btn-link btn-lg text-info mx-2', onClick: a('facebook')}, r.a.createElement('i', {className: 'fab fa-facebook-f'})), r.a.createElement('button', {className: 'btn btn-link btn-lg text-info mx-2', onClick: a('vkontakte')}, r.a.createElement('i', {className: 'fab fa-vk'})), r.a.createElement('button', {className: 'btn btn-link btn-lg text-info mx-2', onClick: a('github')}, r.a.createElement('i', {className: 'fab fa-github'})));
  }); function $(e) {
    const t=Object(n.useState)({}); const a=Object(q.a)(t, 2); const o=a[0]; const c=a[1]; function s(e) {
      c(Object(g.a)({}, o, Object(P.a)({}, e.target.name, e.target.value)));
    } return r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {className: 'row justify-content-center align-items-center'}, r.a.createElement('div', {className: 'col col-md-6'}, r.a.createElement('form', {onSubmit: function(t) {
      return e.onSubmit(t, o);
    }, className: 'text-center border border-light p-5', noValidate: !0}, r.a.createElement('p', {className: 'h4 mb-4'}, e.title), e.error&&r.a.createElement('p', {className: 'text-left text-danger'}, e.error), e.fields.map(function(t) {
      let a='form-control'; return e.errors&&(e.errors[t.name]?a+=' is-invalid':a+=' is-valid'), r.a.createElement('div', {className: 'form-row mb-4'}, r.a.createElement('input', {value: o[t.name]||'', onChange: s, type: t.type, name: t.name, required: !0, className: a, disabled: e.disabled, placeholder: t.placeholder}), e.errors&&e.errors[t.name]&&r.a.createElement('div', {className: 'invalid-feedback text-left'}, e.errors[t.name]));
    }), r.a.createElement('button', {disabled: e.disabled, className: 'btn btn-info btn-block my-4', type: 'submit'}, e.button)), r.a.createElement(U, null))));
  } const Q=[{type: 'email', name: 'email', placeholder: 'email', icon: 'fa-at'}, {type: 'password', name: 'password', placeholder: '\u043f\u0430\u0440\u043e\u043b\u044c', icon: 'fa-key'}]; const X={loginAction: function(e) {
    const t=e.email; const a=e.password; return function(e, n) {
      e({type: p}), f.post('/api/login', {email: t, password: a}).then(function(t) {
        e({type: k, token: t.data.token});
      }).catch(function(t) {
        e({type: h, error: t.response.data.error});
      });
    };
  }}; const Y=Object(s.b)(function(e) {
    return {login: e.login, token: e.token};
  }, X)(function(e) {
    const t=e.token; const a=e.login; const n=e.loginAction; return t?r.a.createElement(i.a, {to: '/'}):r.a.createElement($, {disabled: a.processing, title: '\u0412\u0445\u043e\u0434', validated: a.errors, error: a.error, onSubmit: function(e, t) {
      e.preventDefault(), a.processing||n(t);
    }, fields: Q, button: '\u0412\u043e\u0439\u0442\u0438'});
  }); const Z={vkontakte: 'VK', fb: 'Facebook', github: 'Github'}; const ee={oauthCallbackAction: function(e) {
    const t=e.provider; const a=e.code; return function(e, n) {
      e({type: w}), f.post('/api/oauth_callback', {provider: t}, {params: {code: a}}).then(function(t) {
        e({type: A, token: t.data.token});
      }).catch(function(t) {
        e({type: x, error: t.response.data.error});
      });
    };
  }}; const te=Object(s.b)(function(e) {
    return {oauthCallback: e.oauthCallback, token: e.token};
  }, ee)(function(e) {
    const t=e.token; const a=e.oauthCallback; const o=e.oauthCallbackAction; const c=e.match; const s=e.location; if (t) return r.a.createElement(i.a, {to: '/'}); const m=new URLSearchParams(s.search); const u=c.params.provider; return Object(n.useEffect)(function() {
      m.get('error')||o({code: m.get('code'), provider: u});
    }, []), r.a.createElement('main', {className: 'container'}, r.a.createElement('div', {className: 'row login-form justify-content-center align-items-center'}, r.a.createElement('div', {className: 'col col-md-6'}, r.a.createElement('div', {className: 'text-center border border-light p-5'}, r.a.createElement('p', {className: 'h4 mb-4'}, '\u041b\u043e\u0433\u0438\u043d \u0447\u0435\u0440\u0435\u0437 ', Z[u]), a.error||m.get('error')?r.a.createElement(r.a.Fragment, null, r.a.createElement('p', {className: 'text-danger'}, '\u041f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430.'), r.a.createElement('p', {className: 'text-danger'}, a.error||''), r.a.createElement(l.b, {to: '/'}, 'Sign In')):r.a.createElement(r.a.Fragment, null, r.a.createElement('p', null, '\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435.'), r.a.createElement('div', {className: 'spinner-border', role: 'status'}, r.a.createElement('span', {className: 'sr-only'}, 'Loading...')))))));
  }); c.a.render(r.a.createElement(s.a, {store: V}, r.a.createElement(l.a, null, r.a.createElement(i.b, {exact: !0, path: '/', component: K}), r.a.createElement(i.b, {path: '/login', component: Y}), r.a.createElement(i.b, {path: '/oauth/:provider', component: te}))), document.getElementById('root')), 'serviceWorker'in navigator&&navigator.serviceWorker.ready.then(function(e) {
    e.unregister();
  });
}, 60: function(e, t, a) {
  e.exports=a(120);
}}, [[60, 1, 2]]]);
// # sourceMappingURL=main.c3dd6bfd.chunk.js.map
